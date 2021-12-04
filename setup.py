from setuptools import setup

dependencies = [
    "multidict==5.1.0",  # Avoid 5.2.0 due to Avast
    "blspy==1.0.6",  # Signature library
    "chiavdf==1.0.3",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.6",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.15",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.4",  # Colorizes terminal output
    "colorlog==5.0.1",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Concurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "fasteners==0.16.3",  # For interprocess file locking
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the taco processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "websockets==8.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspythonchia==2.2.0",  # Query DNS seeds
    "watchdog==2.1.6",  # Filesystem event watching - watches keyring.yaml
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
    "types-setuptools",
]

kwargs = dict(
    name="taco-blockchain",
    description="Taco blockchain full node, farmer, timelord, and wallet.",
    url="https://taco.com/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="taco blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "taco",
        "taco.cmds",
        "taco.clvm",
        "taco.consensus",
        "taco.daemon",
        "taco.full_node",
        "taco.timelord",
        "taco.farmer",
        "taco.harvester",
        "taco.introducer",
        "taco.plotters",
        "taco.plotting",
        "taco.pools",
        "taco.protocols",
        "taco.rpc",
        "taco.server",
        "taco.simulator",
        "taco.types.blockchain_format",
        "taco.types",
        "taco.util",
        "taco.wallet",
        "taco.wallet.puzzles",
        "taco.wallet.rl_wallet",
        "taco.wallet.cc_wallet",
        "taco.wallet.did_wallet",
        "taco.wallet.settings",
        "taco.wallet.trading",
        "taco.wallet.util",
        "taco.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "taco = taco.cmds.taco:main",
            "taco_wallet = taco.server.start_wallet:main",
            "taco_full_node = taco.server.start_full_node:main",
            "taco_harvester = taco.server.start_harvester:main",
            "taco_farmer = taco.server.start_farmer:main",
            "taco_introducer = taco.server.start_introducer:main",
            "taco_timelord = taco.server.start_timelord:main",
            "taco_timelord_launcher = taco.timelord.timelord_launcher:main",
            "taco_full_node_simulator = taco.simulator.start_simulator:main",
        ]
    },
    package_data={
        "taco": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp", "py.typed"],
        "taco.util": ["initial-*.yaml", "english.txt"],
        "taco.ssl": ["taco_ca.crt", "taco_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["xtxert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)  # type: ignore
