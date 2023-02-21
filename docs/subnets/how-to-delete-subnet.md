# How to Delete a Subnet

## Deleting a Subnet Configuration

To delete a created Subnet configuration, run

`metal subnet delete <subnetName>`

## Deleting a Deployed Subnet

You can't delete Subnets deployed to Mainnet or the Tahoe Testnet.

However, you may delete Subnets deployed to a local network by cleaning the network state with

```shell
metal network clean
```