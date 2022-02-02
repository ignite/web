"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const distribution_1 = require("../../../cosmos/distribution/v1beta1/distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
const baseDelegatorWithdrawInfo = {
    delegatorAddress: "",
    withdrawAddress: "",
};
exports.DelegatorWithdrawInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelegatorWithdrawInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDelegatorWithdrawInfo };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.withdrawAddress !== undefined &&
            object.withdrawAddress !== null) {
            message.withdrawAddress = String(object.withdrawAddress);
        }
        else {
            message.withdrawAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined &&
            (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDelegatorWithdrawInfo };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.withdrawAddress !== undefined &&
            object.withdrawAddress !== null) {
            message.withdrawAddress = object.withdrawAddress;
        }
        else {
            message.withdrawAddress = "";
        }
        return message;
    },
};
const baseValidatorOutstandingRewardsRecord = { validatorAddress: "" };
exports.ValidatorOutstandingRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidatorOutstandingRewardsRecord,
        };
        message.outstandingRewards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            ...baseValidatorOutstandingRewardsRecord,
        };
        message.outstandingRewards = [];
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.outstandingRewards !== undefined &&
            object.outstandingRewards !== null) {
            for (const e of object.outstandingRewards) {
                message.outstandingRewards.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseValidatorOutstandingRewardsRecord,
        };
        message.outstandingRewards = [];
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.outstandingRewards !== undefined &&
            object.outstandingRewards !== null) {
            for (const e of object.outstandingRewards) {
                message.outstandingRewards.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseValidatorAccumulatedCommissionRecord = {
    validatorAddress: "",
};
exports.ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidatorAccumulatedCommissionRecord,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            ...baseValidatorAccumulatedCommissionRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated);
        }
        else {
            message.accumulated = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated
                ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseValidatorAccumulatedCommissionRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated);
        }
        else {
            message.accumulated = undefined;
        }
        return message;
    },
};
const baseValidatorHistoricalRewardsRecord = {
    validatorAddress: "",
    period: 0,
};
exports.ValidatorHistoricalRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidatorHistoricalRewardsRecord,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            ...baseValidatorHistoricalRewardsRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Number(object.period);
        }
        else {
            message.period = 0;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined && (obj.period = message.period);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseValidatorHistoricalRewardsRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = 0;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseValidatorCurrentRewardsRecord = { validatorAddress: "" };
exports.ValidatorCurrentRewardsRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidatorCurrentRewardsRecord,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            ...baseValidatorCurrentRewardsRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseValidatorCurrentRewardsRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards);
        }
        else {
            message.rewards = undefined;
        }
        return message;
    },
};
const baseDelegatorStartingInfoRecord = {
    delegatorAddress: "",
    validatorAddress: "",
};
exports.DelegatorStartingInfoRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDelegatorStartingInfoRecord,
        };
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
                    message.startingInfo = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            ...baseDelegatorStartingInfoRecord,
        };
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
        if (object.startingInfo !== undefined && object.startingInfo !== null) {
            message.startingInfo = distribution_1.DelegatorStartingInfo.fromJSON(object.startingInfo);
        }
        else {
            message.startingInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined &&
            (obj.startingInfo = message.startingInfo
                ? distribution_1.DelegatorStartingInfo.toJSON(message.startingInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDelegatorStartingInfoRecord,
        };
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
        if (object.startingInfo !== undefined && object.startingInfo !== null) {
            message.startingInfo = distribution_1.DelegatorStartingInfo.fromPartial(object.startingInfo);
        }
        else {
            message.startingInfo = undefined;
        }
        return message;
    },
};
const baseValidatorSlashEventRecord = {
    validatorAddress: "",
    height: 0,
    period: 0,
};
exports.ValidatorSlashEventRecord = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== 0) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseValidatorSlashEventRecord,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.period = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            ...baseValidatorSlashEventRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Number(object.period);
        }
        else {
            message.period = 0;
        }
        if (object.validatorSlashEvent !== undefined &&
            object.validatorSlashEvent !== null) {
            message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.fromJSON(object.validatorSlashEvent);
        }
        else {
            message.validatorSlashEvent = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined && (obj.height = message.height);
        message.period !== undefined && (obj.period = message.period);
        message.validatorSlashEvent !== undefined &&
            (obj.validatorSlashEvent = message.validatorSlashEvent
                ? distribution_1.ValidatorSlashEvent.toJSON(message.validatorSlashEvent)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseValidatorSlashEventRecord,
        };
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        else {
            message.period = 0;
        }
        if (object.validatorSlashEvent !== undefined &&
            object.validatorSlashEvent !== null) {
            message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent);
        }
        else {
            message.validatorSlashEvent = undefined;
        }
        return message;
    },
};
const baseGenesisState = { previousProposer: "" };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            distribution_1.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.delegatorWithdrawInfos = [];
        message.outstandingRewards = [];
        message.validatorAccumulatedCommissions = [];
        message.validatorHistoricalRewards = [];
        message.validatorCurrentRewards = [];
        message.delegatorStartingInfos = [];
        message.validatorSlashEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feePool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.delegatorWithdrawInfos = [];
        message.outstandingRewards = [];
        message.validatorAccumulatedCommissions = [];
        message.validatorHistoricalRewards = [];
        message.validatorCurrentRewards = [];
        message.delegatorStartingInfos = [];
        message.validatorSlashEvents = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.feePool !== undefined && object.feePool !== null) {
            message.feePool = distribution_1.FeePool.fromJSON(object.feePool);
        }
        else {
            message.feePool = undefined;
        }
        if (object.delegatorWithdrawInfos !== undefined &&
            object.delegatorWithdrawInfos !== null) {
            for (const e of object.delegatorWithdrawInfos) {
                message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.fromJSON(e));
            }
        }
        if (object.previousProposer !== undefined &&
            object.previousProposer !== null) {
            message.previousProposer = String(object.previousProposer);
        }
        else {
            message.previousProposer = "";
        }
        if (object.outstandingRewards !== undefined &&
            object.outstandingRewards !== null) {
            for (const e of object.outstandingRewards) {
                message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.fromJSON(e));
            }
        }
        if (object.validatorAccumulatedCommissions !== undefined &&
            object.validatorAccumulatedCommissions !== null) {
            for (const e of object.validatorAccumulatedCommissions) {
                message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.fromJSON(e));
            }
        }
        if (object.validatorHistoricalRewards !== undefined &&
            object.validatorHistoricalRewards !== null) {
            for (const e of object.validatorHistoricalRewards) {
                message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.fromJSON(e));
            }
        }
        if (object.validatorCurrentRewards !== undefined &&
            object.validatorCurrentRewards !== null) {
            for (const e of object.validatorCurrentRewards) {
                message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.fromJSON(e));
            }
        }
        if (object.delegatorStartingInfos !== undefined &&
            object.delegatorStartingInfos !== null) {
            for (const e of object.delegatorStartingInfos) {
                message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.fromJSON(e));
            }
        }
        if (object.validatorSlashEvents !== undefined &&
            object.validatorSlashEvents !== null) {
            for (const e of object.validatorSlashEvents) {
                message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.feePool !== undefined &&
            (obj.feePool = message.feePool
                ? distribution_1.FeePool.toJSON(message.feePool)
                : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map((e) => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined &&
            (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map((e) => (e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined));
        }
        else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map((e) => (e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined));
        }
        else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map((e) => e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map((e) => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.delegatorWithdrawInfos = [];
        message.outstandingRewards = [];
        message.validatorAccumulatedCommissions = [];
        message.validatorHistoricalRewards = [];
        message.validatorCurrentRewards = [];
        message.delegatorStartingInfos = [];
        message.validatorSlashEvents = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.feePool !== undefined && object.feePool !== null) {
            message.feePool = distribution_1.FeePool.fromPartial(object.feePool);
        }
        else {
            message.feePool = undefined;
        }
        if (object.delegatorWithdrawInfos !== undefined &&
            object.delegatorWithdrawInfos !== null) {
            for (const e of object.delegatorWithdrawInfos) {
                message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.fromPartial(e));
            }
        }
        if (object.previousProposer !== undefined &&
            object.previousProposer !== null) {
            message.previousProposer = object.previousProposer;
        }
        else {
            message.previousProposer = "";
        }
        if (object.outstandingRewards !== undefined &&
            object.outstandingRewards !== null) {
            for (const e of object.outstandingRewards) {
                message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.fromPartial(e));
            }
        }
        if (object.validatorAccumulatedCommissions !== undefined &&
            object.validatorAccumulatedCommissions !== null) {
            for (const e of object.validatorAccumulatedCommissions) {
                message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.fromPartial(e));
            }
        }
        if (object.validatorHistoricalRewards !== undefined &&
            object.validatorHistoricalRewards !== null) {
            for (const e of object.validatorHistoricalRewards) {
                message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.fromPartial(e));
            }
        }
        if (object.validatorCurrentRewards !== undefined &&
            object.validatorCurrentRewards !== null) {
            for (const e of object.validatorCurrentRewards) {
                message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.fromPartial(e));
            }
        }
        if (object.delegatorStartingInfos !== undefined &&
            object.delegatorStartingInfos !== null) {
            for (const e of object.delegatorStartingInfos) {
                message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.fromPartial(e));
            }
        }
        if (object.validatorSlashEvents !== undefined &&
            object.validatorSlashEvents !== null) {
            for (const e of object.validatorSlashEvents) {
                message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.fromPartial(e));
            }
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
