---
description: ERC-20 tokens are the most fundamental and essential concept in Ethereum. This same token standard is adopted in the Melal Blockchain ecosystem.
---

# Create an ERC-20 Token Using Solidity

[ERC-20
tokens](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) are
the most fundamental and essential concept in Ethereum. As the Metal Blockchain
community and the ecosystem are growing, new use cases and projects that are
running on Ethereum or different chains would be implemented to Metal Blockchain.

Therefore, we will be creating our own mintable ERC-20 token and will mint it to
any address we want. The token will be generated on Metal C-Chain and will
be accessible on that chain. We are using Tahoe Testnet in this tutorial.

The article focuses on deploying a smart contract written with Solidity to
Metal Blockchain. This is the feature that Metal Blockchain provides us - to be able to deploy
any smart contract to the chain and no requirement for a new language specific
contract concept to interact. Let’s look at how to create an ERC-20 contract and
deploy it to Metal Tahoe C-Chain on testnet.

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

## Fund Your C-Chain Address

For funding on the Tahoe Testnet, you can use the Test Network Faucet. Navigate
to [https://faucet.metalblockchain.org/](https://faucet.metalblockchain.org) and paste your
C-Chain address.

## Create Mintable Token

Now, we can create our mintable token on Remix. Open Remix on your browser or go
to [this
link](https://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js).

![Image for post](https://miro.medium.com/max/1910/1*FWHtbWNXr6FvjzPHH93wvw.png)

You should view this page. On this page, first, click "SOLIDITY" from "Featured
Plugins" and then click the "New File" button. When you click the New File
button, you will see a pop-up that requires a file name. You can choose a name
or leave the default.

Since we will use an ERC-20 contract from
[OpenZeppelin](https://openzeppelin.com/contracts/), just paste this line to the
file and save.

```solidity
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
```

![Image for post](https://miro.medium.com/max/1408/1*y1wpcCeB8PypnPfs-zhyBg.png)

After saving the file, we will see a bunch of files that are imported to remix.
This is a remix feature that allows us to import a GitHub contract repository to
remix by just giving the URL-link with an import statement.

![Image for post](https://miro.medium.com/max/1364/1*6pmdpKWiKj4RW-OcvMSijA.png)

We have ERC20PresetMinterPauser.sol file in the presets. This file is written by
OpenZeppelin according to ERC20 standards with minter functionality. After
deploying this file, we will be the owner of the contract and thus have the
authority and ability to mint the tokens.

![Image for post](https://miro.medium.com/max/1398/1*5UcrRfoSwjpD29NyuMrrbA.png)

## Deploy the Contract

Open the tab with label `Solidity compiler` and select the solidity version that
matches with the solidity version written in file as `pragma solidity …..`. The
version should be equal to or higher than the file’s version. For example, in my
file, `pragma solidity ^0.6.0` is written so the required version is 0.6.0 or
higher. As shown, in the compiler the solidity version is 0.6.6, which is OK.
After checking the solidity version click the compile button. If you did not
change anything in the file, or the solidity version is not wrong, the contract
should compile without any errors.

![Image for post](https://miro.medium.com/max/1388/1*2jkDckFUJ4z3gMoLYZ_-PQ.png)

Then, let’s jump to the tab with label `Deploy & run transactions`. Here before
deploying our contract, we should change the environment. Click to the
environment and select "Injected Web3." If a pop-up shows up and asks you to
connect the account, click to connect. After, you should see the account address
in the "ACCOUNT" text box.

The last thing before the deployment process is to set the contract that will be
deployed as a token. Above the Deploy Button, there is a drop-down menu to
select a contract. Select the contract named `ERC20PresetMinterPauser.sol`.

![Image for post](https://i.imgur.com/WwKxumT.jpg)

Now, here enter the name and symbol of your token. I will name it "MetalBlockchainTest" and the
symbol will be `MBT`. Click on the transact button to proceed.

![Image for post](https://miro.medium.com/max/593/1*ZKDEv_h_Pqfd3b7PAosXQw.png)

After clicking the button, a pop-up will show up and just confirm it.

![Image for post](https://i.imgur.com/40B6ph4.jpg)

And then another pop-up, a MetaMask confirmation, appears. Confirm it.

After confirming all these pop-ups we have deployed our token to Metal Tahoe
C-Chain on testnet. So we can start to interact with it.

## Interact with Token

We can see our transaction that deployed on Metal C-Chain via the [C-Chain explorer](https://tahoe.metalscan.io/).

But firstly, let’s see our transaction hash from the remix console.

![Image for post](https://i.imgur.com/8B1HuUu.jpg)

After deploying the contract, we should see a log in the remix console. When you
click to arrow and expand it, a transaction hash will come up. Copy it.

![Image for post](https://i.imgur.com/OviYjYT.png)

Just paste the transaction hash to the [explorer](https://tahoe.metalscan.io/)
in the search bar and press enter.

![Image for post](https://i.imgur.com/k3E1MtH.png)

Here we can see all details about the transaction and token contract.

![Image for post](https://i.imgur.com/WseAEBS.png)

The first one is my wallet address that creates token and the second address is
my token contract address which is named `MetalBlockchainTest`. Now, let’s mint some token to
our own address.

![Image for post](https://miro.medium.com/max/607/1*K9eBNTQFkvUYjjmvegDZtQ.png)

Come back to the remix console and after deploying, you should be able to see the
contract in "Deployed Contracts" section.

Here, we have a bunch of functions that we can use to interact with our token
contract. You can check all these methods from OpenZeppelin documentation to
learn how to use them. But we will only use the mint method.

Click the arrow beside the mint method to read it.

![Image for post](https://miro.medium.com/max/577/1*GrxG6rsklrYN4xN1eF_ckw.png)

Enter your address and an amount in wei. For example, I will mint 1000 `MBT` token so, I entered "1000000000000000000000"

## Add Token to MetaMask

Now we minted 1000 token to our contract, but you should not be able to see the
tokens in your MetaMask wallet. In order to see our own token, we have to add
it. On MetaMask, click on the "Import Token" option.

Here enter the token address that you can see from explorer as I showed above.
Copy and paste it here. It should automatically add the token symbol and decimal. Then click on the Next button, you should see 1000 token
that you named in your MetaMask wallet. Also, you can send it to another account
via either remix or MetaMask.

![Image for post](https://i.imgur.com/D9jLKm0.jpg)
