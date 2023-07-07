# Tools and Utilities

There are a number of tools for managing your node and developing Subnets. This
page lists the most popular ones, explains what they do and their intended usage.

## MetalGo Installer

MetalGo Installer is a shell (bash) script that installs MetalGo on a
Linux computer. This script sets up full, running node in a matter of minutes
with minimal user input required. This is convenient if you want to run the node
as a service on a standalone Linux installation, for example to set up a
(Subnet) validator, use the node as a private RPC server and similar uses. It
also makes upgrading or reinstalling the nodes easy.

GitHub: [https://github.com/metalblockchain/metal-docs/blob/master/scripts/metalgo-installer.sh](https://github.com/metalblockchain/metal-docs/blob/master/scripts/metalgo-installer.sh)

Document: [Run an Metal Node Using the Install Script](../nodes/build/set-up-node-with-installer.md)

If you want to run a node in a more complex environment, like in a docker or
Kubernetes container, or as a part of an installation orchestrated using a tool
like Terraform, this installer probably won't fit your purposes.

## Metal CLI

Metal CLI is a developer-centric command line tool that gives you access to
everything Metal Blockchain. Setting up a local network, creating a Subnet, customizing
the Subnet/VM configuration - this is the tool to use. It is under rapid
development, so check back for new versions with expanded functionality.

GitHub: [https://github.com/MetalBlockchain/metal-cli](https://github.com/MetalBlockchain/metal-cli)

Document: [Create an EVM Subnet on a Local Network](../subnets/create-a-local-subnet.md)

## Subnet CLI

Subnet CLI is command-line interface to manage Metal Blockchain Subnets. It is intended
for provisioning testnet or Mainnet Subnets in production and allows for the use
of Ledger device to store the controlling keys to the Subnet for increased
operational security.

GitHub: [https://github.com/MetalBlockchain/subnet-cli](https://github.com/MetalBlockchain/subnet-cli)

Document: [Subnet CLI](../subnets/subnet-cli.md)

## Metal Network Runner (ANR)

The Metal Network Runner (**ANR**) allows a user to define, create and
interact with a network of Metal nodes. Networks created with **MNR** are
temporary and get destroyed when the tool is stopped, so the purpose of the tool
is to be used for local development and testing the code in the early stages,
before you're ready to deploy on permanent infrastructure (testnet or Mainnet).

GitHub: [https://github.com/MetalBlockchain/metal-network-runner](https://github.com/MetalBlockchain/metal-network-runner)

Document: [Metal Network Runner](../subnets/network-runner.md)

## Metal Plugin Manager (APM)

Metal Plugin Manager (**APM**) is a command-line tool to manage virtual
machines binaries on existing MetalGo instances. It enables to add/remove
nodes to Subnets, upgrade the VM plugin binaries as new versions get released to
the plugin repository.

GitHub: [https://github.com/MetalBlockchain/apm](https://github.com/MetalBlockchain/apm)

### `metal-plugins-core`

`metal-plugins-core` is plugin repository that ships with the `apm`. A
plugin repository consists of a set of virtual machine and Subnet definitions
that the `apm` consumes to allow users to quickly and easily download and manage
VM binaries.

GitHub: [https://github.com/MetalBlockchain/metal-plugins-core](https://github.com/MetalBlockchain/metal-plugins-core)

## Metal Ops

A single command to launch and configure network infrastructure (virtual
machines or cloud instances) and installs Metal Blockchain nodes from scratch allowing
for various configuration requirements. Provisions all resources required to run
a node or network with recommended setups (configurable). This tool is intended
for quickly creating, testing and iterating over various Metal Blockchain
infrastructure configurations for testing and simulation purposes. Use this to
play with various setups and reproduce potential problems and issues with
possible configurations.

GitHub: [https://github.com/MetalBlockchain/metal-ops](https://github.com/MetalBlockchain/metal-ops)
