from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "taco_harvester taco_timelord_launcher taco_timelord taco_farmer taco_full_node taco_wallet".split(),
    "node": "taco_full_node".split(),
    "harvester": "taco_harvester".split(),
    "farmer": "taco_harvester taco_farmer taco_full_node taco_wallet".split(),
    "farmer-no-wallet": "taco_harvester taco_farmer taco_full_node".split(),
    "farmer-only": "taco_farmer".split(),
    "timelord": "taco_timelord_launcher taco_timelord taco_full_node".split(),
    "timelord-only": "taco_timelord".split(),
    "timelord-launcher-only": "taco_timelord_launcher".split(),
    "wallet": "taco_wallet taco_full_node".split(),
    "wallet-only": "taco_wallet".split(),
    "introducer": "taco_introducer".split(),
    "simulator": "taco_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
