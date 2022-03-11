import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("TACO_ROOT", "~/.taco/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("TACO_STANDALONE_WALLET_ROOT", "~/.taco/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("TACO_KEYS_ROOT", "~/.taco_keys"))).resolve()
