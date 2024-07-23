---
tags: [Nodes]
description: This section provides documents on how to build and maintain an AvalancheGo node, and then validate the Avalanche network using an AvalancheGo node.
sidebar_label: Node ➡️ Validator
pagination_label: Add a Node to the Validator Set
sidebar_position: 3
---

# Add a Node to the Validator Set

## Introduction

The Primary Network is inherent to the Metal platform and validates Metal's [built-in blockchains](../../overview/getting-started/intro.md). In this tutorial, we’ll add a node to the Primary Network on Metal.

The P-Chain manages metadata on Metal. This includes tracking which nodes are in which Subnets, which blockchains exist, and which Subnets are validating which blockchains. To add a validator, we’ll issue [transactions](http://support.avalabs.org/en/articles/4587384-what-is-a-transaction) to the P-Chain.

:::warning
Note that once you issue the transaction to add a node as a validator, there is no way to change the parameters. **You can’t remove your stake early or change the stake amount, node ID, or reward address.** Please make sure you’re using the correct values in the API calls below.
:::

## Requirements

You've completed [Run an Metal Node](../build/run-metal-node-manually.md) and are familiar with [Metal Blockchain's architecture](../../overview/getting-started/intro.md).

In order to ensure your node is well-connected, make sure that your node can
receive and send TCP traffic on the staking port (`9651` by default) and your node
has a public IP address(it's optional to set --public-ip=[YOUR NODE'S PUBLIC IP HERE]
when executing the AvalancheGo binary, as by default, the node will attempt to perform
NAT traversal to get the node's IP according to its router). Failing to do either of
these may jeopardize your staking reward.

## Add a Validator with Metal Wallet

