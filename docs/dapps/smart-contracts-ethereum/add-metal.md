# Add Metal Blockchain Programmatically

This document shows how to integrate Avalanche Network with your dApp, by Metamask.

## MetaMask

Adding new networks to Metamask is not a trivial task for people that are not technically savvy, and it can be error prone. To help easier onboarding of users to your application it is useful to simplify that process as much as possible. This tutorial will show how to build a simple button in your front-end application that will automate the process of adding the Avalanche network to MetaMask.

### EIP-3035 & MetaMask

[EIP-3035](https://eips.ethereum.org/EIPS/eip-3085) is an [Ethereum Improvement Proposal](https://eips.ethereum.org/) that defines an RPC method for adding Ethereum-compatible chains to wallet applications.

Since March 2021 Metamask has implemented that EIP as part of their Metamask [Custom Networks API](https://consensys.net/blog/metamask/connect-users-to-layer-2-networks-with-the-metamask-custom-networks-api/).

Let's see how it works.

### Data Structures

To add the Metal Blockchain network to Metamask, we need to prepare the data structures that will be contain all the necessary data.

Main network data:

```javascript
export const METAL_MAINNET_PARAMS = {
  chainId: "381931",
  chainName: "Metal C-Chain",
  nativeCurrency: {
    name: "Metal Blockchain",
    symbol: "METAL",
    decimals: 18,
  },
  rpcUrls: ["https://api.metalblockchain.org/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://metalscan.io/"],
}
```

Test network data:

```javascript
export const METAL_TESTNET_PARAMS = {
  chainId: "381932",
  chainName: "Metal Tahoe C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "METAL",
    decimals: 18,
  },
  rpcUrls: ["https://tahoe.metalblockchain.org/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://tahoe.metalscan.io/"],
}
```

### Adding the Network

To add the network to MetaMask, we need to call the `wallet_addEthereumChain` method, exposed by the web3 provider.

```javascript
function addMetalNetwork() {
  injected.getProvider().then((provider) => {
    provider
      .request({
        method: "wallet_addEthereumChain",
        params: [METAL_MAINNET_PARAMS],
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
}
```

Where `injected` is initialized as a `web3-react/injected-connector` used to interface with MetaMask APIs. Usage for other popular web frameworks is similar. Replace `METAL_MAINNET_PARAMS` with `METAL_TESTNET_PARAMS` if you want to add the test network.

Typical usage pattern would be to expose a button calling that method if you get `Wrong Network` or `Error connecting` errors when attempting to establish a connection to MetaMask.

### User Experience

When users first come to your dapp's website they need to approve connection to MetaMask. After they do that, if you don't detect successful web3 network connection, you can present them with a dialog asking them to confirm switch to a new network:

![wrong network](https://i.imgur.com/IoyxIhi.jpg)

If they press the button, they are shown a dialog from MetaMask asking for approval to add the new network:

![add a network](https://i.imgur.com/tp5PlrQ.jpg)

If they approve, your app will be connected to the Metal Blockchain network. Very easy, no need for any data entry, no chance of wrong data entry. And that's it, users are ready to interact with your dapp!

## Conclusion

Dapps users are often not very technically sophisticated and onboarding them needs to be as seamless and easy as possible. Manually adding a new network is a hurdle than a certain percentage of your potential users will not be able to clear. Removing that requirement is a simple step that will enhance their experience and enable more users to get to actually use your dapp.

If you have any questions, problems, or ideas on how to improve, or simply want to join our developer community, you can contact us on our [Telegram Developer](https://t.me/metaldevelopers) chat.
