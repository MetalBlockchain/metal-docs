# C-Chain Exchange Integration

## Overview

The objective of this document is to provide a brief overview of how to
integrate with the EVM-Compatible Metal C-Chain. For teams that already
support ETH, supporting the C-Chain is as straightforward as spinning up an
Metal node (which has the [same API](https://eth.wiki/json-rpc/API) as
[`go-ethereum`](https://geth.ethereum.org/docs/rpc/server)) and populating
Metal’s ChainID (381931) when constructing transactions.

Additionally, Metallicus maintains an implementation of the [Rosetta
API](https://www.rosetta-api.org/) for the C-Chain called
[metal-rosetta](https://github.com/MetalBlockchain/metal-rosetta). You can
learn more about this standardized integration path on the attached Rosetta API
website.

## Integration Using EVM Endpoints

### Running a Metal Blockchain Node

If you want to build your node form source or include it in a docker image,
reference the [MetalGo GitHub
repository](https://github.com/MetalBlockchain/metalgo). To quickly get up and
running, you can use the [node installation
script](../nodes/build/set-up-node-with-installer.md) that automates installing
and updating MetalGo node as a `systemd` service on Linux, using prebuilt
binaries.

### Configuring a Metal Blockchain Node

All configuration options and their default values are described [here](../nodes/maintain/metalgo-config-flags.md).

You can supply configuration options on the command line, or use a config file,
which can be easier to work with when supplying many options. You can specify
the config file location with `—config-file=config.json`, where `config.json` is
a JSON file whose keys and values are option names and values.

Individual chains, including the C-Chain, have their own configuration options
which are separate from the node-level options. These can also be specified in a
config file. For more details, see
[here](../nodes/maintain/chain-config-flags.md#c-chain-configs).

The C-Chain config file should be at
`$HOME/.metalgo/configs/chains/C/config.json`. You can also tell MetalGo
to look somewhere else for the C-Chain config file with option
`--chain-config-dir`. An example C-Chain config file:

:::caution

If you need Ethereum [Archive
Node](https://ethereum.org/en/developers/docs/nodes-and-clients/#archive-node)
functionality, you need to disable C-Chain pruning, which has been enabled by
default since MetalGo v1.4.10. To disable pruning, include
`"pruning-enabled": false` in the C-Chain config file as shown below.

:::

```json
{
  "snowman-api-enabled": false,
  "coreth-admin-api-enabled": false,
  "local-txs-enabled": true,
  "pruning-enabled": false,
  "eth-apis": [
    "internal-eth",
    "internal-blockchain",
    "internal-transaction",
    "internal-tx-pool",
    "internal-account",
    "internal-personal",
    "debug-tracer",
    "web3",
    "eth",
    "eth-filter",
    "admin",
    "net"
  ]
}
```

### Interacting with the C-Chain

Interacting with the C-Chain is identical to interacting with
[`go-ethereum`](https://geth.ethereum.org/). You can find the reference material
for C-Chain API [here](../apis/metalgo/apis/c-chain.md).

Please note that `personal_` namespace is turned off by default. To turn it on,
you need to pass the appropriate command line switch to your node, like in the
above config example.

## Integration Using Rosetta

[Rosetta](https://www.rosetta-api.org/) is an open-source specification and set
of tools that makes integrating with different blockchain networks easier by
presenting the same set of APIs for every network. The Rosetta API is made up of
2 core components, the [Data
API](https://www.rosetta-api.org/docs/data_api_introduction.html) and the
[Construction
API](https://www.rosetta-api.org/docs/construction_api_introduction.html).
Together, these APIs allow for anyone to read and write to blockchains in a
standard format over a standard communication protocol. The specifications for
these APIs can be found in the
[rosetta-specifications](https://github.com/coinbase/rosetta-specifications)
repository.

You can find the Rosetta server implementation for Metal C-Chain
[here](https://github.com/MetalBlockchain/metal-rosetta), all you need to do is
install and run the server with proper configuration. It comes with a `Dockerfile`
that packages both the server and the Metal client. Detailed instructions
can be found in the linked repository.

## Constructing Transactions

Metal C-Chain transactions are identical to standard EVM transactions with 2 exceptions:

- They must be signed with Metal’s ChainID (381931).
- The detailed dynamic gas fee can be found [here](../quickstart/transaction-fees.md#c-chain-fees).

For development purposes, Metal supports all the popular tooling for
Ethereum, so developers familiar with Ethereum and Solidity can feel right at
home. We have tutorials and repositories for several popular development
environments:

- [MetaMask and Remix](../dapps/smart-contracts-ethereum/deploy-a-smart-contract-on-metal-using-remix-and-metamask.md)
- [Truffle](../dapps/developer-toolchains/using-truffle-with-the-metal-c-chain.md)
- [Hardhat](../dapps/developer-toolchains/using-hardhat-with-the-metal-c-chain.md)

## Ingesting On-Chain Data

You can use any standard way of ingesting on-chain data you use for Ethereum network.

### Determining Finality

Avalanche consensus, implemented on the Metal Blockchain, provides fast and irreversible finality with 1-2 seconds. To
query the most up-to-date finalized block, query any value (that is block, balance,
state, etc) with the `latest` parameter. If you query above the last finalized
block (that is eth_blockNumber returns 10 and you query 11), an error will be
thrown indicating that unfinalized data cannot be queried (as of
`metalgo@v1.3.2`).

### (Optional) Custom Golang SDK

If you plan on extracting data from the C-Chain into your own systems using
Golang, we recommend using our custom
[`ethclient`](https://github.com/MetalBlockchain/coreth/tree/master/ethclient). The
standard `go-ethereum` Ethereum client does not compute block hashes correctly
(when you call `block.Hash()`) because it doesn't take into account the added
[ExtDataHash](https://github.com/MetalBlockchain/coreth/blob/2c3cfac5f766ce5f32a2eddc43451bdb473b84f1/core/types/block.go#L98)
header field in Metal C-Chain blocks, which is used move METAL between chains
(X-Chain and P-Chain).

If you plan on reading JSON responses directly or use web3.js (doesn't recompute
hash received over the wire) to extract on-chain transaction data/logs/receipts,
you shouldn't have any issues!

## Support

If you have any problems or questions, reach out either directly to our
developers, or on our public [Telegram](https://t.me/MetalBlockchain/24276) server.
