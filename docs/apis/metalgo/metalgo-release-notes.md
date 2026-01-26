# Release Notes

:::info
MetalGo is a fork of AvalancheGo and aims to maintain upstream changes. This page documents the major releases and their key changes.
:::

## v1.12.x (Etna) - Reinventing Subnets

The Etna upgrade represents a major evolution in subnet architecture, implementing several Avalanche Community Proposals (ACPs).

### v1.12.2 (Etna.2) - December 2025

**Breaking Changes:**
- Removed support for the deprecated Keystore API
- Ubuntu 20.04 (Focal) binaries no longer supported - upgrade to Ubuntu 22.04+
- Static fee configuration flags removed in favor of dynamic fee APIs
- Plugin version updated to 39 (all plugins must update)

**New API Endpoints:**
- `platform.getValidatorFeeConfig` - Get validator fee configuration
- `platform.getValidatorFeeState` - Get current validator fee state
- `avm.GetTxFee` now available (`info.GetTxFee` is deprecated)

**Removed APIs:**
- Wallet management APIs (mint, send, import/export functions)

### v1.12.0 (Etna) - February 2025

**Major ACPs Implemented:**
- **ACP-77**: Reinventing Subnets - foundational restructuring of subnet architecture
- **ACP-103**: Dynamic fee mechanisms for the P-Chain
- **ACP-118**: Warp signature interface standardization
- **ACP-125**: C-Chain base fee reduction (25 nAVAX → 1 nAVAX)
- **ACP-131**: Cancun EIP activation on C-Chain and Subnet-EVM
- **ACP-151**: P-Chain height context for state verification

**Plugin Version:** 38

---

## v1.11.x (Durango)

The Durango upgrade focuses on network protocol improvements and gossip mechanism modernization.

### v1.11.13 (Durango.13) - January 2025

- Etna-compatible release preparing the network for the Etna upgrade
- Plugin version updated to 38
- Backwards compatible to v1.11.0

### v1.11.3 (Durango.3) - May 2024

**Legacy Gossip Removal:**
- Simplified gossip protocol by removing legacy configuration options
- New `push-gossip-percent-stake` config for P-chain, X-chain, and C-chain

**Removed APIs:**
- `platform.GetPendingValidators`
- `platform.GetMaxStakeAmount`

**Bug Fix:**
- Corrected p2p SDK validator sampling to return only connected validators

**Plugin Version:** 35

### v1.11.2 (Durango.2) - April 2024

- Push gossip redesign for improved network efficiency
- Various stability improvements

### v1.11.1 (Durango.1) - April 2024

- Initial Durango release
- Network protocol improvements

---

## v1.10.x (Cortina)

The Cortina upgrade introduced optimized block gossip and various performance improvements.

### v1.10.17 (Cortina.17) - January 2024

**Optimized Block Gossip:**
- New metrics: `avalanche_{chainID}_blks_build_accept_latency`
- Block issuance tracking (pull gossip, push gossip, built blocks)

**Configuration Changes:**
- Added: `--consensus-frontier-poll-frequency`
- Removed: `--consensus-accepted-frontier-gossip-frequency`
- Several gossip settings deprecated

**Bug Fixes:**
- Fixed "duplicated operation on provided value" errors after C-chain state sync
- Removed problematic atomic trie usage post-commitment
- Prevented accidental closure of stdout/stderr during shutdown

---

## v1.9.x

### v1.9.4

- RPC version 20 support
- Various stability improvements

### v1.9.3

- Performance optimizations
- Bug fixes

---

## v1.7.x (Legacy)

### v1.7.18

- Historical version used in many examples
- Basic node functionality

### v1.7.16

**LevelDB**

- Fix rapid disk growth by manually specifying the maximum manifest file size