# $env:path should contain a path to editbin.exe and signtool.exe

$ErrorActionPreference = "Stop"

mkdir build_scripts\win_build

git status

if (-not (Test-Path env:TACO_INSTALLER_VERSION)) {
  $env:TACO_INSTALLER_VERSION = '0.0.0'
  Write-Output "WARNING: No environment variable TACO_INSTALLER_VERSION set. Using 0.0.0"
}
Write-Output "Taco Version is: $env:TACO_INSTALLER_VERSION"
Write-Output "   ---"

Write-Output "   ---"
Write-Output "Use pyinstaller to create taco .exe's"
Write-Output "   ---"
$SPEC_FILE = (python -c 'import taco; print(taco.PYINSTALLER_SPEC_PATH)') -join "`n"
pyinstaller --log-level INFO $SPEC_FILE

Write-Output "   ---"
Write-Output "Copy taco executables to taco-blockchain-gui\"
Write-Output "   ---"
Copy-Item "dist\daemon" -Destination "..\taco-blockchain-gui\packages\gui\" -Recurse

Write-Output "   ---"
Write-Output "Setup npm packager"
Write-Output "   ---"
Set-Location -Path ".\npm_windows" -PassThru
npm install
$Env:Path = $(npm bin) + ";" + $Env:Path
Set-Location -Path "..\" -PassThru

Set-Location -Path "..\taco-blockchain-gui" -PassThru
# We need the code sign cert in the gui subdirectory so we can actually sign the UI package
If ($env:HAS_SECRET) {
    Copy-Item "win_code_sign_cert.p12" -Destination "packages\gui\"
}

git status

Write-Output "   ---"
Write-Output "Prepare Electron packager"
Write-Output "   ---"
$Env:NODE_OPTIONS = "--max-old-space-size=3000"

lerna clean -y
npm install
# Audit fix does not currently work with Lerna. See https://github.com/lerna/lerna/issues/1663
# npm audit fix

git status

Write-Output "   ---"
Write-Output "Electron package Windows Installer"
Write-Output "   ---"
npm run build
If ($LastExitCode -gt 0){
    Throw "npm run build failed!"
}

# Change to the GUI directory
Set-Location -Path "packages\gui" -PassThru

Write-Output "   ---"
Write-Output "Increase the stack for taco command for (taco plots create) chiapos limitations"
# editbin.exe needs to be in the path
editbin.exe /STACK:8000000 daemon\taco.exe
Write-Output "   ---"

$packageVersion = "$env:TACO_INSTALLER_VERSION"
$packageName = "Taco-$packageVersion"

Write-Output "packageName is $packageName"

Write-Output "   ---"
Write-Output "fix version in package.json"
choco install jq
cp package.json package.json.orig
jq --arg VER "$env:TACO_INSTALLER_VERSION" '.version=$VER' package.json > temp.json
rm package.json
mv temp.json package.json
Write-Output "   ---"

Write-Output "   ---"
Write-Output "electron-packager"
electron-packager . Taco --asar.unpack="**\daemon\**" --overwrite --icon=.\src\assets\img\taco.ico --app-version=$packageVersion
Write-Output "   ---"

Write-Output "   ---"
Write-Output "node winstaller.js"
node winstaller.js
Write-Output "   ---"

git status

If ($env:HAS_SECRET) {
   Write-Output "   ---"
   Write-Output "Add timestamp and verify signature"
   Write-Output "   ---"
   signtool.exe timestamp /v /t http://timestamp.comodoca.com/ .\release-builds\windows-installer\TacoSetup-$packageVersion.exe
   signtool.exe verify /v /pa .\release-builds\windows-installer\TacoSetup-$packageVersion.exe
   }   Else    {
   Write-Output "Skipping timestamp and verify signatures - no authorization to install certificates"
}

git status

Write-Output "   ---"
Write-Output "Moving final installers to expected location"
Write-Output "   ---"
Copy-Item ".\Taco-win32-x64" -Destination "$env:GITHUB_WORKSPACE\taco-blockchain-gui\" -Recurse
Copy-Item ".\release-builds" -Destination "$env:GITHUB_WORKSPACE\taco-blockchain-gui\" -Recurse

Write-Output "   ---"
Write-Output "Windows Installer complete"
Write-Output "   ---"
