---
slug: /intro
---

# Overview

## Introduction

[Metal Blockchain](https://metalblockchain.org) is a highly performant layer zero blockchain and open-source platform that builds upon the innovative Snow protocols introduced by Avalanche and enables the launch of decentralized applications (DApps) and enterprise blockchain deployments in a highly scalable ecosystem. 

Designed for global finance, Metal Blockchain provides near-instant transaction finality, making it ideal for high-performance applications.

The Metal Blockchain's design enables an infinite number of subnets to be deployed, each capable of processing 4,500 transactions per second, theoretically allowing for an unlimited total transactions per second across all subnets. 

This unique approach to scalability ensures that the Metal Blockchain can handle a massive volume of transactions, making it a highly efficient and scalable solution for decentralized applications and enterprise blockchain deployments.

In addition, developers familiar with Ethereum and Antelope (formerly EOSIO) will find it easy to build on Metal Blockchain, as it supports popular programming languages such as Solidity on the Contract Chain (EVM), C++, and Typescript on the XPR Network (AVM), out-of-the-box, for smart contract deployments. This allows developers to leverage their existing knowledge and expertise to create DApps on Metal Blockchain seamlessly.

With its robust smart contracts platform, Metal Blockchain offers a decentralized and secure environment for building a wide range of DApps, from financial applications to supply chain management solutions and beyond. Its scalable ecosystem enables efficient transaction processing, making it suitable for both small-scale and large-scale deployments.

Metal Blockchain is not only a powerful platform for DApps, but it also prioritizes security, reliability, and sustainability. Its innovative consensus mechanism ensures the integrity of transactions and data, while its energy-efficient design makes it a greener alternative to traditional blockchain platforms.

One of Metal's key advancements is the addition of a fourth subchain called XPR Network (A Chain) which offers a more optimized layer for payments and decentralized finance.

XPR Network is based on the cutting-edge EOSIO protocol and incorporates WebAssembly (WASM) to enhance its performance. This makes Metal Blockchain a more scalable and resource-efficient platform for facilitating transactions and powering DeFi applications.

Metal Blockchain aims to provide a seamless and user-friendly experience for Web3 adoption by eliminating the need for external wallet software outside of the browser. Metal Blockchain plans to achieve this by incorporating Web Authentication (WebAuthn) support for Ethereum Virtual Machine (EVM), making it more convenient and secure for users to interact with the blockchain using their browsers. 

Our on-chain key recovery protocol (to be developed) will ensure that customers never have to worry about losing their private key. Institutions can set secure permissions that allow administrators to reset users keys without accessing confidential data, allowing recovery through biometric authentication.

This approach promises to deliver a more native and intuitive Web3 experience for users of the Metal Blockchain.

Metal Blockchain will uphold the same level of compliance on the blockchain as current institutional infrastructures. Incorporating the latest W3C standards on digital identity and Swift ISO 20022, Metal's upcoming blockchain-based digital identity system will offer flexibility in maintaining records of every identity across all network nodes.


# Metal Platform

Metal features 4 built-in blockchains: [**XPR Network (A-Chain)**](#xpr-network-a-chain), [**Exchange Chain (X-Chain)**](#exchange-chain-x-chain), [**Platform Chain (P-Chain)**](#platform-chain-p-chain), and [**Contract Chain (C-Chain**)](#contract-chain-c-chain). All 4 blockchains are [validated](../../nodes/validate/staking.md) and secured by all Metal validators which is also referred as the Primary Network. The Primary Network is a special subnet, and all members of all custom Subnets must also be a member of the Primary Network by staking at least 2,000 METAL.

## XPR Network (A-Chain)

The XPR Network (A-Chain) allows for the creation and use of smart contracts. It implements the Antelope Virtual Machine (AVM), allowing developers to easily deploy Proton-based dApps on the Metal Blockchain. The A-Chain uses the Snowman consensus protocol.

XPR Network is built to handle payments, decentralized finance, dApps, DAOs, payment messaging (Banks, PSPs, Fintechs) with a higher resource efficiency.
 For more information about XPR Network, [click here](https://xprnetwork.org).

## Contract Chain (C-Chain)

The Contract Chain (C-Chain) allows for the creation and use of smart contracts. It implements a modified version of the Ethereum Virtual Machine (EVM), allowing developers to easily deploy Ethereum-based dApps on the Metal Blockchain. The C-Chain uses the Snowman consensus protocol.

## Platform Chain (P-Chain)

The Platform Chain (P-Chain) coordinates validators, creates and manages subnets, and allows for individual blockchains (permissioned or permissionless) to launch on the Metal Blockchain. It also enables cross-communication between different internal blockchains. The P-Chain uses the Snowman consensus protocol.

The [P-Chain API](../../apis/metalgo/apis/p-chain.md) allows clients to create Subnets, add validators to Subnets, and create blockchains.

## Exchange Chain (X-Chain)

The **X-Chain** acts as a decentralized platform for creating and trading digital smart assets, a representation of a real-world resource (e.g., equity, bonds) with a set of rules that govern its behavior, like "can’t be traded until tomorrow" or "can only be sent to US citizens."

One asset traded on the X-Chain is METAL. When you issue a transaction to a blockchain on Metal Blockchain, you pay a fee denominated in METAL.

The X-Chain is an instance of the Avalanche Virtual Machine (AVM). The [X-Chain API](../../apis/metalgo/apis/x-chain.md) allows clients to create and trade assets on the X-Chain and other instances of the AVM.
