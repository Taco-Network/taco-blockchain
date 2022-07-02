from typing import Tuple
from pathlib import Path

import random
import aiosqlite

from taco.consensus.blockchain import Blockchain
from taco.consensus.constants import ConsensusConstants
from taco.full_node.block_store import BlockStore
from taco.full_node.coin_store import CoinStore
from taco.full_node.hint_store import HintStore
from taco.util.db_wrapper import DBWrapper2


async def create_ram_blockchain(consensus_constants: ConsensusConstants) -> Tuple[DBWrapper2, Blockchain]:
    uri = f"file:db_{random.randint(0, 99999999)}?mode=memory&cache=shared"
    connection = await aiosqlite.connect(uri, uri=True)
    db_wrapper = DBWrapper2(connection)
    await db_wrapper.add_connection(await aiosqlite.connect(uri, uri=True))
    block_store = await BlockStore.create(db_wrapper)
    coin_store = await CoinStore.create(db_wrapper)
    hint_store = await HintStore.create(db_wrapper)
    blockchain = await Blockchain.create(coin_store, block_store, consensus_constants, hint_store, Path("."), 2)
    return db_wrapper, blockchain
