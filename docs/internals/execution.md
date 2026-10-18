# Secure snap execution in SES

To avoid snaps from getting access to the client, dangerous APIs, and such,
we run snaps in a different "realm," which is a separate JavaScript execution
environment. Inside this realm we use [SES]'s lockdown feature to harden the
realm, and prevent the snap from breaking out of the sandbox. For certain APIs,
such as the events API, we must do an extra lockdown, to make sure that the
snap can't break out of the sandbox.

Inside this realm, we create an [SES] compartment, which is a sandboxed
JavaScript environment that limits access to global APIs, letting us control
what the snap can do.

## Endowments

The endowments are the global APIs that are available to the snap, such as the
`console` API, the `fetch` function, and so on. To avoid the snap
breaking out of the sandbox, we only give it access to a limited set of APIs,
and we make sure that the APIs we give it are safe to use. For example, snaps
don't have access to the `window` or `document` object, so they can't access the
DOM.

Each endowment we provide to the snap is hardened in a couple of ways:

- We freeze and seal the object, so that the snap can't modify it or add new
  properties to it.
- We only provide a limited subset of APIs.
- Certain APIs are wrapped to ensure that they can be torn down properly
  when the snap is being stopped as well as to prevent snaps interfering with
  each other.

Some endowments are provided to the snap by default. A list of these can be
found [here](../../packages/snaps-utils/src/default-endowments.ts). Other
endowments must be requested by the snap, using the permissions system.

Endowments granted via the permission system map to one or more global APIs,
e.g., [endowment:network-access] grants access to `fetch`, `Request`, `Headers`,
and `Response`. These endowments may also be further hardened before being
passed to the snap, see for example [network hardening], which hardens the
`fetch` global before granting it to the snap.

Recent updates have added new endowments, such as `endowment:ethereum-provider`, 
`endowment:cronjob`, and `endowment:transaction-insights`. These endowments 
provide additional capabilities to snaps, allowing them to interact with the 
Ethereum blockchain, schedule background tasks, and provide transaction insights, 
respectively.

## Creating and Managing SES Compartments

Creating and managing SES compartments is a crucial part of ensuring the security 
and isolation of snaps. The process involves the following steps:

1. **Create a new SES Compartment**: A new SES compartment is created for each snap. 
   This compartment provides a sandboxed environment where the snap code can be executed 
   without affecting the rest of the system.

2. **Define Endowments**: The endowments for the snap are defined and provided to the 
   SES compartment. These endowments include the global APIs that the snap is allowed 
   to access.

3. **Evaluate Snap Code**: The snap code is evaluated within the SES compartment. This 
   ensures that the snap code is executed in a controlled environment with limited access 
   to global APIs.

4. **Manage Compartment Lifecycle**: The lifecycle of the SES compartment is managed to 
   ensure that it is properly initialized, executed, and terminated. This includes 
   handling any errors that may occur during the execution of the snap code.

By following these steps, we can ensure that snaps are executed in a secure and isolated 
environment, preventing them from accessing or modifying sensitive parts of the system.

<!--

## Hardening of the `snap` and `ethereum` globals

...

-->

[endowment:network-access]: ../../packages/snaps-controllers/src/snaps/endowments/network-access.ts
[network hardening]: ../../packages/snaps-execution-environments/src/common/endowments/network.ts
[ses]: https://github.com/endojs/endo/tree/master/packages/ses
