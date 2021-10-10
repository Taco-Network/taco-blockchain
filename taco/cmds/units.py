from typing import Dict

# The rest of the codebase uses bytes everywhere.
# Only use these units for user facing interfaces.
units: Dict[str, int] = {
    "taco": 10 ** 12,  # 1 taco (XTX) is 1,000,000,000,000 byte (1 trillion)
    "byte:": 1,
    "colouredcoin": 10 ** 3,  # 1 coloured coin is 1000 colouredcoin bytes
}
