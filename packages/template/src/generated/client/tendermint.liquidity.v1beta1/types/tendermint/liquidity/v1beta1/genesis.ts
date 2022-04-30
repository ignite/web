/* eslint-disable */
import {
  Pool,
  PoolMetadata,
  PoolBatch,
  DepositMsgState,
  WithdrawMsgState,
  SwapMsgState,
  Params,
} from "../../../tendermint/liquidity/v1beta1/liquidity";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.liquidity.v1beta1";

/** records the state of each pool after genesis export or import, used to check variables */
export interface PoolRecord {
  pool: Pool | undefined;
  pool_metadata: PoolMetadata | undefined;
  pool_batch: PoolBatch | undefined;
  deposit_msg_states: DepositMsgState[];
  withdraw_msg_states: WithdrawMsgState[];
  swap_msg_states: SwapMsgState[];
}

/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the liquidity module. */
  params: Params | undefined;
  pool_records: PoolRecord[];
}

const basePoolRecord: object = {};

export const PoolRecord = {
  encode(message: PoolRecord, writer: Writer = Writer.create()): Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_metadata !== undefined) {
      PoolMetadata.encode(
        message.pool_metadata,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.pool_batch !== undefined) {
      PoolBatch.encode(message.pool_batch, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposit_msg_states) {
      DepositMsgState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.withdraw_msg_states) {
      WithdrawMsgState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swap_msg_states) {
      SwapMsgState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolRecord } as PoolRecord;
    message.deposit_msg_states = [];
    message.withdraw_msg_states = [];
    message.swap_msg_states = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.pool_metadata = PoolMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.pool_batch = PoolBatch.decode(reader, reader.uint32());
          break;
        case 4:
          message.deposit_msg_states.push(
            DepositMsgState.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.withdraw_msg_states.push(
            WithdrawMsgState.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.swap_msg_states.push(
            SwapMsgState.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolRecord {
    const message = { ...basePoolRecord } as PoolRecord;
    message.deposit_msg_states = [];
    message.withdraw_msg_states = [];
    message.swap_msg_states = [];
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromJSON(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.pool_metadata !== undefined && object.pool_metadata !== null) {
      message.pool_metadata = PoolMetadata.fromJSON(object.pool_metadata);
    } else {
      message.pool_metadata = undefined;
    }
    if (object.pool_batch !== undefined && object.pool_batch !== null) {
      message.pool_batch = PoolBatch.fromJSON(object.pool_batch);
    } else {
      message.pool_batch = undefined;
    }
    if (
      object.deposit_msg_states !== undefined &&
      object.deposit_msg_states !== null
    ) {
      for (const e of object.deposit_msg_states) {
        message.deposit_msg_states.push(DepositMsgState.fromJSON(e));
      }
    }
    if (
      object.withdraw_msg_states !== undefined &&
      object.withdraw_msg_states !== null
    ) {
      for (const e of object.withdraw_msg_states) {
        message.withdraw_msg_states.push(WithdrawMsgState.fromJSON(e));
      }
    }
    if (
      object.swap_msg_states !== undefined &&
      object.swap_msg_states !== null
    ) {
      for (const e of object.swap_msg_states) {
        message.swap_msg_states.push(SwapMsgState.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PoolRecord): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.pool_metadata !== undefined &&
      (obj.pool_metadata = message.pool_metadata
        ? PoolMetadata.toJSON(message.pool_metadata)
        : undefined);
    message.pool_batch !== undefined &&
      (obj.pool_batch = message.pool_batch
        ? PoolBatch.toJSON(message.pool_batch)
        : undefined);
    if (message.deposit_msg_states) {
      obj.deposit_msg_states = message.deposit_msg_states.map((e) =>
        e ? DepositMsgState.toJSON(e) : undefined
      );
    } else {
      obj.deposit_msg_states = [];
    }
    if (message.withdraw_msg_states) {
      obj.withdraw_msg_states = message.withdraw_msg_states.map((e) =>
        e ? WithdrawMsgState.toJSON(e) : undefined
      );
    } else {
      obj.withdraw_msg_states = [];
    }
    if (message.swap_msg_states) {
      obj.swap_msg_states = message.swap_msg_states.map((e) =>
        e ? SwapMsgState.toJSON(e) : undefined
      );
    } else {
      obj.swap_msg_states = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PoolRecord>): PoolRecord {
    const message = { ...basePoolRecord } as PoolRecord;
    message.deposit_msg_states = [];
    message.withdraw_msg_states = [];
    message.swap_msg_states = [];
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.pool_metadata !== undefined && object.pool_metadata !== null) {
      message.pool_metadata = PoolMetadata.fromPartial(object.pool_metadata);
    } else {
      message.pool_metadata = undefined;
    }
    if (object.pool_batch !== undefined && object.pool_batch !== null) {
      message.pool_batch = PoolBatch.fromPartial(object.pool_batch);
    } else {
      message.pool_batch = undefined;
    }
    if (
      object.deposit_msg_states !== undefined &&
      object.deposit_msg_states !== null
    ) {
      for (const e of object.deposit_msg_states) {
        message.deposit_msg_states.push(DepositMsgState.fromPartial(e));
      }
    }
    if (
      object.withdraw_msg_states !== undefined &&
      object.withdraw_msg_states !== null
    ) {
      for (const e of object.withdraw_msg_states) {
        message.withdraw_msg_states.push(WithdrawMsgState.fromPartial(e));
      }
    }
    if (
      object.swap_msg_states !== undefined &&
      object.swap_msg_states !== null
    ) {
      for (const e of object.swap_msg_states) {
        message.swap_msg_states.push(SwapMsgState.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pool_records) {
      PoolRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.pool_records = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.pool_records.push(PoolRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pool_records = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.pool_records !== undefined && object.pool_records !== null) {
      for (const e of object.pool_records) {
        message.pool_records.push(PoolRecord.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pool_records) {
      obj.pool_records = message.pool_records.map((e) =>
        e ? PoolRecord.toJSON(e) : undefined
      );
    } else {
      obj.pool_records = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pool_records = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.pool_records !== undefined && object.pool_records !== null) {
      for (const e of object.pool_records) {
        message.pool_records.push(PoolRecord.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
