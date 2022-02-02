"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const types_1 = require("../../../tendermint/types/types");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus = exports.BondStatus || (exports.BondStatus = {}));
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        default:
            return "UNKNOWN";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
const baseHistoricalInfo = {};
exports.HistoricalInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoricalInfo };
        message.valset = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHistoricalInfo };
        message.valset = [];
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.valset !== undefined && object.valset !== null) {
            for (const e of object.valset) {
                message.valset.push(exports.Validator.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHistoricalInfo };
        message.valset = [];
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.valset !== undefined && object.valset !== null) {
            for (const e of object.valset) {
                message.valset.push(exports.Validator.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCommissionRates = {
    rate: "",
    maxRate: "",
    maxChangeRate: "",
};
exports.CommissionRates = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommissionRates };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.maxRate = reader.string();
                    break;
                case 3:
                    message.maxChangeRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCommissionRates };
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = String(object.rate);
        }
        else {
            message.rate = "";
        }
        if (object.maxRate !== undefined && object.maxRate !== null) {
            message.maxRate = String(object.maxRate);
        }
        else {
            message.maxRate = "";
        }
        if (object.maxChangeRate !== undefined && object.maxChangeRate !== null) {
            message.maxChangeRate = String(object.maxChangeRate);
        }
        else {
            message.maxChangeRate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.maxRate !== undefined && (obj.maxRate = message.maxRate);
        message.maxChangeRate !== undefined &&
            (obj.maxChangeRate = message.maxChangeRate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCommissionRates };
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        else {
            message.rate = "";
        }
        if (object.maxRate !== undefined && object.maxRate !== null) {
            message.maxRate = object.maxRate;
        }
        else {
            message.maxRate = "";
        }
        if (object.maxChangeRate !== undefined && object.maxChangeRate !== null) {
            message.maxChangeRate = object.maxChangeRate;
        }
        else {
            message.maxChangeRate = "";
        }
        return message;
    },
};
const baseCommission = {};
exports.Commission = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.commissionRates !== undefined) {
            exports.CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommission };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCommission };
        if (object.commissionRates !== undefined &&
            object.commissionRates !== null) {
            message.commissionRates = exports.CommissionRates.fromJSON(object.commissionRates);
        }
        else {
            message.commissionRates = undefined;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = fromJsonTimestamp(object.updateTime);
        }
        else {
            message.updateTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.commissionRates !== undefined &&
            (obj.commissionRates = message.commissionRates
                ? exports.CommissionRates.toJSON(message.commissionRates)
                : undefined);
        message.updateTime !== undefined &&
            (obj.updateTime =
                message.updateTime !== undefined
                    ? message.updateTime.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCommission };
        if (object.commissionRates !== undefined &&
            object.commissionRates !== null) {
            message.commissionRates = exports.CommissionRates.fromPartial(object.commissionRates);
        }
        else {
            message.commissionRates = undefined;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = object.updateTime;
        }
        else {
            message.updateTime = undefined;
        }
        return message;
    },
};
const baseDescription = {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
};
exports.Description = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescription };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDescription };
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = String(object.website);
        }
        else {
            message.website = "";
        }
        if (object.securityContact !== undefined &&
            object.securityContact !== null) {
            message.securityContact = String(object.securityContact);
        }
        else {
            message.securityContact = "";
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = String(object.details);
        }
        else {
            message.details = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.securityContact !== undefined &&
            (obj.securityContact = message.securityContact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDescription };
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        else {
            message.website = "";
        }
        if (object.securityContact !== undefined &&
            object.securityContact !== null) {
            message.securityContact = object.securityContact;
        }
        else {
            message.securityContact = "";
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        else {
            message.details = "";
        }
        return message;
    },
};
const baseValidator = {
    operatorAddress: "",
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    unbondingHeight: 0,
    minSelfDelegation: "",
};
exports.Validator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== 0) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = longToNumber(reader.int64());
                    break;
                case 9:
                    message.unbondingTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = String(object.operatorAddress);
        }
        else {
            message.operatorAddress = "";
        }
        if (object.consensusPubkey !== undefined &&
            object.consensusPubkey !== null) {
            message.consensusPubkey = any_1.Any.fromJSON(object.consensusPubkey);
        }
        else {
            message.consensusPubkey = undefined;
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = Boolean(object.jailed);
        }
        else {
            message.jailed = false;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = bondStatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = String(object.tokens);
        }
        else {
            message.tokens = "";
        }
        if (object.delegatorShares !== undefined &&
            object.delegatorShares !== null) {
            message.delegatorShares = String(object.delegatorShares);
        }
        else {
            message.delegatorShares = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = exports.Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.unbondingHeight !== undefined &&
            object.unbondingHeight !== null) {
            message.unbondingHeight = Number(object.unbondingHeight);
        }
        else {
            message.unbondingHeight = 0;
        }
        if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
            message.unbondingTime = fromJsonTimestamp(object.unbondingTime);
        }
        else {
            message.unbondingTime = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = exports.Commission.fromJSON(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = String(object.minSelfDelegation);
        }
        else {
            message.minSelfDelegation = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined &&
            (obj.operatorAddress = message.operatorAddress);
        message.consensusPubkey !== undefined &&
            (obj.consensusPubkey = message.consensusPubkey
                ? any_1.Any.toJSON(message.consensusPubkey)
                : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined &&
            (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined &&
            (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined &&
            (obj.description = message.description
                ? exports.Description.toJSON(message.description)
                : undefined);
        message.unbondingHeight !== undefined &&
            (obj.unbondingHeight = message.unbondingHeight);
        message.unbondingTime !== undefined &&
            (obj.unbondingTime =
                message.unbondingTime !== undefined
                    ? message.unbondingTime.toISOString()
                    : null);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? exports.Commission.toJSON(message.commission)
                : undefined);
        message.minSelfDelegation !== undefined &&
            (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = object.operatorAddress;
        }
        else {
            message.operatorAddress = "";
        }
        if (object.consensusPubkey !== undefined &&
            object.consensusPubkey !== null) {
            message.consensusPubkey = any_1.Any.fromPartial(object.consensusPubkey);
        }
        else {
            message.consensusPubkey = undefined;
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        else {
            message.jailed = false;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = object.tokens;
        }
        else {
            message.tokens = "";
        }
        if (object.delegatorShares !== undefined &&
            object.delegatorShares !== null) {
            message.delegatorShares = object.delegatorShares;
        }
        else {
            message.delegatorShares = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = exports.Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.unbondingHeight !== undefined &&
            object.unbondingHeight !== null) {
            message.unbondingHeight = object.unbondingHeight;
        }
        else {
            message.unbondingHeight = 0;
        }
        if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
            message.unbondingTime = object.unbondingTime;
        }
        else {
            message.unbondingTime = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = exports.Commission.fromPartial(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = object.minSelfDelegation;
        }
        else {
            message.minSelfDelegation = "";
        }
        return message;
    },
};
const baseValAddresses = { addresses: "" };
exports.ValAddresses = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValAddresses };
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValAddresses };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValAddresses };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(e);
            }
        }
        return message;
    },
};
const baseDVPair = { delegatorAddress: "", validatorAddress: "" };
exports.DVPair = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDVPair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDVPair };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDVPair };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
};
const baseDVPairs = {};
exports.DVPairs = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDVPairs };
        message.pairs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDVPairs };
        message.pairs = [];
        if (object.pairs !== undefined && object.pairs !== null) {
            for (const e of object.pairs) {
                message.pairs.push(exports.DVPair.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => (e ? exports.DVPair.toJSON(e) : undefined));
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDVPairs };
        message.pairs = [];
        if (object.pairs !== undefined && object.pairs !== null) {
            for (const e of object.pairs) {
                message.pairs.push(exports.DVPair.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDVVTriplet = {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
};
exports.DVVTriplet = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDVVTriplet };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDVVTriplet };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = String(object.validatorSrcAddress);
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = String(object.validatorDstAddress);
        }
        else {
            message.validatorDstAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined &&
            (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined &&
            (obj.validatorDstAddress = message.validatorDstAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDVVTriplet };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = object.validatorSrcAddress;
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = object.validatorDstAddress;
        }
        else {
            message.validatorDstAddress = "";
        }
        return message;
    },
};
const baseDVVTriplets = {};
exports.DVVTriplets = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDVVTriplets };
        message.triplets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDVVTriplets };
        message.triplets = [];
        if (object.triplets !== undefined && object.triplets !== null) {
            for (const e of object.triplets) {
                message.triplets.push(exports.DVVTriplet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map((e) => e ? exports.DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDVVTriplets };
        message.triplets = [];
        if (object.triplets !== undefined && object.triplets !== null) {
            for (const e of object.triplets) {
                message.triplets.push(exports.DVVTriplet.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDelegation = {
    delegatorAddress: "",
    validatorAddress: "",
    shares: "",
};
exports.Delegation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelegation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDelegation };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = String(object.shares);
        }
        else {
            message.shares = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDelegation };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = object.shares;
        }
        else {
            message.shares = "";
        }
        return message;
    },
};
const baseUnbondingDelegation = {
    delegatorAddress: "",
    validatorAddress: "",
};
exports.UnbondingDelegation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnbondingDelegation };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUnbondingDelegation };
        message.entries = [];
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.UnbondingDelegationEntry.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.UnbondingDelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUnbondingDelegation };
        message.entries = [];
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.UnbondingDelegationEntry.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUnbondingDelegationEntry = {
    creationHeight: 0,
    initialBalance: "",
    balance: "",
};
exports.UnbondingDelegationEntry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUnbondingDelegationEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUnbondingDelegationEntry,
        };
        if (object.creationHeight !== undefined && object.creationHeight !== null) {
            message.creationHeight = Number(object.creationHeight);
        }
        else {
            message.creationHeight = 0;
        }
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = fromJsonTimestamp(object.completionTime);
        }
        else {
            message.completionTime = undefined;
        }
        if (object.initialBalance !== undefined && object.initialBalance !== null) {
            message.initialBalance = String(object.initialBalance);
        }
        else {
            message.initialBalance = "";
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creationHeight !== undefined &&
            (obj.creationHeight = message.creationHeight);
        message.completionTime !== undefined &&
            (obj.completionTime =
                message.completionTime !== undefined
                    ? message.completionTime.toISOString()
                    : null);
        message.initialBalance !== undefined &&
            (obj.initialBalance = message.initialBalance);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUnbondingDelegationEntry,
        };
        if (object.creationHeight !== undefined && object.creationHeight !== null) {
            message.creationHeight = object.creationHeight;
        }
        else {
            message.creationHeight = 0;
        }
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = object.completionTime;
        }
        else {
            message.completionTime = undefined;
        }
        if (object.initialBalance !== undefined && object.initialBalance !== null) {
            message.initialBalance = object.initialBalance;
        }
        else {
            message.initialBalance = "";
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = "";
        }
        return message;
    },
};
const baseRedelegationEntry = {
    creationHeight: 0,
    initialBalance: "",
    sharesDst: "",
};
exports.RedelegationEntry = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(message.sharesDst);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedelegationEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = longToNumber(reader.int64());
                    break;
                case 2:
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedelegationEntry };
        if (object.creationHeight !== undefined && object.creationHeight !== null) {
            message.creationHeight = Number(object.creationHeight);
        }
        else {
            message.creationHeight = 0;
        }
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = fromJsonTimestamp(object.completionTime);
        }
        else {
            message.completionTime = undefined;
        }
        if (object.initialBalance !== undefined && object.initialBalance !== null) {
            message.initialBalance = String(object.initialBalance);
        }
        else {
            message.initialBalance = "";
        }
        if (object.sharesDst !== undefined && object.sharesDst !== null) {
            message.sharesDst = String(object.sharesDst);
        }
        else {
            message.sharesDst = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creationHeight !== undefined &&
            (obj.creationHeight = message.creationHeight);
        message.completionTime !== undefined &&
            (obj.completionTime =
                message.completionTime !== undefined
                    ? message.completionTime.toISOString()
                    : null);
        message.initialBalance !== undefined &&
            (obj.initialBalance = message.initialBalance);
        message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedelegationEntry };
        if (object.creationHeight !== undefined && object.creationHeight !== null) {
            message.creationHeight = object.creationHeight;
        }
        else {
            message.creationHeight = 0;
        }
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = object.completionTime;
        }
        else {
            message.completionTime = undefined;
        }
        if (object.initialBalance !== undefined && object.initialBalance !== null) {
            message.initialBalance = object.initialBalance;
        }
        else {
            message.initialBalance = "";
        }
        if (object.sharesDst !== undefined && object.sharesDst !== null) {
            message.sharesDst = object.sharesDst;
        }
        else {
            message.sharesDst = "";
        }
        return message;
    },
};
const baseRedelegation = {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
};
exports.Redelegation = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedelegation };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedelegation };
        message.entries = [];
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = String(object.validatorSrcAddress);
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = String(object.validatorDstAddress);
        }
        else {
            message.validatorDstAddress = "";
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.RedelegationEntry.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined &&
            (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined &&
            (obj.validatorDstAddress = message.validatorDstAddress);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.RedelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedelegation };
        message.entries = [];
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = object.validatorSrcAddress;
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = object.validatorDstAddress;
        }
        else {
            message.validatorDstAddress = "";
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.RedelegationEntry.fromPartial(e));
            }
        }
        return message;
    },
};
const baseParams = {
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
};
exports.Params = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.unbondingTime !== undefined) {
            duration_1.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
            message.unbondingTime = duration_1.Duration.fromJSON(object.unbondingTime);
        }
        else {
            message.unbondingTime = undefined;
        }
        if (object.maxValidators !== undefined && object.maxValidators !== null) {
            message.maxValidators = Number(object.maxValidators);
        }
        else {
            message.maxValidators = 0;
        }
        if (object.maxEntries !== undefined && object.maxEntries !== null) {
            message.maxEntries = Number(object.maxEntries);
        }
        else {
            message.maxEntries = 0;
        }
        if (object.historicalEntries !== undefined &&
            object.historicalEntries !== null) {
            message.historicalEntries = Number(object.historicalEntries);
        }
        else {
            message.historicalEntries = 0;
        }
        if (object.bondDenom !== undefined && object.bondDenom !== null) {
            message.bondDenom = String(object.bondDenom);
        }
        else {
            message.bondDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unbondingTime !== undefined &&
            (obj.unbondingTime = message.unbondingTime
                ? duration_1.Duration.toJSON(message.unbondingTime)
                : undefined);
        message.maxValidators !== undefined &&
            (obj.maxValidators = message.maxValidators);
        message.maxEntries !== undefined && (obj.maxEntries = message.maxEntries);
        message.historicalEntries !== undefined &&
            (obj.historicalEntries = message.historicalEntries);
        message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
            message.unbondingTime = duration_1.Duration.fromPartial(object.unbondingTime);
        }
        else {
            message.unbondingTime = undefined;
        }
        if (object.maxValidators !== undefined && object.maxValidators !== null) {
            message.maxValidators = object.maxValidators;
        }
        else {
            message.maxValidators = 0;
        }
        if (object.maxEntries !== undefined && object.maxEntries !== null) {
            message.maxEntries = object.maxEntries;
        }
        else {
            message.maxEntries = 0;
        }
        if (object.historicalEntries !== undefined &&
            object.historicalEntries !== null) {
            message.historicalEntries = object.historicalEntries;
        }
        else {
            message.historicalEntries = 0;
        }
        if (object.bondDenom !== undefined && object.bondDenom !== null) {
            message.bondDenom = object.bondDenom;
        }
        else {
            message.bondDenom = "";
        }
        return message;
    },
};
const baseDelegationResponse = {};
exports.DelegationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelegationResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDelegationResponse };
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = exports.Delegation.fromJSON(object.delegation);
        }
        else {
            message.delegation = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromJSON(object.balance);
        }
        else {
            message.balance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? exports.Delegation.toJSON(message.delegation)
                : undefined);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDelegationResponse };
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = exports.Delegation.fromPartial(object.delegation);
        }
        else {
            message.delegation = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromPartial(object.balance);
        }
        else {
            message.balance = undefined;
        }
        return message;
    },
};
const baseRedelegationEntryResponse = { balance: "" };
exports.RedelegationEntryResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.redelegationEntry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRedelegationEntryResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseRedelegationEntryResponse,
        };
        if (object.redelegationEntry !== undefined &&
            object.redelegationEntry !== null) {
            message.redelegationEntry = exports.RedelegationEntry.fromJSON(object.redelegationEntry);
        }
        else {
            message.redelegationEntry = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.redelegationEntry !== undefined &&
            (obj.redelegationEntry = message.redelegationEntry
                ? exports.RedelegationEntry.toJSON(message.redelegationEntry)
                : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRedelegationEntryResponse,
        };
        if (object.redelegationEntry !== undefined &&
            object.redelegationEntry !== null) {
            message.redelegationEntry = exports.RedelegationEntry.fromPartial(object.redelegationEntry);
        }
        else {
            message.redelegationEntry = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = "";
        }
        return message;
    },
};
const baseRedelegationResponse = {};
exports.RedelegationResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedelegationResponse };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedelegationResponse };
        message.entries = [];
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = exports.Redelegation.fromJSON(object.redelegation);
        }
        else {
            message.redelegation = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.RedelegationEntryResponse.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined &&
            (obj.redelegation = message.redelegation
                ? exports.Redelegation.toJSON(message.redelegation)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedelegationResponse };
        message.entries = [];
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = exports.Redelegation.fromPartial(object.redelegation);
        }
        else {
            message.redelegation = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.RedelegationEntryResponse.fromPartial(e));
            }
        }
        return message;
    },
};
const basePool = { notBondedTokens: "", bondedTokens: "" };
exports.Pool = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePool };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePool };
        if (object.notBondedTokens !== undefined &&
            object.notBondedTokens !== null) {
            message.notBondedTokens = String(object.notBondedTokens);
        }
        else {
            message.notBondedTokens = "";
        }
        if (object.bondedTokens !== undefined && object.bondedTokens !== null) {
            message.bondedTokens = String(object.bondedTokens);
        }
        else {
            message.bondedTokens = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.notBondedTokens !== undefined &&
            (obj.notBondedTokens = message.notBondedTokens);
        message.bondedTokens !== undefined &&
            (obj.bondedTokens = message.bondedTokens);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePool };
        if (object.notBondedTokens !== undefined &&
            object.notBondedTokens !== null) {
            message.notBondedTokens = object.notBondedTokens;
        }
        else {
            message.notBondedTokens = "";
        }
        if (object.bondedTokens !== undefined && object.bondedTokens !== null) {
            message.bondedTokens = object.bondedTokens;
        }
        else {
            message.bondedTokens = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    minimal_1.configure();
}
