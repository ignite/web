"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareChannelHandshake = exports.prepareConnectionHandshake = exports.buildCreateClientArgs = exports.IbcClient = void 0;

var encoding_1 = require("@cosmjs/encoding");

var launchpad_1 = require("@cosmjs/launchpad");

var proto_signing_1 = require("@cosmjs/proto-signing");

var stargate_1 = require("@cosmjs/stargate");

var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");

var utils_1 = require("@cosmjs/utils");

var long_1 = __importDefault(require("long"));

var tx_1 = require("../codec/ibc/applications/transfer/v1/tx");

var channel_1 = require("../codec/ibc/core/channel/v1/channel");

var tx_2 = require("../codec/ibc/core/channel/v1/tx");

var client_1 = require("../codec/ibc/core/client/v1/client");

var tx_3 = require("../codec/ibc/core/client/v1/tx");

var tx_4 = require("../codec/ibc/core/connection/v1/tx");

var tendermint_1 = require("../codec/ibc/lightclients/tendermint/v1/tendermint");

var types_1 = require("../codec/tendermint/types/types");

var validator_1 = require("../codec/tendermint/types/validator");

var logger_1 = require("./logger");

var ibc_1 = require("./queries/ibc");

var utils_2 = require("./utils");
/**** These are needed to bootstrap the endpoints */

/* Some of them are hardcoded various places, which should we make configurable? */
// const DefaultTrustLevel = '1/3';
// const MaxClockDrift = 10; // 10 seconds
// const upgradePath = ['upgrade', 'upgradedIBCState'];
// const allowUpgradeAfterExpiry = false;
// const allowUpgradeAfterMisbehavior = false;
// these are from the cosmos sdk implementation


var defaultMerklePrefix = {
  keyPrefix: encoding_1.toAscii('ibc')
};
var defaultConnectionVersion = {
  identifier: '1',
  features: ['ORDER_ORDERED', 'ORDER_UNORDERED']
}; // this is a sane default, but we can revisit it

var defaultDelayPeriod = new long_1["default"](0);

function ibcRegistry() {
  return new proto_signing_1.Registry([].concat(_toConsumableArray(stargate_1.defaultRegistryTypes), [['/ibc.core.client.v1.MsgCreateClient', tx_3.MsgCreateClient], ['/ibc.core.client.v1.MsgUpdateClient', tx_3.MsgUpdateClient], ['/ibc.core.connection.v1.MsgConnectionOpenInit', tx_4.MsgConnectionOpenInit], ['/ibc.core.connection.v1.MsgConnectionOpenTry', tx_4.MsgConnectionOpenTry], ['/ibc.core.connection.v1.MsgConnectionOpenAck', tx_4.MsgConnectionOpenAck], ['/ibc.core.connection.v1.MsgConnectionOpenConfirm', tx_4.MsgConnectionOpenConfirm], ['/ibc.core.channel.v1.MsgChannelOpenInit', tx_2.MsgChannelOpenInit], ['/ibc.core.channel.v1.MsgChannelOpenTry', tx_2.MsgChannelOpenTry], ['/ibc.core.channel.v1.MsgChannelOpenAck', tx_2.MsgChannelOpenAck], ['/ibc.core.channel.v1.MsgChannelOpenConfirm', tx_2.MsgChannelOpenConfirm], ['/ibc.core.channel.v1.MsgRecvPacket', tx_2.MsgRecvPacket], ['/ibc.core.channel.v1.MsgAcknowledgement', tx_2.MsgAcknowledgement], ['/ibc.core.channel.v1.MsgTimeout', tx_2.MsgTimeout], ['/ibc.applications.transfer.v1.MsgTransfer', tx_1.MsgTransfer]]));
}

var defaultGasPrice = launchpad_1.GasPrice.fromString('0.025ucosm');
var defaultGasLimits = {
  initClient: 150000,
  updateClient: 600000,
  initConnection: 150000,
  connectionHandshake: 300000,
  initChannel: 150000,
  channelHandshake: 300000,
  receivePacket: 300000,
  ackPacket: 300000,
  timeoutPacket: 300000,
  transfer: 180000
};