First, we show you how to add your node as a validator by using [Metal Wallet](https://wallet.metalblockchain.org).

### Retrieve the Node ID, the BLS signature and the BLS key

Get your node’s ID by calling [`info.getNodeID`](../../apis/metalgo/apis/info.md#infogetnodeid):

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID"
}' -H 'content-type:application/json' 127.0.0.1:9650/ext/info
```

The response has your node’s ID, the BLS key (public key) and the BLS signature (proof of possession):

```json
{
  "jsonrpc": "2.0",
  "result": {
    "nodeID": "NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD",
    "nodePOP": {
      "publicKey": "0x8f95423f7142d00a48e1014a3de8d28907d420dc33b3052a6dee03a3f2941a393c2351e354704ca66a3fc29870282e15",
      "proofOfPossession": "0x86a3ab4c45cfe31cae34c1d06f212434ac71b1be6cfe046c80c162e057614a94a5bc9f1ded1a7029deb0ba4ca7c9b71411e293438691be79c2dbf19d1ca7c3eadb9c756246fc5de5b7b89511c7d7302ae051d9e03d7991138299b5ed6a570a98"
    }
  },
  "id": 1
}
```

### Add as a Validator

Open [the wallet](https://wallet.metalblockchain.org/), and go the `Earn` tab. Choose `Add Validator` under the `Validate` section.

Fill out the staking parameters. They are explained in more detail in [this doc](../validate/staking.md). When you’ve filled in all the staking parameters and double-checked them, click `Confirm`. Make sure the staking period is at least 2 weeks, the delegation fee rate is at least 2%, and you’re staking at least 2,000 METAL on Mainnet (1 METAL on Tahoe Testnet).

You should see a success message, and your balance should be updated.

Calling [`platform.getPendingValidators`](../../apis/metalgo/apis/p-chain.md#platformgetpendingvalidators) verifies that your transaction was accepted. Note that this API call should be made before your node's validation start time, otherwise, the return will not include your node's id as it is no longer pending.

![Staking Overview](/img/staking-overview.png)

Calling
[`platform.getPendingValidators`](/reference/avalanchego/p-chain/api.md#platformgetpendingvalidators)
verifies that your transaction was accepted. Note that this API call should be
made before your node's validation start time, otherwise, the return will not
include your node's id as it is no longer pending.

You can also call [`platform.getCurrentValidators`](../../apis/metalgo/apis/p-chain.md#platformgetcurrentvalidators) to check that your node's id is included in the response.

That’s it!

## Add a Validator with MetalJS

We can also add a node to the validator set using MetalJS.

### Install MetalJS

To use MetalJS, you can clone the repo:

```zsh
git clone https://github.com/MetalBlockchain/metaljs.git
```

:::info
The repository cloning method used is HTTPS, but SSH can be used too:

`git clone git@github.com:ava-labs/avalanchejs.git`

You can find more about SSH and how to use it
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).
:::

or add it to an existing project:

```zsh
yarn add @avalabs/avalanchejs
```

For this tutorial we will use [`ts-node`](https://www.npmjs.com/package/ts-node)
to run the example scripts directly from an AvalancheJS directory.

### Tahoe Workflow

In this section, we will use Tahoe Testnet to show how to add a node to the validator set.

Open your MetalJS directory and select the [**`examples/platformvm`**](https://github.com/MetalBlockchain/metaljs/tree/master/examples/platformvm) folder to view the source code for the examples scripts.

We will use the [**`buildAddValidatorTx.ts`**](https://github.com/MetalBlockchain/metaljs/blob/master/examples/platformvm/buildAddValidatorTx.ts) script to add a validator. To learn more about the `buildAddValidatorTx` API, please click [here](https://github.com/MetalBlockchain/metaljs-docs/blob/main/classes/api_platformvm.platformvmapi.md#buildaddvalidatortx).

#### Add Necessary Environment Variables

Locate the `.env.example` file at the root of AvalancheJS, and remove `.example`
from the title. Now, this will be the `.env` file for global variables.

Add the private key and the P-Chain address associated with it.
The API URL is already set to Fuji (`https://api.avax-test.network/`).

![env Variables](/img/validator-avalanchejs-1.png)

#### Retrieve the Node ID, the BLS signature and the BLS key

Get this info by calling [`info.getNodeID`](/reference/avalanchego/info-api.md#infogetnodeid):

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID"
}' -H 'content-type:application/json' 127.0.0.1:9650/ext/info
```

and replace this with a private key that you control. You can use [this code to generate a new key](https://github.com/MetalBlockchain/metaljs/blob/master/examples/platformvm/createKeypair.ts).

```json
{
  "jsonrpc": "2.0",
  "result": {
    "nodeID": "NodeID-JXJNyJXhgXzvVGisLkrDiZvF938zJxnT5",
    "nodePOP": {
      "publicKey": "0xb982b485916c1d74e3b749e7ce49730ac0e52d28279ce4c5c989d75a43256d3012e04b1de0561276631ea6c2c8dc4429",
      "proofOfPossession": "0xb6cdf3927783dba3245565bd9451b0c2a39af2087fdf401956489b42461452ec7639b9082195b7181907177b1ea09a6200a0d32ebbc668d9c1e9156872633cfb7e161fbd0e75943034d28b25ec9d9cdf2edad4aaf010adf804af8f6d0d5440c5"
    }
  },
  "id": 1
}
```

#### Fill in the Node ID, the BLS signature and the BLS key

The following settings work when using a local node started with [`--network-id=tahoe`](../../nodes/maintain/metalgo-config-flags.md#network-id):

Replace the `nodeID`, `blsPublicKey` and `blsSignature` with your 
own node's values.

However, to connect directly to the [Metal Tahoe Testnet API server](../../apis/metalgo/public-api-server.md), the following changes are needed:

```js
const ip: string = "tahoe.metalblockchain.org"
const port: number = 443
const protocol: string = "https"
const networkID: number = 5
```

Depending on the networkID passed in when instantiating an `Metal` object in the code, the encoded addresses used will have a distinctive Human Readable Part(HRP) per each network.

_Example Address: 5 - X-`tahoe`19rknw8l0grnfunjrzwxlxync6zrlu33yxqzg0h_

For Tahoe Testnet, 5 is the correct value to use.

#### Settings for Validation

Next we need to specify the node's validation period and delegation fee.


#### Validation Period

The validation period is set by default to 21 days, the start date
being the date and time the transaction is issued. The start date
cannot be modified.

The end date can be adjusted in the code.

Let's say we want the validation period to end after 50 days.
You can achieve this by adding the number of desired days to
`endTime.getDate()`, in this case `50`.

``` ts
// move ending date 50 days into the future
endTime.setDate(endTime.getDate() + 50);
```

#### Node ID

This is the node ID of the validator being added. See [above section](#retrieve-the-node-id) on how to retrieve the node id by using API [`info.getNodeID`](../../apis/metalgo/apis/info.md#infogetnodeid).

#### Staking Period

`startTime` and `endTime` are required to specify the time of starting/leaving validation. The minimum duration that one can validate the Primary Network is 2 weeks, and the maximum duration is one year. One can start a new validation on the Primary Network after finishing one, it’s just that the maximum _continuous_ duration is one year. `startTime` and `endTime` are the Unix times when your validator will start and stop validating the Primary Network, respectively. `startTime` must be in the future relative to the time the transaction is issued.

The sample code uses `const startTime: BN = UnixNow().add(new BN(60 * 1))` and
`const endTime: BN = startTime.add(new BN(26300000))` to compute the Unix time 1 minute and 304 days in the future (at the time when this article was written) to use as the values of `startTime` and `endTime`, respectively.

:::tip
You can create your own unix timestamp [here](https://www.unixtimestamp.com/) or by using the `UnixNow()` method
:::

To create your own start times, please follow the steps below:

Locate this line in the file

```ts
const startTime = await new PVMApi().getTimestamp();
const startDate = new Date(startTime.timestamp);
const start = BigInt(startDate.getTime() / 1000);

// Set the end time to a specific date and time
const endTime = new Date('2024-05-15T11:20:00'); // May 15, 2024, at 11:20 AM
const end = BigInt(endTime.getTime() / 1000);
```

#### Delegation Fee Rate

Metal Blockchain allows for delegation of stake. This parameter is the percent fee this validator charges when others delegate stake to them. For example, if `delegationFeeRate` is `10` and someone delegates to this validator, then when the delegation period is over, 10% of the reward goes to the validator and the rest goes to the delegator, if this node meets the validation reward requirements.

#### Stake Amount

Set the the proper staking amount in calling `pchain.buildAddValidatorTx` by replacing `stakeAmount.minValidatorStake` with a number in the unit of gwei, for example, `BN(1e12)` which is 10,000 METAL.

``` ts
  const tx = newAddPermissionlessValidatorTx(
    context,
    utxos,
    [bech32ToBytes(P_CHAIN_ADDRESS)],
    nodeID,
    PrimaryNetworkID.toString(),
    start,
    end,
    BigInt(2e9), // the amount to stake
    [bech32ToBytes(P_CHAIN_ADDRESS)],
    [bech32ToBytes(P_CHAIN_ADDRESS)],
    1e4 * 10,
    undefined,
    1,
    0n,
    blsPublicKey,
    blsSignature,
  );
```

#### Execute the Code

Now that we have made all of the necessary changes to the example script, it's time to add a validator to the Tahoe Network.

Run the command:

```zsh
node --loader ts-node/esm examples/p-chain/validate.ts
```

The response:

```zsh
laviniatalpas@Lavinias-MacBook-Pro avalanchejs % node --loader ts-node/esm examples/p-chain/validate.ts
(node:87616) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
{ txID: 'RVe3CFRieRbBvKXKPu24Zbt1QehdyGVT6X4tPWVBeACPX3Ab8' }
```

We can check the transaction’s status by running the example script: [`getTxStatus.ts`](https://github.com/MetalBlockchain/metaljs/blob/master/examples/platformvm/getTxStatus.ts) following the steps below:

![Added Validator](/img/validator-avalanchejs-3.png)

2. Locate this line in the file

```js
const main = async (): Promise<any> => {
  const txID: string = "x1NLb9JaHkKTXvSRReVSsFwQ38mY7bfD1Ky1BPv721VhrpuSE"
  ...
  }
```

and replace it with the _buildAddValidator_ TXID

```js
const main = async (): Promise<any> => {
 const txID: string = "2ftDVwmss5eJk8HFsNVi6a3vWK9s3szZFhEeSY2HCS8xDb8Cra"
 ...
 }
```

Run the command:

```sh
ts-node examples/platformvm/getTxStatus.ts
```

This returns:

```sh
{ status: 'Committed' }
```

The status should be `Committed`, meaning the transaction was successful.

We can see if the node is now in the pending validator set for the Tahoe network by using the example:[`getPendingValidators.ts`](https://github.com/MetalBlockchain/metaljs/blob/master/examples/platformvm/getPendingValidators.ts). Just change the [network settings](#network-setting) to meet Tahoe requirements and then run the script:

```sh
ts-node examples/platformvm/getPendingValidators.ts
```

The response should include the node we just added:

```json
{
  "validators": [
    {
      "nodeID": "NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg",
      "startTime": "1654656829",
      "endtime": "1662602029",
      "stakeAmount": "1000000000"
    }
  ],
  "delegators": []
}
```

When the time reaches `1654656829` (Wed Jun 08 2022 02:53:49 GMT+0000), this node will start validating the Primary Network. When it reaches `1662602029` (Thu Sep 08 2022 01:53:49 GMT+0000), this node will stop validating the Primary Network. The staked METAL and the rewards, if any, will be returned to `pAddressStrings`.

#### Customizing Addresses

There are 4 addresses which are needed when calling `pchain.buildAddValidatorTx`. Only 2 of them can be changed: `toAddresses` and `rewardAddresses`. For backward-compatibility reasons, `fromAddresses` and `changeAddresses`
are just placeholders and are ignored.

`toAddresses`

An array of addresses who receive the staked tokens at the end of the staking period.

`rewardAddresses`

When a validator stops validating the Primary Network, they will receive a reward if they are sufficiently responsive and correct while they validated the Primary Network. These tokens are sent to `rewardAddresses`. The original stake will be sent back to the addresses defined in `toAddresses`.

A validator’s stake is never slashed, regardless of their behavior they will always receive their stake back when they’re done validating.

Locate this part of the code

```ts
let privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`
pKeychain.importKey(privKey)
```

and replace `privKey` with private keys that you control. To generate a new keypair, we can use the [`createKeypair.ts`](https://github.com/MetalBlockchain/metaljs/blob/master/examples/platformvm/createKeypair.ts) example script along with [Tahoe Network Settings](#network-setting).

```ts
let privKey: string =
  "PrivateKey-PY2dvfxzvBAe1a5nn7x23wmZMgAYJaS3XAZXzdUa22JtzUvKM"
pKeychain.importKey(privKey)
privKey = "PrivateKey-2Y3Vg9LShMJyUDBHzQqv5WtKDJ8yAVHyM3H5CNCBBmtg3pQEQG"
pKeychain.importKey(privKey)
privKey = "PrivateKey-NaV16owRSfa5TAtxtoU1BPUoM2y1ohttRbwKJG1j7onE4Ge1s"
pKeychain.importKey(privKey)
priKey = "PrivateKey-26JMUsR5RCkf5k9ME8WxKCWEuCK5s2SrALUn7vEa2urwyDDc91"
pKeychain.importKey(privKey)

const pAddressStrings: string[] = pchain.keyChain().getAddressStrings()
```

This example would create a keychain with 4 addresses:

```ts
  "P-tahoe1jx644d9y00y5q4hz8cq4wr75a2erne2y4e32xc", // pAddressStrings[0]
  "P-tahoe1wchdgdp94j8tszlpsp56qvgkvdn20svpmnm8qk", // pAddressStrings[1]
  "P-tahoe1f36kkpy6yzd7ayrywxvvprns7qlrcu3hwqdya8", // pAddressStrings[2]
  "P-tahoe1qw7yt3fp43kuwsufff4vhezs2yl00slr09vmh5", // pAddressStrings[3]
```

Now we can pass in each address according to it's slot in the `pAddressStrings` array:

```ts
const unsignedTx: UnsignedTx = await pchain.buildAddValidatorTx(
  utxoSet,
  [pAddressStrings[0], pAddressStrings[1]], // toAddresses, one or more addresses
  [pAddressStrings[0]], // fromAddresses, required for backward-compatibility
  [pAddressStrings[0]], // changeAddresses, required for backward-compatibility
  nodeID,
  startTime,
  endTime,
  stakeAmount.minValidatorStake,
  [pAddressStrings[2], pAddressStrings[3]], //rewardAddresses, one or more addresses
  delegationFee,
  locktime,
  threshold,
  memo,
  asOf
)
```

### Mainnet Workflow

The Tahoe workflow above can be adapted to Mainnet with the following modifications:

- The correct private key.
- Network setting should be to a Mainnet node, either [a local node on Mainnet](../../nodes/maintain/metalgo-config-flags.md#network-id) or [Metal Mainnet API server](../../apis/metalgo/public-api-server.md#using-the-public-api-nodes) where `api.metalblockchain.org` should be used for the `ip`.
- `const networkID: number = 1`.
- Set the correct amount to stake.
- The `blsPublicKey`, `blsSignature` and `nodeID` need to be the ones
for your Mainnet Node.
