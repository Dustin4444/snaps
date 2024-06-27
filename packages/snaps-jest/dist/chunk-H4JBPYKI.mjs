import {
  getEnvironment
} from "./chunk-XK5HPZZC.mjs";
import {
  handleRequest
} from "./chunk-FHFWFWI7.mjs";
import {
  rootLogger
} from "./chunk-J4ZPUCLX.mjs";
import {
  JsonRpcMockOptionsStruct,
  SignatureOptionsStruct,
  SnapResponseWithInterfaceStruct,
  TransactionOptionsStruct
} from "./chunk-C26TYXXD.mjs";
import {
  addJsonRpcMock,
  removeJsonRpcMock
} from "./chunk-H2464AXT.mjs";

// src/helpers.ts
import { HandlerType, logInfo } from "@metamask/snaps-utils";
import { create } from "@metamask/superstruct";
import { assertStruct, createModuleLogger } from "@metamask/utils";
var log = createModuleLogger(rootLogger, "helpers");
function getOptions(snapId, options) {
  if (typeof snapId === "object") {
    return [void 0, snapId];
  }
  return [snapId, options];
}
function assertIsResponseWithInterface(response) {
  assertStruct(response, SnapResponseWithInterfaceStruct);
}
async function installSnap(snapId, options = {}) {
  const resolvedOptions = getOptions(snapId, options);
  const {
    snapId: installedSnapId,
    store,
    executionService,
    runSaga,
    controllerMessenger
  } = await getEnvironment().installSnap(...resolvedOptions);
  const onTransaction = async (request) => {
    log("Sending transaction %o.", request);
    const {
      origin: transactionOrigin,
      chainId,
      ...transaction
    } = create(request, TransactionOptionsStruct);
    const response = await handleRequest({
      snapId: installedSnapId,
      store,
      executionService,
      runSaga,
      controllerMessenger,
      handler: HandlerType.OnTransaction,
      request: {
        method: "",
        params: {
          chainId,
          transaction,
          transactionOrigin
        }
      }
    });
    assertIsResponseWithInterface(response);
    return response;
  };
  const onCronjob = (request) => {
    log("Running cronjob %o.", options);
    return handleRequest({
      snapId: installedSnapId,
      store,
      executionService,
      controllerMessenger,
      runSaga,
      handler: HandlerType.OnCronjob,
      request
    });
  };
  return {
    request: (request) => {
      log("Sending request %o.", request);
      return handleRequest({
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: HandlerType.OnRpcRequest,
        request
      });
    },
    onTransaction,
    sendTransaction: onTransaction,
    onSignature: async (request) => {
      log("Requesting signature %o.", request);
      const { origin: signatureOrigin, ...signature } = create(
        request,
        SignatureOptionsStruct
      );
      const response = await handleRequest({
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: HandlerType.OnSignature,
        request: {
          method: "",
          params: {
            signature,
            signatureOrigin
          }
        }
      });
      assertIsResponseWithInterface(response);
      return response;
    },
    onCronjob,
    runCronjob: onCronjob,
    onHomePage: async () => {
      log("Rendering home page.");
      const response = await handleRequest({
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: HandlerType.OnHomePage,
        request: {
          method: ""
        }
      });
      assertIsResponseWithInterface(response);
      return response;
    },
    mockJsonRpc(mock) {
      log("Mocking JSON-RPC request %o.", mock);
      const { method, result } = create(mock, JsonRpcMockOptionsStruct);
      store.dispatch(addJsonRpcMock({ method, result }));
      return {
        unmock() {
          log("Unmocking JSON-RPC request %o.", mock);
          store.dispatch(removeJsonRpcMock(method));
        }
      };
    },
    close: async () => {
      log("Closing execution service.");
      logInfo(
        "Calling `snap.close()` is deprecated, and will be removed in a future release. Snaps are now automatically closed when the test ends."
      );
      await executionService.terminateAllSnaps();
    }
  };
}

export {
  installSnap
};
//# sourceMappingURL=chunk-H4JBPYKI.mjs.map