# RPC Methods

This document provides an overview of the RPC methods available in the MetaMask Snaps platform. It explains the key components and their roles in handling JSON-RPC requests from websites and snaps.

Apart from the execution of snaps itself, the Snaps platform is also a
collection of JSON-RPC method implementations that are available to websites and
snaps, though some are restricted to be snap-exclusive, i.e., only available to
snaps.

The JSON-RPC methods are split into two groups: **restricted** and
**permitted**. All permitted RPC method handlers are included in an exported
middleware called [createSnapsMethodMiddleware]. This middleware should be
included in the JSON-RPC engine stack of the client implementing the Snaps
platform. All of the restricted JSON-RPC methods handlers are exported as
[restrictedMethodPermissionBuilders] and use the permission specification
builder pattern. These permission specifications should be built and included in
the [PermissionController] configuration.

These RPC methods implement both globally available APIs that are required to
use the Snaps platform, e.g., `wallet_requestSnaps` as well as more dangerous
APIs that should only be available to specific snaps with specific permissions,
e.g., `snap_getBip44Entropy`.

## Restricted and Permitted JSON-RPC Methods

The Snaps platform defines a set of restricted and permitted JSON-RPC methods. Restricted methods require specific permissions to be called, while permitted methods are available to all snaps. Here is a list of some of the key JSON-RPC methods:

### Restricted Methods

- `snap_getBip32Entropy`: Retrieves BIP-32 entropy for a given path.
- `snap_getBip44Entropy`: Retrieves BIP-44 entropy for a given path.
- `snap_getEntropy`: Retrieves deterministic entropy based on the user's secret recovery phrase.
- `snap_manageState`: Manages the state of a snap.
- `snap_notify`: Displays notifications to the user.
- `snap_dialog`: Displays different types of dialogs to the user.
- `snap_getLocale`: Retrieves the user's locale.
- `snap_getClientStatus`: Retrieves information about the client executing the snap.
- `snap_invokeSnap`: Invokes another snap.
- `snap_getFile`: Loads files for the snap.
- `snap_scheduleBackgroundEvent`: Schedules a function to be called at a later time.
- `snap_getPreferences`: Retrieves the user's preferences from the executing client.
- `snap_getTransactionInsights`: Provides transaction insights to the user.
- `snap_getEthereumProvider`: Interacts with the Ethereum blockchain from a snap.
- `snap_getNameLookup`: Resolves domains and addresses in a snap.
- `snap_getNetworkAccess`: Makes network requests from a snap.
- `snap_getAssets`: Retrieves assets information for the snap.
- `snap_getAssetsConversion`: Converts assets information for the snap.
- `snap_getAssetsLookup`: Looks up assets information for the snap.

### Permitted Methods

- `wallet_requestSnaps`: Requests the installation of a snap.
- `wallet_getSnaps`: Retrieves the list of installed snaps.
- `wallet_enable`: Enables a snap.
- `wallet_disable`: Disables a snap.
- `wallet_updateSnap`: Updates a snap.
- `wallet_removeSnap`: Removes a snap.
- `wallet_getPermissions`: Retrieves the permissions of a snap.
- `wallet_requestPermissions`: Requests permissions for a snap.
- `wallet_getAccounts`: Retrieves the list of accounts.
- `wallet_sendTransaction`: Sends a transaction.
- `wallet_signMessage`: Signs a message.
- `wallet_signTypedData`: Signs typed data.

[createsnapsmethodmiddleware]: ../../../packages/snaps-rpc-methods/src/permitted/middleware.ts
[restrictedmethodpermissionbuilders]: ../../../packages/snaps-rpc-methods/src/restricted/index.ts
[permissioncontroller]: ../permissions.md
