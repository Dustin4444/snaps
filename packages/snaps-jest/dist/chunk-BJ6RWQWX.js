"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2JTGBHPRjs = require('./chunk-2JTGBHPR.js');


var _chunk7XQ2DIR5js = require('./chunk-7XQ2DIR5.js');


var _chunkZJJGWZLJjs = require('./chunk-ZJJGWZLJ.js');


var _chunkTZB4LBT7js = require('./chunk-TZB4LBT7.js');





var _chunkGLPGOEVEjs = require('./chunk-GLPGOEVE.js');



var _chunkLACTK6EOjs = require('./chunk-LACTK6EO.js');

// src/helpers.ts
var _snapssdk = require('@metamask/snaps-sdk');
var _snapsutils = require('@metamask/snaps-utils');
var _superstruct = require('@metamask/superstruct');





var _utils = require('@metamask/utils');
var log = _utils.createModuleLogger.call(void 0, _chunkTZB4LBT7js.rootLogger, "helpers");
function getOptions(snapId, options) {
  if (typeof snapId === "object") {
    return [void 0, snapId];
  }
  return [snapId, options];
}
function assertIsResponseWithInterface(response) {
  _utils.assertStruct.call(void 0, response, _chunkGLPGOEVEjs.SnapResponseWithInterfaceStruct);
}
function assertIsAlertDialog(ui) {
  _utils.assert.call(void 0, _utils.hasProperty.call(void 0, ui, "type") && ui.type === _snapssdk.DialogType.Alert);
}
function assertIsConfirmationDialog(ui) {
  _utils.assert.call(void 0, _utils.hasProperty.call(void 0, ui, "type") && ui.type === _snapssdk.DialogType.Confirmation);
}
function assertIsPromptDialog(ui) {
  _utils.assert.call(void 0, _utils.hasProperty.call(void 0, ui, "type") && ui.type === _snapssdk.DialogType.Prompt);
}
function assertIsCustomDialog(ui) {
  _utils.assert.call(void 0, !_utils.hasProperty.call(void 0, ui, "type"));
}
function assertCustomDialogHasFooter(ui) {
  const footer = _chunkZJJGWZLJjs.getElementByType.call(void 0, ui.content, "Footer");
  _utils.assert.call(void 0, footer && _snapsutils.getJsxChildren.call(void 0, footer).length === 2);
}
function assertCustomDialogHasPartialFooter(ui) {
  const footer = _chunkZJJGWZLJjs.getElementByType.call(void 0, ui.content, "Footer");
  _utils.assert.call(void 0, footer && _snapsutils.getJsxChildren.call(void 0, footer).length === 1);
}
function assertCustomDialogHasNoFooter(ui) {
  const footer = _chunkZJJGWZLJjs.getElementByType.call(void 0, ui.content, "Footer");
  _utils.assert.call(void 0, !footer);
}
async function installSnap(snapId, options = {}) {
  const resolvedOptions = getOptions(snapId, options);
  const {
    snapId: installedSnapId,
    store,
    executionService,
    runSaga,
    controllerMessenger
  } = await _chunk2JTGBHPRjs.getEnvironment.call(void 0, ).installSnap(...resolvedOptions);
  const onTransaction = async (request) => {
    log("Sending transaction %o.", request);
    const {
      origin: transactionOrigin,
      chainId,
      ...transaction
    } = _superstruct.create.call(void 0, request, _chunkGLPGOEVEjs.TransactionOptionsStruct);
    const response = await _chunk7XQ2DIR5js.handleRequest.call(void 0, {
      snapId: installedSnapId,
      store,
      executionService,
      runSaga,
      controllerMessenger,
      handler: _snapsutils.HandlerType.OnTransaction,
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
    return _chunk7XQ2DIR5js.handleRequest.call(void 0, {
      snapId: installedSnapId,
      store,
      executionService,
      controllerMessenger,
      runSaga,
      handler: _snapsutils.HandlerType.OnCronjob,
      request
    });
  };
  return {
    request: (request) => {
      log("Sending request %o.", request);
      return _chunk7XQ2DIR5js.handleRequest.call(void 0, {
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: _snapsutils.HandlerType.OnRpcRequest,
        request
      });
    },
    onTransaction,
    sendTransaction: onTransaction,
    onSignature: async (request) => {
      log("Requesting signature %o.", request);
      const { origin: signatureOrigin, ...signature } = _superstruct.create.call(void 0, 
        request,
        _chunkGLPGOEVEjs.SignatureOptionsStruct
      );
      const response = await _chunk7XQ2DIR5js.handleRequest.call(void 0, {
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: _snapsutils.HandlerType.OnSignature,
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
      const response = await _chunk7XQ2DIR5js.handleRequest.call(void 0, {
        snapId: installedSnapId,
        store,
        executionService,
        controllerMessenger,
        runSaga,
        handler: _snapsutils.HandlerType.OnHomePage,
        request: {
          method: ""
        }
      });
      assertIsResponseWithInterface(response);
      return response;
    },
    mockJsonRpc(mock) {
      log("Mocking JSON-RPC request %o.", mock);
      const { method, result } = _superstruct.create.call(void 0, mock, _chunkGLPGOEVEjs.JsonRpcMockOptionsStruct);
      store.dispatch(_chunkLACTK6EOjs.addJsonRpcMock.call(void 0, { method, result }));
      return {
        unmock() {
          log("Unmocking JSON-RPC request %o.", mock);
          store.dispatch(_chunkLACTK6EOjs.removeJsonRpcMock.call(void 0, method));
        }
      };
    },
    close: async () => {
      log("Closing execution service.");
      _snapsutils.logInfo.call(void 0, 
        "Calling `snap.close()` is deprecated, and will be removed in a future release. Snaps are now automatically closed when the test ends."
      );
      await executionService.terminateAllSnaps();
    }
  };
}










exports.assertIsAlertDialog = assertIsAlertDialog; exports.assertIsConfirmationDialog = assertIsConfirmationDialog; exports.assertIsPromptDialog = assertIsPromptDialog; exports.assertIsCustomDialog = assertIsCustomDialog; exports.assertCustomDialogHasFooter = assertCustomDialogHasFooter; exports.assertCustomDialogHasPartialFooter = assertCustomDialogHasPartialFooter; exports.assertCustomDialogHasNoFooter = assertCustomDialogHasNoFooter; exports.installSnap = installSnap;
//# sourceMappingURL=chunk-BJ6RWQWX.js.map