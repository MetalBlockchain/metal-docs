# Etna Changes

This document specifies the changes in Metal "Etna", released in MetalGo v1.12.x. Etna represents a major upgrade focused on "Reinventing Subnets" through the implementation of several Avalanche Community Proposals (ACPs).

## Overview

The Etna upgrade was activated on Metal Mainnet on February 25, 2025, and implements the following ACPs:

- **ACP-77**: Reinventing Subnets
- **ACP-103**: Dynamic Fees on the P-Chain
- **ACP-118**: Warp Signature Interface Standard for Arbitrary Message Signing
- **ACP-125**: Reduce C-Chain Minimum Base Fee from 25 nAVAX to 1 nAVAX
- **ACP-131**: Activate Cancun EIPs on C-Chain and Subnet-EVM
- **ACP-151**: Use Current P-Chain Height as Context for State Verification

## ACP-77: Reinventing Subnets

ACP-77 is the foundational upgrade that restructures how subnets operate within the Metal ecosystem. Key changes include:

### Subnet Sovereignty

- Subnets gain greater autonomy over their validator management
- Reduced coupling between subnet validators and the Primary Network
- More flexible staking requirements for subnet validation

### Validator Registration

- New mechanisms for registering validators on subnets
- Streamlined process for adding and removing subnet validators
- Support for custom validator requirements per subnet

## ACP-103: Dynamic Fees on the P-Chain

This upgrade introduces a dynamic fee mechanism for the Platform Chain, similar to EIP-1559 on Ethereum:

### Key Changes

- Base fee adjusts dynamically based on network demand
- More predictable transaction costs during varying network loads
- Improved user experience for staking operations

### New API Endpoints

```
platform.getValidatorFeeConfig
platform.getValidatorFeeState
```

These endpoints allow querying the current fee configuration and state.

### Removed Configuration Flags

Static fee configuration flags have been removed. Nodes must now use the dynamic fee system.

## ACP-125: C-Chain Base Fee Reduction

The minimum base fee on the C-Chain has been reduced from 25 nAVAX to 1 nAVAX.

### Benefits

- Lower transaction costs during periods of low network activity
- More competitive fee structure for DeFi applications
- Better user experience for frequent transactions

## ACP-131: Cancun EIPs

The Etna upgrade activates Ethereum Cancun upgrade EIPs on the C-Chain and Subnet-EVM, bringing compatibility with the latest Ethereum features.

### Activated EIPs

- **EIP-4844**: Proto-Danksharding (blob transactions)
- **EIP-1153**: Transient storage opcodes
- **EIP-4788**: Beacon block root in the EVM
- **EIP-5656**: MCOPY opcode
- **EIP-6780**: SELFDESTRUCT only in same transaction

## ACP-118: Warp Signature Interface Standard

Standardizes the interface for arbitrary message signing using Avalanche Warp Messaging.

### Use Cases

- Cross-chain communication
- Multi-chain authentication
- Interoperability protocols

## ACP-151: P-Chain Height Context

Uses the current P-Chain height as context for state verification, improving:

- State synchronization accuracy
- Cross-chain verification reliability
- Subnet state tracking

## Breaking Changes

### Keystore API Removal

The long-deprecated Keystore API has been removed in v1.12.2. Users must migrate to wallet-based key management before upgrading.

### Platform Support

Ubuntu 20.04 (Focal) is no longer supported. Upgrade to Ubuntu 22.04+ before updating to v1.12.x.

### Removed APIs

The following APIs have been removed:

- `platform.GetPendingValidators` (removed in v1.11.3)
- `platform.GetMaxStakeAmount` (removed in v1.11.3)
- Wallet management APIs (mint, send, import/export)

### Plugin Version

Plugin version updated to 39 (from 38). All plugins must be rebuilt for compatibility.

## Upgrade Requirements

### For Node Operators

1. Ensure Ubuntu 22.04+ or macOS 12+
2. Update MetalGo to v1.12.x before activation
3. Update all VM plugins to plugin version 39
4. Remove any static fee configuration flags
5. Migrate from Keystore API if still in use

### For Developers

1. Update SDK/library dependencies
2. Use new dynamic fee APIs for fee estimation
3. Update any Keystore API usage to wallet-based alternatives
4. Test applications against Cancun EIP changes if using advanced EVM features

## Migration Guide

### From v1.11.x to v1.12.x

```bash
# Stop the node
sudo systemctl stop metalgo

# Download and install v1.12.2
./metalgo-installer.sh

# Start the node
sudo systemctl start metalgo
```

### Fee Configuration Migration

If using static fee flags, remove them from your configuration and use the new API:

```bash
# Query current fee state
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getValidatorFeeState",
    "params": {},
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/P
```

## Timeline

| Milestone | Date |
|-----------|------|
| Etna v1.12.0 Release | February 9, 2025 |
| Mainnet Activation | February 25, 2025 |
| Etna.2 (v1.12.2) Release | December 10, 2025 |
