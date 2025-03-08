# Snap Controller

The [Snap Controller] is the brain of the MetaMask Snaps platform. It is
responsible for:

- Starting and stopping snaps.
- Managing permissions.
- Managing snap state.
- Handling incoming requests from dapps, and routing them to the correct
  snap (through the [Execution Service]).
- Installing and uninstalling snaps.
- Checking if snaps are allowed to be installed (through the [Snaps Registry]).
- Managing the lifecycle of snaps, including initialization, execution, and termination.
- Ensuring the security and isolation of snaps by running them in a sandboxed environment.
- Handling communication between the MetaMask extension and the snaps.

As such, it is the main entry point for the MetaMask Snaps platform. It is
hooked up to the controller messaging system in the MetaMask extension, so it
can handle requests from other parts of the extension.

The snap controller uses a state machine to manage the state of the snaps. The
state machine is implemented using the [XState] library. This allows us to
easily reason about the state of the snaps.

## Introduction

This document provides an overview of the Snap Controller, its responsibilities, and its role in the MetaMask Snaps platform. The Snap Controller is a crucial component that manages the lifecycle, permissions, and state of snaps, ensuring their secure and efficient execution.

## Starting and stopping snaps

The Snap Controller is responsible for starting and stopping snaps. It does
this by calling the [Execution Service] to execute the snap code in a
[Execution Environment]. When a snap is started, stopped, crashed, etc., the
Snap Controller updates the state of the snap in the state machine.

## State Machine

The Snap Controller uses a state machine to manage the state of the snaps. The state machine is implemented using the [XState] library. This allows us to easily reason about the state of the snaps and handle various state transitions, such as starting, stopping, crashing, and updating snaps.

The state machine has the following states:

- **Installing**: The snap is being installed.
- **Updating**: The snap is being updated.
- **Running**: The snap is running and ready to handle requests.
- **Stopped**: The snap is stopped and not running.
- **Crashed**: The snap has crashed and needs to be restarted.

The state machine transitions between these states based on events, such as starting, stopping, crashing, and updating snaps. This ensures that the Snap Controller can manage the lifecycle of snaps in a consistent and predictable manner.

[snap controller]: ../../../packages/snaps-controllers/src/snaps/SnapController.ts
[execution service]: ./execution-service.md
[execution environment]: ../../../packages/snaps-execution-environments/src/common/BaseSnapExecutor.ts
[xstate]: https://xstate.js.org/
[snaps registry]: ./snaps-registry.md
