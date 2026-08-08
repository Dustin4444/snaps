# Architecture

This document provides an overview of the architecture of the MetaMask Snaps system. It explains the key components and their roles in the system.

## Entity diagram

This entity diagram illustrates the "backend" components of the Snaps system and how they communicate with each other.

![MetaMask Snaps Architecture](https://github.com/MetaMask/snaps/assets/25517051/4e2ba193-7245-4400-9b29-92b13ccb9cd1)

## Snap Controller

The Snap Controller is the brain of the MetaMask Snaps platform. It is responsible for:

- Starting and stopping snaps.
- Managing permissions.
- Managing snap state.
- Handling incoming requests from dapps, and routing them to the correct snap (through the Execution Service).
- Installing and uninstalling snaps.
- Checking if snaps are allowed to be installed (through the Snaps Registry).

As such, it is the main entry point for the MetaMask Snaps platform. It is hooked up to the controller messaging system in the MetaMask extension, so it can handle requests from other parts of the extension.

The snap controller uses a state machine to manage the state of the snaps. The state machine is implemented using the XState library. This allows us to easily reason about the state of the snaps.

## Execution Service

The MetaMask Snaps platform has several execution services, not to be confused with execution environments, which handle communication between the Snap Controller and the Execution Environment. The execution service is responsible for managing these execution environments.

Currently, the execution service supports the following execution environments:

- Iframe (Manifest V2), which creates an iframe in the extension background DOM.
- Node.js process, which spawns a new process for each snap execution.
- Node.js worker threads, which creates a new worker thread for each snap execution.
- Offscreen (Manifest V3), which uses the Offscreen Document API to create a proxy to the iframe execution environment.
- WebWorker (Manifest V2), which creates a web worker for each snap execution.

Generally, these execution services work as follows:

1. The Snap Controller calls the execution service to execute a snap.
2. The execution service creates an Execution Environment for the snap, e.g., it creates an iframe in the extension.
3. The execution service sets up a stream using one of the post message streams, depending on the environment.
4. The execution service calls the Execution Environment to execute the snap code in the Execution Environment.
5. The snap is now running and ready to service requests.

```mermaid
sequenceDiagram
    Controller->>+Service: Execute snap
    activate Service
    Service->>Service: Set up stream
    Service-->>Environment: Create environment
    Environment->>Environment: Set up stream
    Environment->>Service: "SYN"
    Service->>Environment: "ACK"
    Service->>Environment: "ping"
    Environment->>Service: "OK"
    Service->>Environment: "executeSnap"
    Environment->>Service: "OK"
    Service->>Controller: "OK"

    deactivate Service
```

After this initial boot-up, the snap is now ready to service requests, also via JSON-RPC.

```mermaid
sequenceDiagram
    Controller->>Service: handleRpcRequest
    Service->>Environment: "snapRpc"
    Environment->>Environment: Snap export is executed with given parameters
    Environment->>Service: Response
    Service->>Controller: Response
```

All of the communication between the Snap Controller and the execution service is done through the controller messaging system in the MetaMask extension. The execution service is hooked up to the controller messaging system, so it can handle requests from other parts of the extension.

## Sequence diagram

This sequence diagram illustrates the flow of a request from a dapp to a Snap, and back.

```mermaid
sequenceDiagram
  participant d as Dapp
  participant mm as MetaMask Background
  participant sc as Snap Controller
  participant ex as Execution Service
  participant i as Iframe
  participant exe as Execution Environment
  participant ses as SES Compartment
  participant s as A-Snap
  Note over d,mm: Invoke A-Snap with RPC request
  Note over d,mm: Permission for the dapp to invoke
  d->>mm: invokeSnap(snapId, request)
  Note over mm: Provider engine:<br>Permission to call handler check<br>Call matching handler
  mm->>sc: handleRequest
  Note over sc: > Snap is not running
  sc->>sc: startSnap(snapId, code)
  Note over sc: Permissions translated to actual endowments
  sc->>ex: executeSnap<br>(snapId, code, endowments)
  ex->>i: Create iframe
  i->exe: Load environment
  i-->>ex: _
  exe->>exe: Initialization
  ex->>ex: Set up streams and job
  Note over ex,exe: postMessage is set up<br>⚠️ e.source===_targetWindow
  Note over ex, exe: can use command(method, RPC) now
  ex->>exe: await command("ping", …)
  exe-->>ex: OK
  ex->>mm: setupSnapProvider(snapId, stream)
  Note over mm,ex: Communication is set up on the stream, <br>⚠️ checked for subjectType and snapId as origin
  mm-->>ex: _
  ex->>exe: await command("executeSnap", A-Snap code)
  exe->>exe: Create endowments, module etc.
  exe->>ses: Create Compartment
  exe->>exe: this.executeInSnapContext
  exe->>ses: evaluate(A-Snap code)
  ses->>s: Execute
  s-->>ses: Export RPC handler
  ses-->>exe: _
  exe->>exe: ⚠️ Validate and register exports
  exe-->>ex: OK
  ex->>ex: createSnapHooks
  Note over ex: Wires up snapRpc to the exported handler
  ex-->>sc: OK
  Note over sc: Remember: We received a request.<br>It can now be sent to snapRpc
  sc->>ex: handleRpcRequest
  Note over sc,ex: Request from dapp is wrapped in<br>another RPC for snap command
  sc->>sc: Set up timer
  ex->>exe: Handle RPC
  exe->s: Handle RPC
  s->>s: Do stuff
  Note over exe,s: Snap sends an RPC request through<br> the endowed API
  s->>exe: request
  exe->>exe: Check if method is wallet_* or snap_*
  Note over exe: Asserts defensively, doesn't use<br>method.startsWith
  exe->>mm: RPC request
  Note over mm: Provider engine:<br>Permission to call handler check<br>Call matching handler
  mm-->>exe: RPC response
  exe-->>s: RPC response
  s->>s: Do stuff

  s-->>exe: Snap response
  exe->>exe: Check if returned value is valid JSON

  exe-->>ex: Snap response
  ex->>ex: Throw if response is an error

  ex-->>sc: Snap response
  sc->>sc: Cancel timer
  sc-->>d: Snap response
```
