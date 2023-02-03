# Subnets FAQ

### What is a Subnet?

A Subnet, or Subnetwork, is a dynamic set of validators working together to achieve consensus on the state of a set of blockchains. Each blockchain is validated by exactly one Subnet, however, a Subnet can validate more than one blockchain. A node may be a member of arbitrarily many Subnets. It manages its own membership and it may require that its constituent validators have certain properties. Subnets are independent and don’t share execution thread, storage, or networking with other Subnets or the Primary Network, effectively allowing the network to scale up easily while enabling lower latency, higher transactions per second (TPS), and lower transaction costs. They also share the benefits provided by the Avalanche Protocol such as low cost and time to finality.

## How much does it cost to start a Subnet?

To create the Subnet, it costs 1 METAL. Initial fees are available here on the following page so you can determine the costs of starting your specific Subnet.

https://docs.metalblockchain.org/quickstart/transaction-fees#fee-schedule

## What is the minimum amount of validators a Subnet requires?

A minimum of 5 validators is suggested. You can run a subnet with less (even one), but that is not recommended since your subnet will halt easily if one or more validators go offline. As a general rule, you should have as many validators as possible.

## Do I need to create my own validators?

It depends if you have the resources to create your own validators. If not, you can incentivize existing validators to validate your Subnet.

## Do validators also validate the Primary Network?

Yes, validators will validate both the Subnet and the Primary Network (X, P, and C-Chain). It is up to the node operator to ensure the optimal health of the node. Note: Validators can also validate more than 1 Subnet on top of the Primary Network.

## Why should validators validate Subnets?

This allows operators to be early adopters in new projects by validating them, thus reaping potential tokens and rewards from the Subnet itself but also the growth of that Subnet ecosystem. It also keeps a flow of new Subnets and projects coming to the network in which you can participate from the ground up. Also, subnets need to incentivize the validators to join, so validators are expected to have direct benefits for providing their service to the subnet.

## Does Subnet traffic affect the main network traffic?

No. Subnets have their own state and execution thread. So it does not share the processing, TPS, or networking with the Primary Network. Thus enabling lower latency, higher transactions per second (TPS), and lower transaction costs.

## Can a Subnet be private?

Yes, it is up to your team to decide. To achieve full privacy (as in, nobody can see the contents of the transactions being made), you will need to deploy a VM that enables such operations.

## Can Subnets set their own gas prices?

Yes, your Subnet can be designed to do so.

## How do we pay for transactions on our Subnet?

For the Subnet-EVM, transactions are paid for by the native token of the platform. You can define initial balances on your chain by setting its genesis to give whatever addresses you want an initial starting balance.

Only 1 token can be used for the network fee, and this cannot be split between multiple tokens.

## Can we ask existing validators to meet certain requirements?

Yes, you can have your own specific requirements such as hardware or geographical, etc.

## Can we use any token on our Subnet?

Yes, you can choose to use any token as your native token.

## Can Subnets use different tokens for gas and staking?

Yes, for example, a Subnet can require token A to be used to stake to be a validator on the Subnet, which will also be paid out to validators for validating the Subnet. While token B can be used as gas for transactions on the Subnet. Note that validators are always paid in the stocking token.

## What VMs can you use to build your Subnet?

You can use EVM or any other VM of your choosing. Currently, besides the EVM and MetalVM, we also have SpacesVm (key/value storage), BlobVM (binary storage), TimestampVM (a minimum viable VM), and others that are in development.

## Can a Subnet have its own Subnet?

No, but a Subnet can have multiple blockchains within it.

## What consensus mechanism does a subnet use? Avalanche or snowman?

Subnets can use either Avalanche or Snowman. However, MetalGo only supports implementing custom chain-based VMs. So unless your subnet is using the AVM, it is going to be using Snowman.

## Can I create a Subnet for my specific use case?

The answer is usually yes. Custom Virtual Machines are non-opinionated. This brings great flexibility to Subnets. There are a few interfaces and structures that a VM needs to implement for consensus requirements. Other than these, a Virtual Machine can be fully customized to provide any custom business logic.
