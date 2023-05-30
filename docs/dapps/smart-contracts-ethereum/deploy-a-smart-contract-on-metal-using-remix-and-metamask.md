---
description: In this doc, learn how to deploy and test a smart contract on Metal Blockchain using Remix and MetaMask.
---

# Deploy a Smart Contract on Metal Blockchain Using Remix and MetaMask

## Introduction

![Primary Network](</img/image(21).png>)

Metal Blockchain's Primary Network is a Subnet that has four chains: A-Chain, P-Chain, X-Chain,
and C-Chain. The C-Chain is an instance of the Ethereum Virtual Machine powered
by Avalanche’s Snowman consensus protocol. The [C-Chain
RPC](../../apis/metalgo/apis/c-chain.md) can do anything a typical Ethereum
client can by using the Ethereum-standard RPC calls. The immediate benefits of
using the C-Chain rather than Ethereum are all of the benefits of using
Metal Blockchain. These properties that could considerably improve the performance of
DApps and the user experience.

Now, we will deploy and test a smart contract on Metal Blockchain using Remix and MetaMask.


## Set up MetaMask and other wallets automatically

You can easily add the Metal Blockchain network to an Ethereum wallet by visiting [Chainlist](https://chainlist.org/?search=metal) and clicking on the "Connect Wallet" button under the Metal C-Chain option. For this guide we use the Tahoe testnet.

## Set up MetaMask manually

The first thing we should set is a MetaMask wallet.

![wrong network](https://i.imgur.com/N7og5JJ.jpg)

Click to MetaMask icon on the browser and select the network drop-down menu.
Here we should connect to C-Chain. Click to "Add Network".

![Image for post](https://miro.medium.com/max/989/1*Y7O1bBeTWnuQBAqTnwmqUQ.png)

Now, we need to set these boxes with correct values.

#### **Metal Blockchain Mainnet Settings:**

- **Network Name**: Metal C-Chain
- **New RPC URL**: [https://api.metalblockchain.org/ext/bc/C/rpc](https://api.metalblockchain.org/ext/bc/C/rpc)
- **ChainID**: `381931`
- **Symbol**: `METAL`
- **Explorer**: [https://metalscan.io/](https://metalscan.io/)

#### **Metal Blockchain Tahoe Testnet Settings:**

- **Network Name**: Metal Tahoe C-Chain
- **New RPC URL**: [https://tahoe.metalblockchain.org/ext/bc/C/rpc](https://tahoe.metalblockchain.org/ext/bc/C/rpc)
- **ChainID**: `381932`
- **Symbol**: `METAL`
- **Explorer**: [https://tahoe.metalscan.io/](https://tahoe.metalscan.io/)

## Step 2: Funding Your C-Chain Address

### **Using Metal Wallet**

On mainnet, you can use the [Metal
Wallet](https://wallet.metalblockchain.org/) to transfer funds from the X-Chain to your
C-Chain address. The process is simple, as explained in this
[tutorial](https://metalstaking.com/how-to-transfer-cross-chain-in-the-metal-wallet).
Wallet can be used on test and local networks, too.

### **Using Test Network Faucet**

For funding on the test network, you can use the Test Network Faucet. Navigate
to [https://faucet.metalblockchain.org/](https://faucet.metalblockchain.org/) and paste your
C-Chain address. Faucet will automatically know that it needs to send the test
METAL to C-Chain. Click the CAPTCHA checkbox and select 'Request METAL' button.
Your address will receive test METAL in a few seconds.

### Funding on Local Testnet

On a local network, you can easily fund your addresses by following [this](../../quickstart/create-a-local-test-network.md#getting-avax).

## Step 3: Connect MetaMask and Deploy a Smart Contract Using Remix

Open [Remix](https://remix.ethereum.org/) -&gt; Select Solidity

![remix file explorer](/img/remix-file-explorer.png)

Load or create the smart contracts that we want to compile and deploy using Remix file explorer.

For this example, we will deploy an ERC20 contract from [OpenZeppelin](https://openzeppelin.com/contracts).

![ERC20 Contract](/img/erc20-contract.png)

Navigate to Deploy Tab -&gt; Open the "ENVIRONMENT" drop-down and select
Injected Web3 (make sure MetaMask is loaded)

![Deploy and run transactions](/img/deploy-and-run-transactions.png)

Once we injected the web3-&gt; Go back to the compiler, and compile the selected
contract -&gt; Navigate to Deploy Tab

![Solidity compiler](/img/solidity-compiler.png)

Now, the smart contract is compiled, MetaMask is injected, and we are ready to
deploy our ERC20. Click "Deploy."

![Deploy erc20](/img/deploy-erc20.png)

Confirm the transaction on the MetaMask pop up.

![Confirm ERC20](https://i.imgur.com/40B6ph4.jpg)

Our contract is successfully deployed!

![Published metadata](/img/published-metadata.png)

Now, we can expand it by selecting it from the "Deployed Contracts" tab and test it out.

![Interact with contract](/img/interact-with-contract.png)

The contract ABI and Bytecode are available on the compiler tab.

![ABI bytecode](/img/abi-bytecode.png)

If you had any difficulties following this tutorial or simply want to discuss
Metal Blockchain with us, you can join our developer community chat at
[Telegram](https://t.me/metaldevelopers)!
