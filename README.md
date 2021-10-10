# taco-blockchain

![Alt text](https://taconetwork.net/images/xtx_coin_logo_website_75.png)

Taco is an eco-friendly decentralization blockchain based on the Proof of Space and Time (PoST) consensus pioneered by Taco™. It maintains network robustness, in line with Satoshi Nakamoto's principles.

Taco uses the powerful and secure Chialisp language for Smart Contracts, and supports digital money, global payments and applications. Taco is not affiliated with Taco Network, Inc., but uses their open-sourced software as its foundation.

Farming Taco does not consume significant amounts of electricity, and utilizes hard drive space, instead of specialized computing hardware that most Proof of Work (PoW) consensus blockchains have come to demand. Moreover, since electrical energy costs for running hard drives is very minimal, due to this low cost of entry, Taco will remain more decentralized and fair, and thus more secure than any Proof of Stake cryptocurrency.

Taco core values include green cryptocurrency, long term value, building for the future, strength in community, and maintaining a huge team to ensure long term development.

The goal of Taco is to reshape the global financial system through the power of the blockchain technology, powered by thousands of nodes maintained by the community, and with transparency and a commitment to the environment — thereby taking control from any central entity, person or organization, and giving that control back to the community.

**BLOCKCHAIN SPECIFICATION:**
- Launch date: July 8th 2021
- Cryptocurrency coin: XTX
- Lowest coin denomination: Bytes
- Conversion: 1 XTX = 1,000,000,000,000 Bytes
- Blocks per 24 hours target: 4,608
- Farmed rewards per block: 2 XTX
- Halving period for block rewards: 3 years

**BLOCKCHAIN RESOURCES:**
- Website: https://taconetwork.net/
- Explorer: https://alltheblocks.net/taco
- Calculator: https://tacoforkscalculator.com/taco
- Taco DB: https://taconetwork.net/downloads/blockchain_v1_mainnet.sqlite

**COMMUNITIES AND SOCIAL CHANNELS:**
- Discord: https://discord.gg/AZdGSFnqAR
- Twitter: https://twitter.com/taco
- YouTube: https://www.youtube.com/channel/UChJY3YEOTDBvFJ0vLFEc1Sw
- Facebook: https://www.facebook.com/TacoNetwork
- Telegram: https://t.me/Taco_Network
- Reddit: https://www.reddit.com/r/TacoNetwork


***********************************************
# INSTALL INSTRUCTIONS:

You can install Taco by building from source, or by using the latest binaries for your operating system.

(A.) To **install from available binaries**, download executables from the correct **Releases page**:

   - for solo farming, get them here ->
   https://github.com/Taco-Network/taco-blockchain/releases
   - for pool farming with FoxyPool (OG), get them here ->
   https://github.com/felixbrucker/taco-blockchain/releases


(B.) To **build from source**, do the following:

```
# Update / Upgrade OS

   sudo apt-get update
   sudo apt-get upgrade -y

# Install Git

   sudo apt install git -y

# Checkout the correct source (either for solo or pool farming)

   ## for solo farming, use this source ## ->
   git clone https://github.com/Taco-Network/taco-blockchain.git

   ## for pool farming with FoxyPool (OG), use this source ## ->
   git clone https://github.com/felixbrucker/taco-blockchain.git


# Install the Blockchain

   cd taco-blockchain
   sh install.sh
   . ./activate
   taco init

# Install and run the GUI

   sh install-gui.sh
   cd taco-blockchain-gui
   npm run electron &
```

If the client does not find any connections automatically, you can add any of the following:

- introducer.taconetwork.net / Port: 18620
- dns-introducer.taconetwork.net / Port: 18620
- node-1.taconetwork.net / Port: 18620 / United States
- node-2.taconetwork.net / Port: 18620 / United States
- node-3.taconetwork.net / Port: 18620 / Hong Kong, China
- node-4.taconetwork.net / Port: 18620 / Munich, Germany
- node-5.taconetwork.net / Port: 18620 / Singapore, Singapore
- node-6.taconetwork.net / Port: 18620 / Bangalore, India
- node-7.taconetwork.net / Port: 18620 / Amsterdam, Netherlands
- node-8.taconetwork.net / Port: 18620 / United States
- node-9.taconetwork.net / Port: 18620 / United States
- node-10.taconetwork.net / Port: 18620 / United States
- node-11.taconetwork.net / Port: 18620 / United States
- node-12.taconetwork.net / Port: 18620 / United States
- node-13.taconetwork.net / Port: 18620 / United States
- node-14.taconetwork.net / Port: 18620 / United States

***********************************************
# UPDATE/UPGRADE INSTRUCTIONS:

You can update Taco from a previous version by downloading and installing the latest executable for your operating system, available from the correct **Releases page**, as described above, or by building from source:

```
# Checkout the source and update

  cd taco-blockchain
  . ./activate
  taco stop -d all
  deactivate
  git fetch
  git checkout main
  git reset --hard FETCH_HEAD --recurse-submodules
  sh install.sh
  . ./activate
  taco init

# Update the GUI

  cd taco-blockchain-gui
  git fetch
  cd ..
  chmod +x ./install-gui.sh
  ./install-gui.sh
```
