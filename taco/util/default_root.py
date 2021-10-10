import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("TACO_ROOT", "~/.taco/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("TACO_KEYS_ROOT", "~/.taco_keys"))).resolve()
