from typing import Any

from taco.types.blockchain_format.program import Program


def json_to_tacolisp(json_data: Any) -> Any:
    list_for_tacolisp = []
    if isinstance(json_data, list):
        for value in json_data:
            list_for_tacolisp.append(json_to_tacolisp(value))
    else:
        if isinstance(json_data, dict):
            for key, value in json_data:
                list_for_tacolisp.append((key, json_to_tacolisp(value)))
        else:
            list_for_tacolisp = json_data
    return Program.to(list_for_tacolisp)