var IbcClient = /*#__PURE__*/function () {
  function IbcClient(signingClient, tmClient, senderAddress, chainId, options) {
    _classCallCheck(this, IbcClient);

    this.sign = signingClient;
    this.tm = tmClient;
    this.query = stargate_1.QueryClient.withExtensions(tmClient, stargate_1.setupAuthExtension, stargate_1.setupBankExtension, ibc_1.setupIbcExtension);
    this.senderAddress = senderAddress;
    this.chainId = chainId;
    this.revisionNumber = utils_2.parseRevisionNumber(chainId);
    var _options$gasPrice = options.gasPrice,
        gasPrice = _options$gasPrice === void 0 ? defaultGasPrice : _options$gasPrice,
        _options$gasLimits = options.gasLimits,
        gasLimits = _options$gasLimits === void 0 ? {} : _options$gasLimits,
        logger = options.logger;
    this.fees = launchpad_1.buildFeeTable(gasPrice, defaultGasLimits, gasLimits);
    this.logger = logger !== null && logger !== void 0 ? logger : new logger_1.NoopLogger();
  }

  _createClass(IbcClient, [{
    key: "revisionHeight",
    value: function revisionHeight(height) {
      return client_1.Height.fromPartial({
        revisionHeight: new long_1["default"](height),
        revisionNumber: this.revisionNumber
      });
    }
  }, {
    key: "ensureRevisionHeight",
    value: function ensureRevisionHeight(height) {
      if (typeof height === 'number') {
        return client_1.Height.fromPartial({
          revisionHeight: long_1["default"].fromNumber(height),
          revisionNumber: this.revisionNumber
        });
      }

      if (height.revisionNumber.toNumber() !== this.revisionNumber.toNumber()) {
        throw new Error("Using incorrect revisionNumber ".concat(height.revisionNumber, " on chain with ").concat(this.revisionNumber));
      }

      return height;
    }
  }, {
    key: "timeoutHeight",
    value: function () {
      var _timeoutHeight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(blocksInFuture) {
        var header;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.latestHeader();

              case 2:
                header = _context.sent;
                return _context.abrupt("return", this.revisionHeight(header.height + blocksInFuture));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function timeoutHeight(_x) {
        return _timeoutHeight.apply(this, arguments);
      }

      return timeoutHeight;
    }()
  }, {
    key: "getChainId",
    value: function getChainId() {
      this.logger.verbose('Get chain ID');
      return this.sign.getChainId();
    }
  }, {
    key: "header",
    value: function () {
      var _header = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(height) {
        var resp;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.logger.verbose("Get header for height ".concat(height)); // TODO: expose header method on tmClient and use that

                _context2.next = 3;
                return this.tm.blockchain(height, height);

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.blockMetas[0].header);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function header(_x2) {
        return _header.apply(this, arguments);
      }

      return header;
    }()
  }, {
    key: "latestHeader",
    value: function () {
      var _latestHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var block;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.tm.block();

              case 2:
                block = _context3.sent;
                return _context3.abrupt("return", block.block.header);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function latestHeader() {
        return _latestHeader.apply(this, arguments);
      }

      return latestHeader;
    }()
  }, {
    key: "currentTime",
    value: function () {
      var _currentTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.latestHeader();

              case 2:
                return _context4.abrupt("return", _context4.sent.time);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function currentTime() {
        return _currentTime.apply(this, arguments);
      }

      return currentTime;
    }()
  }, {
    key: "currentHeight",
    value: function () {
      var _currentHeight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var status;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.tm.status();

              case 2:
                status = _context5.sent;
                return _context5.abrupt("return", status.syncInfo.latestBlockHeight);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function currentHeight() {
        return _currentHeight.apply(this, arguments);
      }

      return currentHeight;
    }()
  }, {
    key: "currentRevision",
    value: function () {
      var _currentRevision = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var block;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.currentHeight();

              case 2:
                block = _context6.sent;
                return _context6.abrupt("return", this.revisionHeight(block));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function currentRevision() {
        return _currentRevision.apply(this, arguments);
      }

      return currentRevision;
    }()
  }, {
    key: "waitOneBlock",
    value: function () {
      var _waitOneBlock = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var start, end;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.currentHeight();

              case 2:
                start = _context7.sent;

              case 3:
                _context7.next = 5;
                return utils_1.sleep(500);

              case 5:
                _context7.next = 7;
                return this.currentHeight();

              case 7:
                end = _context7.sent;

              case 8:
                if (end === start) {
                  _context7.next = 3;
                  break;
                }

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function waitOneBlock() {
        return _waitOneBlock.apply(this, arguments);
      }

      return waitOneBlock;
    }() // we may have to wait a bit before a tx returns and making queries on the event log

  }, {
    key: "waitForIndexer",
    value: function () {
      var _waitForIndexer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return utils_1.sleep(50);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function waitForIndexer() {
        return _waitForIndexer.apply(this, arguments);
      }

      return waitForIndexer;
    }()
  }, {
    key: "getCommit",
    value: function getCommit(height) {
      this.logger.verbose(height === undefined ? 'Get latest commit' : "Get commit for height ".concat(height));
      return this.tm.commit(height);
    }
  }, {
    key: "getSignedHeader",
    value: function () {
      var _getSignedHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(height) {
        var _yield$this$getCommit, rpcHeader, rpcCommit, header, signatures, commit;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getCommit(height);

              case 2:
                _yield$this$getCommit = _context9.sent;
                rpcHeader = _yield$this$getCommit.header;
                rpcCommit = _yield$this$getCommit.commit;
                header = types_1.Header.fromPartial(Object.assign(Object.assign({}, rpcHeader), {
                  version: {
                    block: new long_1["default"](rpcHeader.version.block)
                  },
                  height: new long_1["default"](rpcHeader.height),
                  time: utils_2.timestampFromDateNanos(rpcHeader.time),
                  lastBlockId: {
                    hash: rpcHeader.lastBlockId.hash,
                    partSetHeader: rpcHeader.lastBlockId.parts
                  }
                }));
                signatures = rpcCommit.signatures.map(function (sig) {
                  return Object.assign(Object.assign({}, sig), {
                    timestamp: sig.timestamp && utils_2.timestampFromDateNanos(sig.timestamp),
                    blockIdFlag: types_1.blockIDFlagFromJSON(sig.blockIdFlag)
                  });
                });
                commit = types_1.Commit.fromPartial({
                  height: new long_1["default"](rpcCommit.height),
                  round: rpcCommit.round,
                  blockId: {
                    hash: rpcCommit.blockId.hash,
                    partSetHeader: rpcCommit.blockId.parts
                  },
                  signatures: signatures
                }); // For the vote sign bytes, it checks (from the commit):
                //   Height, Round, BlockId, TimeStamp, ChainID

                return _context9.abrupt("return", {
                  header: header,
                  commit: commit
                });

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getSignedHeader(_x3) {
        return _getSignedHeader.apply(this, arguments);
      }

      return getSignedHeader;
    }()
  }, {
    key: "getValidatorSet",
    value: function () {
      var _getValidatorSet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(height) {
        var _yield$this$header, proposerAddress, validators, mappedValidators, totalPower, proposer;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.logger.verbose("Get validator set for height ".concat(height)); // we need to query the header to find out who the proposer was, and pull them out

                _context10.next = 3;
                return this.header(height);

              case 3:
                _yield$this$header = _context10.sent;
                proposerAddress = _yield$this$header.proposerAddress;
                _context10.next = 7;
                return this.tm.validatorsAll(height);

              case 7:
                validators = _context10.sent;
                mappedValidators = validators.validators.map(function (val) {
                  return {
                    address: val.address,
                    pubKey: utils_2.mapRpcPubKeyToProto(val.pubkey),
                    votingPower: new long_1["default"](val.votingPower),
                    proposerPriority: val.proposerPriority ? new long_1["default"](val.proposerPriority) : undefined
                  };
                });
                totalPower = validators.validators.reduce(function (x, v) {
                  return x + v.votingPower;
                }, 0);
                proposer = mappedValidators.find(function (val) {
                  return utils_1.arrayContentEquals(val.address, proposerAddress);
                });
                return _context10.abrupt("return", validator_1.ValidatorSet.fromPartial({
                  validators: mappedValidators,
                  totalVotingPower: new long_1["default"](totalPower),
                  proposer: proposer
                }));

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getValidatorSet(_x4) {
        return _getValidatorSet.apply(this, arguments);
      }

      return getValidatorSet;
    }() // this builds a header to update a remote client.
    // you must pass the last known height on the remote side so we can properly generate it.
    // it will update to the latest state of this chain.
    //
    // This is the logic that validates the returned struct:
    // ibc check: https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L87-L167
    // tendermint check: https://github.com/tendermint/tendermint/blob/v0.34.3/light/verifier.go#L19-L79
    // sign bytes: https://github.com/tendermint/tendermint/blob/v0.34.3/types/validator_set.go#L762-L821
    //   * https://github.com/tendermint/tendermint/blob/v0.34.3/types/validator_set.go#L807-L810
    //   * https://github.com/tendermint/tendermint/blob/v0.34.3/types/block.go#L780-L809
    //   * https://github.com/tendermint/tendermint/blob/bf9e36d02d2eb22f6fe8961d0d7d3d34307ba38e/types/canonical.go#L54-L65
    //
    // For the vote sign bytes, it checks (from the commit):
    //   Height, Round, BlockId, TimeStamp, ChainID

  }, {
    key: "buildHeader",
    value: function () {
      var _buildHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(lastHeight) {
        var signedHeader, validatorHeight, curHeight;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getSignedHeader();

              case 2:
                signedHeader = _context11.sent;
                // "assert that trustedVals is NextValidators of last trusted header"
                // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
                validatorHeight = lastHeight + 1;
                /* eslint @typescript-eslint/no-non-null-assertion: "off" */

                curHeight = signedHeader.header.height.toNumber();
                _context11.t0 = tendermint_1.Header;
                _context11.t1 = signedHeader;
                _context11.next = 9;
                return this.getValidatorSet(curHeight);

              case 9:
                _context11.t2 = _context11.sent;
                _context11.t3 = this.revisionHeight(lastHeight);
                _context11.next = 13;
                return this.getValidatorSet(validatorHeight);

              case 13:
                _context11.t4 = _context11.sent;
                _context11.t5 = {
                  signedHeader: _context11.t1,
                  validatorSet: _context11.t2,
                  trustedHeight: _context11.t3,
                  trustedValidators: _context11.t4
                };
                return _context11.abrupt("return", _context11.t0.fromPartial.call(_context11.t0, _context11.t5));

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function buildHeader(_x5) {
        return _buildHeader.apply(this, arguments);
      }

      return buildHeader;
    }() // trustedHeight must be proven by the client on the destination chain
    // and include a proof for the connOpenInit (eg. must be 1 or more blocks after the
    // block connOpenInit Tx was in).
    //
    // pass a header height that was previously updated to on the remote chain using updateClient.
    // note: the queries will be for the block before this header, so the proofs match up (appHash is on H+1)

  }, {
    key: "getConnectionProof",
    value: function () {
      var _getConnectionProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(clientId, connectionId, headerHeight) {
        var proofHeight, queryHeight, _yield$this$query$ibc, clientState, proofClient, _yield$this$query$ibc2, consensusHeight, _yield$this$query$ibc3, proofConnection, _yield$this$query$ibc4, proofConsensus;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                proofHeight = this.ensureRevisionHeight(headerHeight);
                queryHeight = utils_2.subtractBlock(proofHeight, 1);
                _context12.next = 4;
                return this.query.ibc.proof.client.state(clientId, queryHeight);

              case 4:
                _yield$this$query$ibc = _context12.sent;
                clientState = _yield$this$query$ibc.clientState;
                proofClient = _yield$this$query$ibc.proof;
                _context12.next = 9;
                return this.query.ibc.client.stateTm(clientId);

              case 9:
                _yield$this$query$ibc2 = _context12.sent;
                consensusHeight = _yield$this$query$ibc2.latestHeight;
                utils_1.assert(consensusHeight); // get the init proof

                _context12.next = 14;
                return this.query.ibc.proof.connection.connection(connectionId, queryHeight);

              case 14:
                _yield$this$query$ibc3 = _context12.sent;
                proofConnection = _yield$this$query$ibc3.proof;
                _context12.next = 18;
                return this.query.ibc.proof.client.consensusState(clientId, consensusHeight, queryHeight);

              case 18:
                _yield$this$query$ibc4 = _context12.sent;
                proofConsensus = _yield$this$query$ibc4.proof;
                return _context12.abrupt("return", {
                  clientId: clientId,
                  clientState: clientState,
                  connectionId: connectionId,
                  proofHeight: proofHeight,
                  proofConnection: proofConnection,
                  proofClient: proofClient,
                  proofConsensus: proofConsensus,
                  consensusHeight: consensusHeight
                });

              case 21:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getConnectionProof(_x6, _x7, _x8) {
        return _getConnectionProof.apply(this, arguments);
      }

      return getConnectionProof;
    }() // trustedHeight must be proven by the client on the destination chain
    // and include a proof for the connOpenInit (eg. must be 1 or more blocks after the
    // block connOpenInit Tx was in).
    //
    // pass a header height that was previously updated to on the remote chain using updateClient.
    // note: the queries will be for the block before this header, so the proofs match up (appHash is on H+1)

  }, {
    key: "getChannelProof",
    value: function () {
      var _getChannelProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(id, headerHeight) {
        var proofHeight, queryHeight, _yield$this$query$ibc5, proof;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                proofHeight = this.ensureRevisionHeight(headerHeight);
                queryHeight = utils_2.subtractBlock(proofHeight, 1);
                _context13.next = 4;
                return this.query.ibc.proof.channel.channel(id.portId, id.channelId, queryHeight);

              case 4:
                _yield$this$query$ibc5 = _context13.sent;
                proof = _yield$this$query$ibc5.proof;
                return _context13.abrupt("return", {
                  id: id,
                  proofHeight: proofHeight,
                  proof: proof
                });

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getChannelProof(_x9, _x10) {
        return _getChannelProof.apply(this, arguments);
      }

      return getChannelProof;
    }()
  }, {
    key: "getPacketProof",
    value: function () {
      var _getPacketProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(packet, headerHeight) {
        var proofHeight, queryHeight, _yield$this$query$ibc6, proof;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                proofHeight = this.ensureRevisionHeight(headerHeight);
                queryHeight = utils_2.subtractBlock(proofHeight, 1);
                _context14.next = 4;
                return this.query.ibc.proof.channel.packetCommitment(packet.sourcePort, packet.sourceChannel, packet.sequence, queryHeight);

              case 4:
                _yield$this$query$ibc6 = _context14.sent;
                proof = _yield$this$query$ibc6.proof;
                return _context14.abrupt("return", proof);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getPacketProof(_x11, _x12) {
        return _getPacketProof.apply(this, arguments);
      }

      return getPacketProof;
    }()
  }, {
    key: "getAckProof",
    value: function () {
      var _getAckProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref, headerHeight) {
        var originalPacket, proofHeight, queryHeight, res, proof;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                originalPacket = _ref.originalPacket;
                proofHeight = this.ensureRevisionHeight(headerHeight);
                queryHeight = utils_2.subtractBlock(proofHeight, 1);
                _context15.next = 5;
                return this.query.ibc.proof.channel.packetAcknowledgement(originalPacket.destinationPort, originalPacket.destinationChannel, originalPacket.sequence.toNumber(), queryHeight);

              case 5:
                res = _context15.sent;
                proof = res.proof;
                return _context15.abrupt("return", proof);

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getAckProof(_x13, _x14) {
        return _getAckProof.apply(this, arguments);
      }

      return getAckProof;
    }()
  }, {
    key: "getTimeoutProof",
    value: function () {
      var _getTimeoutProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref2, headerHeight) {
        var originalPacket, proofHeight, queryHeight, proof;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                originalPacket = _ref2.originalPacket;
                proofHeight = this.ensureRevisionHeight(headerHeight);
                queryHeight = utils_2.subtractBlock(proofHeight, 1);
                _context16.next = 5;
                return this.query.ibc.proof.channel.receiptProof(originalPacket.destinationPort, originalPacket.destinationChannel, originalPacket.sequence.toNumber(), queryHeight);

              case 5:
                proof = _context16.sent;
                return _context16.abrupt("return", proof);

              case 7:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getTimeoutProof(_x15, _x16) {
        return _getTimeoutProof.apply(this, arguments);
      }

      return getTimeoutProof;
    }()
    /*
    These are helpers to query, build data and submit a message
    Currently all prefixed with doXxx, but please look for better naming
    */
    // Updates existing client on this chain with data from src chain.
    // Returns the height that was updated to.

  }, {
    key: "doUpdateClient",
    value: function () {
      var _doUpdateClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(clientId, src) {
        var _a, _b, _c, _d, _yield$this$query$ibc7, latestHeight, header, height;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.query.ibc.client.stateTm(clientId);

              case 2:
                _yield$this$query$ibc7 = _context17.sent;
                latestHeight = _yield$this$query$ibc7.latestHeight;
                _context17.next = 6;
                return src.buildHeader(utils_2.toIntHeight(latestHeight));

              case 6:
                header = _context17.sent;
                _context17.next = 9;
                return this.updateTendermintClient(clientId, header);

              case 9:
                height = (_d = (_c = (_b = (_a = header.signedHeader) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.height) === null || _c === void 0 ? void 0 : _c.toNumber()) !== null && _d !== void 0 ? _d : 0;
                return _context17.abrupt("return", src.revisionHeight(height));

              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function doUpdateClient(_x17, _x18) {
        return _doUpdateClient.apply(this, arguments);
      }

      return doUpdateClient;
    }()
    /***** These are all direct wrappers around message constructors ********/

  }, {
    key: "sendTokens",
    value: function () {
      var _sendTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(recipientAddress, transferAmount, memo) {
        var result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.logger.verbose("Send tokens to ".concat(recipientAddress));
                this.logger.debug('Send tokens:', {
                  senderAddress: this.senderAddress,
                  recipientAddress: recipientAddress,
                  transferAmount: transferAmount,
                  memo: memo
                });
                _context18.next = 4;
                return this.sign.sendTokens(this.senderAddress, recipientAddress, transferAmount, memo);

              case 4:
                result = _context18.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context18.next = 7;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 7:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context18.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 9:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function sendTokens(_x19, _x20, _x21) {
        return _sendTokens.apply(this, arguments);
      }

      return sendTokens;
    }()
    /* Send any number of messages, you are responsible for encoding them */

  }, {
    key: "sendMultiMsg",
    value: function () {
      var _sendMultiMsg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(msgs, fees) {
        var senderAddress, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.logger.verbose("Broadcast multiple msgs");
                this.logger.debug("Multiple msgs:", {
                  msgs: msgs,
                  fees: fees
                });
                senderAddress = this.senderAddress;
                _context19.next = 5;
                return this.sign.signAndBroadcast(senderAddress, msgs, fees);

              case 5:
                result = _context19.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context19.next = 8;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 8:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context19.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function sendMultiMsg(_x22, _x23) {
        return _sendMultiMsg.apply(this, arguments);
      }

      return sendMultiMsg;
    }()
  }, {
    key: "createTendermintClient",
    value: function () {
      var _createTendermintClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(clientState, consensusState) {
        var senderAddress, createMsg, result, parsedLogs, clientId;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this.logger.verbose("Create Tendermint client");
                senderAddress = this.senderAddress;
                createMsg = {
                  typeUrl: '/ibc.core.client.v1.MsgCreateClient',
                  value: tx_3.MsgCreateClient.fromPartial({
                    signer: senderAddress,
                    clientState: {
                      typeUrl: '/ibc.lightclients.tendermint.v1.ClientState',
                      value: tendermint_1.ClientState.encode(clientState).finish()
                    },
                    consensusState: {
                      typeUrl: '/ibc.lightclients.tendermint.v1.ConsensusState',
                      value: tendermint_1.ConsensusState.encode(consensusState).finish()
                    }
                  })
                };
                this.logger.debug('MsgCreateClient', createMsg);
                _context20.next = 6;
                return this.sign.signAndBroadcast(senderAddress, [createMsg], this.fees.initClient);

              case 6:
                result = _context20.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context20.next = 9;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 9:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                clientId = launchpad_1.logs.findAttribute(parsedLogs, 'create_client', 'client_id').value;
                return _context20.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height,
                  clientId: clientId
                });

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function createTendermintClient(_x24, _x25) {
        return _createTendermintClient.apply(this, arguments);
      }

      return createTendermintClient;
    }()
  }, {
    key: "updateTendermintClient",
    value: function () {
      var _updateTendermintClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(clientId, header) {
        var senderAddress, updateMsg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                this.logger.verbose("Update Tendermint client ".concat(clientId));
                senderAddress = this.senderAddress;
                updateMsg = {
                  typeUrl: '/ibc.core.client.v1.MsgUpdateClient',
                  value: tx_3.MsgUpdateClient.fromPartial({
                    signer: senderAddress,
                    clientId: clientId,
                    header: {
                      typeUrl: '/ibc.lightclients.tendermint.v1.Header',
                      value: tendermint_1.Header.encode(header).finish()
                    }
                  })
                };
                this.logger.debug("MsgUpdateClient", updateMsg);
                _context21.next = 6;
                return this.sign.signAndBroadcast(senderAddress, [updateMsg], this.fees.updateClient);

              case 6:
                result = _context21.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context21.next = 9;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 9:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context21.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 11:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function updateTendermintClient(_x26, _x27) {
        return _updateTendermintClient.apply(this, arguments);
      }

      return updateTendermintClient;
    }()
  }, {
    key: "connOpenInit",
    value: function () {
      var _connOpenInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(clientId, remoteClientId) {
        var senderAddress, msg, result, parsedLogs, connectionId;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this.logger.info("Connection open init: ".concat(clientId, " => ").concat(remoteClientId));
                senderAddress = this.senderAddress;
                msg = {
                  typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
                  value: tx_4.MsgConnectionOpenInit.fromPartial({
                    clientId: clientId,
                    counterparty: {
                      clientId: remoteClientId,
                      prefix: defaultMerklePrefix
                    },
                    version: defaultConnectionVersion,
                    delayPeriod: defaultDelayPeriod,
                    signer: senderAddress
                  })
                };
                this.logger.debug("MsgConnectionOpenInit", msg);
                _context22.next = 6;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.initConnection);

              case 6:
                result = _context22.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context22.next = 9;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 9:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                connectionId = launchpad_1.logs.findAttribute(parsedLogs, 'connection_open_init', 'connection_id').value;
                this.logger.debug("Connection open init successful: ".concat(connectionId));
                return _context22.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height,
                  connectionId: connectionId
                });

              case 13:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function connOpenInit(_x28, _x29) {
        return _connOpenInit.apply(this, arguments);
      }

      return connOpenInit;
    }()
  }, {
    key: "connOpenTry",
    value: function () {
      var _connOpenTry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(myClientId, proof) {
        var senderAddress, clientId, connectionId, clientState, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, msg, result, parsedLogs, myConnectionId;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.logger.info("Connection open try: ".concat(myClientId, " => ").concat(proof.clientId, " (").concat(proof.connectionId, ")"));
                senderAddress = this.senderAddress;
                clientId = proof.clientId, connectionId = proof.connectionId, clientState = proof.clientState, proofHeight = proof.proofHeight, proofInit = proof.proofConnection, proofClient = proof.proofClient, proofConsensus = proof.proofConsensus, consensusHeight = proof.consensusHeight;
                msg = {
                  typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
                  value: tx_4.MsgConnectionOpenTry.fromPartial({
                    clientId: myClientId,
                    counterparty: {
                      clientId: clientId,
                      connectionId: connectionId,
                      prefix: defaultMerklePrefix
                    },
                    delayPeriod: defaultDelayPeriod,
                    counterpartyVersions: [defaultConnectionVersion],
                    signer: senderAddress,
                    clientState: clientState,
                    proofHeight: proofHeight,
                    proofInit: proofInit,
                    proofClient: proofClient,
                    proofConsensus: proofConsensus,
                    consensusHeight: consensusHeight
                  })
                };
                this.logger.debug('MsgConnectionOpenTry', msg);
                _context23.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);

              case 7:
                result = _context23.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context23.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                myConnectionId = launchpad_1.logs.findAttribute(parsedLogs, 'connection_open_try', 'connection_id').value;
                this.logger.debug("Connection open try successful: ".concat(myConnectionId, " => ").concat(connectionId));
                return _context23.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height,
                  connectionId: myConnectionId
                });

              case 14:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function connOpenTry(_x30, _x31) {
        return _connOpenTry.apply(this, arguments);
      }

      return connOpenTry;
    }()
  }, {
    key: "connOpenAck",
    value: function () {
      var _connOpenAck = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(myConnectionId, proof) {
        var senderAddress, connectionId, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.logger.info("Connection open ack: ".concat(myConnectionId, " => ").concat(proof.connectionId));
                senderAddress = this.senderAddress;
                connectionId = proof.connectionId, clientState = proof.clientState, proofHeight = proof.proofHeight, proofTry = proof.proofConnection, proofClient = proof.proofClient, proofConsensus = proof.proofConsensus, consensusHeight = proof.consensusHeight;
                msg = {
                  typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
                  value: tx_4.MsgConnectionOpenAck.fromPartial({
                    connectionId: myConnectionId,
                    counterpartyConnectionId: connectionId,
                    version: defaultConnectionVersion,
                    signer: senderAddress,
                    clientState: clientState,
                    proofHeight: proofHeight,
                    proofTry: proofTry,
                    proofClient: proofClient,
                    proofConsensus: proofConsensus,
                    consensusHeight: consensusHeight
                  })
                };
                this.logger.debug('MsgConnectionOpenAck', msg);
                _context24.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);

              case 7:
                result = _context24.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context24.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context24.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 12:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function connOpenAck(_x32, _x33) {
        return _connOpenAck.apply(this, arguments);
      }

      return connOpenAck;
    }()
  }, {
    key: "connOpenConfirm",
    value: function () {
      var _connOpenConfirm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(myConnectionId, proof) {
        var senderAddress, proofHeight, proofAck, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this.logger.info("Connection open confirm: ".concat(myConnectionId));
                senderAddress = this.senderAddress;
                proofHeight = proof.proofHeight, proofAck = proof.proofConnection;
                msg = {
                  typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
                  value: tx_4.MsgConnectionOpenConfirm.fromPartial({
                    connectionId: myConnectionId,
                    signer: senderAddress,
                    proofHeight: proofHeight,
                    proofAck: proofAck
                  })
                };
                this.logger.debug('MsgConnectionOpenConfirm', msg);
                _context25.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);

              case 7:
                result = _context25.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context25.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context25.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 12:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function connOpenConfirm(_x34, _x35) {
        return _connOpenConfirm.apply(this, arguments);
      }

      return connOpenConfirm;
    }()
  }, {
    key: "channelOpenInit",
    value: function () {
      var _channelOpenInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(portId, remotePortId, ordering, connectionId, version) {
        var senderAddress, msg, result, parsedLogs, channelId;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.logger.verbose("Channel open init: ".concat(portId, " => ").concat(remotePortId, " (").concat(connectionId, ")"));
                senderAddress = this.senderAddress;
                msg = {
                  typeUrl: '/ibc.core.channel.v1.MsgChannelOpenInit',
                  value: tx_2.MsgChannelOpenInit.fromPartial({
                    portId: portId,
                    channel: {
                      state: channel_1.State.STATE_INIT,
                      ordering: ordering,
                      counterparty: {
                        portId: remotePortId
                      },
                      connectionHops: [connectionId],
                      version: version
                    },
                    signer: senderAddress
                  })
                };
                this.logger.debug('MsgChannelOpenInit', msg);
                _context26.next = 6;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.initChannel);

              case 6:
                result = _context26.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context26.next = 9;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 9:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                channelId = launchpad_1.logs.findAttribute(parsedLogs, 'channel_open_init', 'channel_id').value;
                this.logger.debug("Channel open init successful: ".concat(channelId));
                return _context26.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height,
                  channelId: channelId
                });

              case 13:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function channelOpenInit(_x36, _x37, _x38, _x39, _x40) {
        return _channelOpenInit.apply(this, arguments);
      }

      return channelOpenInit;
    }()
  }, {
    key: "channelOpenTry",
    value: function () {
      var _channelOpenTry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(portId, remote, ordering, connectionId, version, counterpartyVersion, proof) {
        var senderAddress, proofHeight, proofInit, msg, result, parsedLogs, channelId;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.logger.verbose("Channel open try: ".concat(portId, " => ").concat(remote.portId, " (").concat(remote.channelId, ")"));
                senderAddress = this.senderAddress;
                proofHeight = proof.proofHeight, proofInit = proof.proof;
                msg = {
                  typeUrl: '/ibc.core.channel.v1.MsgChannelOpenTry',
                  value: tx_2.MsgChannelOpenTry.fromPartial({
                    portId: portId,
                    counterpartyVersion: counterpartyVersion,
                    channel: {
                      state: channel_1.State.STATE_TRYOPEN,
                      ordering: ordering,
                      counterparty: remote,
                      connectionHops: [connectionId],
                      version: version
                    },
                    proofInit: proofInit,
                    proofHeight: proofHeight,
                    signer: senderAddress
                  })
                };
                this.logger.debug('MsgChannelOpenTry', msg);
                _context27.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);

              case 7:
                result = _context27.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context27.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                channelId = launchpad_1.logs.findAttribute(parsedLogs, 'channel_open_try', 'channel_id').value;
                this.logger.debug("Channel open try successful: ".concat(channelId, " => ").concat(remote.channelId, ")"));
                return _context27.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height,
                  channelId: channelId
                });

              case 14:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function channelOpenTry(_x41, _x42, _x43, _x44, _x45, _x46, _x47) {
        return _channelOpenTry.apply(this, arguments);
      }

      return channelOpenTry;
    }()
  }, {
    key: "channelOpenAck",
    value: function () {
      var _channelOpenAck = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(portId, channelId, counterpartyChannelId, counterpartyVersion, proof) {
        var senderAddress, proofHeight, proofTry, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                this.logger.verbose("Channel open ack for port ".concat(portId, ": ").concat(channelId, " => ").concat(counterpartyChannelId));
                senderAddress = this.senderAddress;
                proofHeight = proof.proofHeight, proofTry = proof.proof;
                msg = {
                  typeUrl: '/ibc.core.channel.v1.MsgChannelOpenAck',
                  value: tx_2.MsgChannelOpenAck.fromPartial({
                    portId: portId,
                    channelId: channelId,
                    counterpartyChannelId: counterpartyChannelId,
                    counterpartyVersion: counterpartyVersion,
                    proofTry: proofTry,
                    proofHeight: proofHeight,
                    signer: senderAddress
                  })
                };
                this.logger.debug('MsgChannelOpenAck', msg);
                _context28.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);

              case 7:
                result = _context28.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context28.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context28.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 12:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function channelOpenAck(_x48, _x49, _x50, _x51, _x52) {
        return _channelOpenAck.apply(this, arguments);
      }

      return channelOpenAck;
    }()
  }, {
    key: "channelOpenConfirm",
    value: function () {
      var _channelOpenConfirm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(portId, channelId, proof) {
        var senderAddress, proofHeight, proofAck, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this.logger.verbose("Chanel open confirm for port ".concat(portId, ": ").concat(channelId, " => ").concat(proof.id.channelId));
                senderAddress = this.senderAddress;
                proofHeight = proof.proofHeight, proofAck = proof.proof;
                msg = {
                  typeUrl: '/ibc.core.channel.v1.MsgChannelOpenConfirm',
                  value: tx_2.MsgChannelOpenConfirm.fromPartial({
                    portId: portId,
                    channelId: channelId,
                    proofAck: proofAck,
                    proofHeight: proofHeight,
                    signer: senderAddress
                  })
                };
                this.logger.debug('MsgChannelOpenConfirm', msg);
                _context29.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);

              case 7:
                result = _context29.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context29.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context29.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 12:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function channelOpenConfirm(_x53, _x54, _x55) {
        return _channelOpenConfirm.apply(this, arguments);
      }

      return channelOpenConfirm;
    }()
  }, {
    key: "receivePacket",
    value: function receivePacket(packet, proofCommitment, proofHeight) {
      return this.receivePackets([packet], [proofCommitment], proofHeight);
    }
  }, {
    key: "receivePackets",
    value: function () {
      var _receivePackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(packets, proofCommitments, proofHeight) {
        var senderAddress, msgs, i, packet, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                this.logger.verbose("Receive ".concat(packets.length, " packets.."));

                if (!(packets.length !== proofCommitments.length)) {
                  _context30.next = 3;
                  break;
                }

                throw new Error("Have ".concat(packets.length, " packets, but ").concat(proofCommitments.length, " proofs"));

              case 3:
                if (!(packets.length === 0)) {
                  _context30.next = 5;
                  break;
                }

                throw new Error('Must submit at least 1 packet');

              case 5:
                senderAddress = this.senderAddress;
                msgs = [];

                for (i in packets) {
                  packet = packets[i];
                  this.logger.verbose("Sending packet #".concat(packet.sequence.toNumber(), " from ").concat(this.chainId, ":").concat(packet.sourceChannel), utils_2.presentPacketData(packet.data));
                  msg = {
                    typeUrl: '/ibc.core.channel.v1.MsgRecvPacket',
                    value: tx_2.MsgRecvPacket.fromPartial({
                      packet: packet,
                      proofCommitment: proofCommitments[i],
                      proofHeight: proofHeight,
                      signer: senderAddress
                    })
                  };
                  msgs.push(msg);
                }

                this.logger.debug('MsgRecvPacket(s)', {
                  msgs: msgs
                });
                _context30.next = 11;
                return this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.receivePacket, msgs.length));

              case 11:
                result = _context30.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context30.next = 14;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 14:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context30.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 16:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function receivePackets(_x56, _x57, _x58) {
        return _receivePackets.apply(this, arguments);
      }

      return receivePackets;
    }()
  }, {
    key: "acknowledgePacket",
    value: function acknowledgePacket(ack, proofAcked, proofHeight) {
      return this.acknowledgePackets([ack], [proofAcked], proofHeight);
    }
  }, {
    key: "acknowledgePackets",
    value: function () {
      var _acknowledgePackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(acks, proofAckeds, proofHeight) {
        var senderAddress, msgs, i, packet, acknowledgement, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.logger.verbose("Acknowledge ".concat(acks.length, " packets..."));

                if (!(acks.length !== proofAckeds.length)) {
                  _context31.next = 3;
                  break;
                }

                throw new Error("Have ".concat(acks.length, " acks, but ").concat(proofAckeds.length, " proofs"));

              case 3:
                if (!(acks.length === 0)) {
                  _context31.next = 5;
                  break;
                }

                throw new Error('Must submit at least 1 ack');

              case 5:
                senderAddress = this.senderAddress;
                msgs = [];

                for (i in acks) {
                  packet = acks[i].originalPacket;
                  acknowledgement = acks[i].acknowledgement;
                  this.logger.verbose("Ack packet #".concat(packet.sequence.toNumber(), " from ").concat(this.chainId, ":").concat(packet.sourceChannel), {
                    packet: utils_2.presentPacketData(packet.data),
                    ack: utils_2.presentPacketData(acknowledgement)
                  });
                  msg = {
                    typeUrl: '/ibc.core.channel.v1.MsgAcknowledgement',
                    value: tx_2.MsgAcknowledgement.fromPartial({
                      packet: packet,
                      acknowledgement: acknowledgement,
                      proofAcked: proofAckeds[i],
                      proofHeight: proofHeight,
                      signer: senderAddress
                    })
                  };
                  msgs.push(msg);
                }

                this.logger.debug('MsgAcknowledgement(s)', {
                  msgs: msgs
                });
                _context31.next = 11;
                return this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.ackPacket, msgs.length));

              case 11:
                result = _context31.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context31.next = 14;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 14:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context31.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 16:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function acknowledgePackets(_x59, _x60, _x61) {
        return _acknowledgePackets.apply(this, arguments);
      }

      return acknowledgePackets;
    }()
  }, {
    key: "timeoutPacket",
    value: function timeoutPacket(packet, proofUnreceived, nextSequenceRecv, proofHeight) {
      return this.timeoutPackets([packet], [proofUnreceived], [nextSequenceRecv], proofHeight);
    }
  }, {
    key: "timeoutPackets",
    value: function () {
      var _timeoutPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(packets, proofsUnreceived, nextSequenceRecv, proofHeight) {
        var senderAddress, msgs, i, packet, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (!(packets.length !== proofsUnreceived.length)) {
                  _context32.next = 2;
                  break;
                }

                throw new Error('Packets and proofs must be same length');

              case 2:
                if (!(packets.length !== nextSequenceRecv.length)) {
                  _context32.next = 4;
                  break;
                }

                throw new Error('Packets and sequences must be same length');

              case 4:
                this.logger.verbose("Timeout ".concat(packets.length, " packets..."));
                senderAddress = this.senderAddress;
                msgs = [];

                for (i in packets) {
                  packet = packets[i];
                  this.logger.verbose("Timeout packet #".concat(packet.sequence.toNumber(), " from ").concat(this.chainId, ":").concat(packet.sourceChannel), utils_2.presentPacketData(packet.data));
                  msg = {
                    typeUrl: '/ibc.core.channel.v1.MsgTimeout',
                    value: tx_2.MsgTimeout.fromPartial({
                      packet: packet,
                      proofUnreceived: proofsUnreceived[i],
                      nextSequenceRecv: nextSequenceRecv[i],
                      proofHeight: proofHeight,
                      signer: senderAddress
                    })
                  };
                  msgs.push(msg);
                }

                this.logger.debug('MsgTimeout', {
                  msgs: msgs
                });
                _context32.next = 11;
                return this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.timeoutPacket, msgs.length));

              case 11:
                result = _context32.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context32.next = 14;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 14:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context32.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 16:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function timeoutPackets(_x62, _x63, _x64, _x65) {
        return _timeoutPackets.apply(this, arguments);
      }

      return timeoutPackets;
    }()
  }, {
    key: "transferTokens",
    value: function () {
      var _transferTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(sourcePort, sourceChannel, token, receiver, timeoutHeight, // timeout in seconds (we make nanoseconds below)
      timeoutTime) {
        var senderAddress, timeoutTimestamp, msg, result, parsedLogs;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.logger.verbose("Transfer tokens to ".concat(receiver));
                senderAddress = this.senderAddress;
                timeoutTimestamp = timeoutTime ? long_1["default"].fromNumber(timeoutTime * 1000000000) : undefined;
                msg = {
                  typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
                  value: tx_1.MsgTransfer.fromPartial({
                    sourcePort: sourcePort,
                    sourceChannel: sourceChannel,
                    sender: senderAddress,
                    token: token,
                    receiver: receiver,
                    timeoutHeight: timeoutHeight,
                    timeoutTimestamp: timeoutTimestamp
                  })
                };
                this.logger.debug('MsgTransfer', msg);
                _context33.next = 7;
                return this.sign.signAndBroadcast(senderAddress, [msg], this.fees.transfer);

              case 7:
                result = _context33.sent;

                if (!stargate_1.isBroadcastTxFailure(result)) {
                  _context33.next = 10;
                  break;
                }

                throw new Error(utils_2.createBroadcastTxErrorMessage(result));

              case 10:
                parsedLogs = stargate_1.parseRawLog(result.rawLog);
                return _context33.abrupt("return", {
                  logs: parsedLogs,
                  transactionHash: result.transactionHash,
                  height: result.height
                });

              case 12:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function transferTokens(_x66, _x67, _x68, _x69, _x70, _x71) {
        return _transferTokens.apply(this, arguments);
      }

      return transferTokens;
    }()
  }], [{
    key: "connectWithSigner",
    value: function () {
      var _connectWithSigner = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(endpoint, signer, senderAddress) {
        var options,
            mergedOptions,
            signingClient,
            tmClient,
            chainId,
            _args34 = arguments;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                options = _args34.length > 3 && _args34[3] !== undefined ? _args34[3] : {};
                // override any registry setup, use the other options
                mergedOptions = Object.assign(Object.assign({}, options), {
                  registry: ibcRegistry()
                });
                _context34.next = 4;
                return stargate_1.SigningStargateClient.connectWithSigner(endpoint, signer, mergedOptions);

              case 4:
                signingClient = _context34.sent;
                _context34.next = 7;
                return tendermint_rpc_1.Tendermint34Client.connect(endpoint);

              case 7:
                tmClient = _context34.sent;
                _context34.next = 10;
                return signingClient.getChainId();

              case 10:
                chainId = _context34.sent;
                return _context34.abrupt("return", new IbcClient(signingClient, tmClient, senderAddress, chainId, options));

              case 12:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }));

      function connectWithSigner(_x72, _x73, _x74) {
        return _connectWithSigner.apply(this, arguments);
      }

      return connectWithSigner;
    }()
  }]);

  return IbcClient;
}();

