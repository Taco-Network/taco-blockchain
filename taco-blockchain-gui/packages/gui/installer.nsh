!include "nsDialogs.nsh"

; Add our customizations to the finish page
!macro customFinishPage
XPStyle on

Var DetectDlg
Var FinishDlg
Var TacoSquirrelInstallLocation
Var TacoSquirrelInstallVersion
Var TacoSquirrelUninstaller
Var CheckboxUninstall
Var UninstallTacoSquirrelInstall
Var BackButton
Var NextButton

Page custom detectOldTacoVersion detectOldTacoVersionPageLeave
Page custom finish finishLeave

; Add a page offering to uninstall an older build installed into the taco-blockchain dir
Function detectOldTacoVersion
  ; Check the registry for old taco-blockchain installer keys
  ReadRegStr $TacoSquirrelInstallLocation HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\taco-blockchain" "InstallLocation"
  ReadRegStr $TacoSquirrelInstallVersion HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\taco-blockchain" "DisplayVersion"
  ReadRegStr $TacoSquirrelUninstaller HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\taco-blockchain" "QuietUninstallString"

  StrCpy $UninstallTacoSquirrelInstall ${BST_UNCHECKED} ; Initialize to unchecked so that a silent install skips uninstalling

  ; If registry keys aren't found, skip (Abort) this page and move forward
  ${If} TacoSquirrelInstallVersion == error
  ${OrIf} TacoSquirrelInstallLocation == error
  ${OrIf} $TacoSquirrelUninstaller == error
  ${OrIf} $TacoSquirrelInstallVersion == ""
  ${OrIf} $TacoSquirrelInstallLocation == ""
  ${OrIf} $TacoSquirrelUninstaller == ""
  ${OrIf} ${Silent}
    Abort
  ${EndIf}

  ; Check the uninstall checkbox by default
  StrCpy $UninstallTacoSquirrelInstall ${BST_CHECKED}

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $DetectDlg

  ${If} $DetectDlg == error
    Abort
  ${EndIf}

  !insertmacro MUI_HEADER_TEXT "Uninstall Old Version" "Would you like to uninstall the old version of Taco Blockchain?"

  ${NSD_CreateLabel} 0 35 100% 12u "Found Taco Blockchain $TacoSquirrelInstallVersion installed in an old location:"
  ${NSD_CreateLabel} 12 57 100% 12u "$TacoSquirrelInstallLocation"

  ${NSD_CreateCheckBox} 12 81 100% 12u "Uninstall Taco Blockchain $TacoSquirrelInstallVersion"
  Pop $CheckboxUninstall
  ${NSD_SetState} $CheckboxUninstall $UninstallTacoSquirrelInstall
  ${NSD_OnClick} $CheckboxUninstall SetUninstall

  nsDialogs::Show

FunctionEnd

Function SetUninstall
  ; Set UninstallTacoSquirrelInstall accordingly
  ${NSD_GetState} $CheckboxUninstall $UninstallTacoSquirrelInstall
FunctionEnd

Function detectOldTacoVersionPageLeave
  ${If} $UninstallTacoSquirrelInstall == 1
    ; This could be improved... Experiments with adding an indeterminate progress bar (PBM_SETMARQUEE)
    ; were unsatisfactory.
    ExecWait $TacoSquirrelUninstaller ; Blocks until complete (doesn't take long though)
  ${EndIf}
FunctionEnd

Function finish

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $FinishDlg

  ${If} $FinishDlg == error
    Abort
  ${EndIf}

  GetDlgItem $NextButton $HWNDPARENT 1 ; 1 = Next button
  GetDlgItem $BackButton $HWNDPARENT 3 ; 3 = Back button

  ${NSD_CreateLabel} 0 35 100% 12u "Taco has been installed successfully!"
  EnableWindow $BackButton 0 ; Disable the Back button
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Let's Farm!" ; Button title is "Close" by default. Update it here.

  nsDialogs::Show

FunctionEnd

; Copied from electron-builder NSIS templates
Function StartApp
  ${if} ${isUpdated}
    StrCpy $1 "--updated"
  ${else}
    StrCpy $1 ""
  ${endif}
  ${StdUtils.ExecShellAsUser} $0 "$launchLink" "open" "$1"
FunctionEnd

Function finishLeave
  ; Launch the app at exit
  Call StartApp
FunctionEnd

; Section
; SectionEnd
!macroend