exports.IbcClient = IbcClient;

function buildCreateClientArgs(_x75, _x76, _x77) {
  return _buildCreateClientArgs.apply(this, arguments);
}

function _buildCreateClientArgs() {
  _buildCreateClientArgs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(src, unbondingPeriodSec, trustPeriodSec) {
    var header, consensusState, clientState;
    return regeneratorRuntime.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return src.latestHeader();

          case 2:
            header = _context35.sent;
            consensusState = utils_2.buildConsensusState(header);
            clientState = utils_2.buildClientState(src.chainId, unbondingPeriodSec, trustPeriodSec, src.revisionHeight(header.height));
            return _context35.abrupt("return", {
              consensusState: consensusState,
              clientState: clientState
            });

          case 6:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  }));
  return _buildCreateClientArgs.apply(this, arguments);
}

exports.buildCreateClientArgs = buildCreateClientArgs;

function prepareConnectionHandshake(_x78, _x79, _x80, _x81, _x82) {
  return _prepareConnectionHandshake.apply(this, arguments);
}

function _prepareConnectionHandshake() {
  _prepareConnectionHandshake = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(src, dest, clientIdSrc, clientIdDest, connIdSrc) {
    var headerHeight, proof;
    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return src.waitOneBlock();

          case 2:
            _context36.next = 4;
            return dest.doUpdateClient(clientIdDest, src);

          case 4:
            headerHeight = _context36.sent;
            _context36.next = 7;
            return src.getConnectionProof(clientIdSrc, connIdSrc, headerHeight);

          case 7:
            proof = _context36.sent;
            return _context36.abrupt("return", proof);

          case 9:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));
  return _prepareConnectionHandshake.apply(this, arguments);
}

exports.prepareConnectionHandshake = prepareConnectionHandshake;

function prepareChannelHandshake(_x83, _x84, _x85, _x86, _x87) {
  return _prepareChannelHandshake.apply(this, arguments);
}

function _prepareChannelHandshake() {
  _prepareChannelHandshake = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(src, dest, clientIdDest, portId, channelId) {
    var headerHeight, proof;
    return regeneratorRuntime.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.next = 2;
            return src.waitOneBlock();

          case 2:
            _context37.next = 4;
            return dest.doUpdateClient(clientIdDest, src);

          case 4:
            headerHeight = _context37.sent;
            _context37.next = 7;
            return src.getChannelProof({
              portId: portId,
              channelId: channelId
            }, headerHeight);

          case 7:
            proof = _context37.sent;
            return _context37.abrupt("return", proof);

          case 9:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));
  return _prepareChannelHandshake.apply(this, arguments);
}

exports.prepareChannelHandshake = prepareChannelHandshake;
//# sourceMappingURL=ibcclient.js.map