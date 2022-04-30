/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos_proto/coin";
import {
  MsgDepositWithinBatch,
  MsgWithdrawWithinBatch,
  MsgSwapWithinBatch,
} from "../../../tendermint/liquidity/v1beta1/tx";

export const protobufPackage = "tendermint.liquidity.v1beta1";

/** Structure for the pool type to distinguish the characteristics of the reserve pools. */
export interface PoolType {
  /**
   * This is the id of the pool_type that is used as pool_type_id for pool creation.
   * In this version, only pool-type-id 1 is supported.
   * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
   */
  id: number;
  /** name of the pool type. */
  name: string;
  /** minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins are supported. */
  min_reserve_coin_num: number;
  /** maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins are supported. */
  max_reserve_coin_num: number;
  /** description of the pool type. */
  description: string;
}

/** Params defines the parameters for the liquidity module. */
export interface Params {
  /** list of available pool types */
  pool_types: PoolType[];
  /** Minimum number of coins to be deposited to the liquidity pool on pool creation. */
  min_init_deposit_amount: string;
  /** Initial mint amount of pool coins upon pool creation. */
  init_pool_coin_mint_amount: string;
  /** Limit the size of each liquidity pool to minimize risk. In development, set to 0 for no limit. In production, set a limit. */
  max_reserve_coin_amount: string;
  /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
  pool_creation_fee: Coin[];
  /** Swap fee rate for every executed swap. */
  swap_fee_rate: string;
  /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
  withdraw_fee_rate: string;
  /** Maximum ratio of reserve coins that can be ordered at a swap order. */
  max_order_amount_ratio: string;
  /** The smallest unit batch height for every liquidity pool. */
  unit_batch_height: number;
  /** Circuit breaker enables or disables transaction messages in liquidity module. */
  circuit_breaker_enabled: boolean;
}

/** Pool defines the liquidity pool that contains pool information. */
export interface Pool {
  /** id of the pool */
  id: number;
  /** id of the pool_type */
  type_id: number;
  /** denoms of reserve coin pair of the pool */
  reserve_coin_denoms: string[];
  /** reserve account address of the pool */
  reserve_account_address: string;
  /** denom of pool coin of the pool */
  pool_coin_denom: string;
}

/** Metadata for the state of each pool for invariant checking after genesis export or import. */
export interface PoolMetadata {
  /** id of the pool */
  pool_id: number;
  /** pool coin issued at the pool */
  pool_coin_total_supply: Coin | undefined;
  /** reserve coins deposited in the pool */
  reserve_coins: Coin[];
}

/**
 * PoolBatch defines the batch or batches of a given liquidity pool that contains indexes of deposit, withdraw, and swap messages.
 * Index param increments by 1 if the pool id is same.
 */
export interface PoolBatch {
  /** id of the pool */
  pool_id: number;
  /** index of this batch */
  index: number;
  /** height where this batch is started */
  begin_height: number;
  /** last index of DepositMsgStates */
  deposit_msg_index: number;
  /** last index of WithdrawMsgStates */
  withdraw_msg_index: number;
  /** last index of SwapMsgStates */
  swap_msg_index: number;
  /** true if executed, false if not executed */
  executed: boolean;
}

/** DepositMsgState defines the state of deposit message that contains state information as it is processed in the next batch or batches. */
export interface DepositMsgState {
  /** height where this message is appended to the batch */
  msg_height: number;
  /** index of this deposit message in this liquidity pool */
  msg_index: number;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /** MsgDepositWithinBatch */
  msg: MsgDepositWithinBatch | undefined;
}

/** WithdrawMsgState defines the state of the withdraw message that contains state information as the message is processed in the next batch or batches. */
export interface WithdrawMsgState {
  /** height where this message is appended to the batch */
  msg_height: number;
  /** index of this withdraw message in this liquidity pool */
  msg_index: number;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /** MsgWithdrawWithinBatch */
  msg: MsgWithdrawWithinBatch | undefined;
}

/** SwapMsgState defines the state of the swap message that contains state information as the message is processed in the next batch or batches. */
export interface SwapMsgState {
  /** height where this message is appended to the batch */
  msg_height: number;
  /** index of this swap message in this liquidity pool */
  msg_index: number;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  to_be_deleted: boolean;
  /** swap orders are cancelled when current height is equal to or higher than ExpiryHeight */
  order_expiry_height: number;
  /** offer coin exchanged until now */
  exchanged_offer_coin: Coin | undefined;
  /** offer coin currently remaining to be exchanged */
  remaining_offer_coin: Coin | undefined;
  /** reserve fee for pays fee in half offer coin */
  reserved_offer_coin_fee: Coin | undefined;
  /** MsgSwapWithinBatch */
  msg: MsgSwapWithinBatch | undefined;
}

const basePoolType: object = {
  id: 0,
  name: "",
  min_reserve_coin_num: 0,
  max_reserve_coin_num: 0,
  description: "",
};

export const PoolType = {
  encode(message: PoolType, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.min_reserve_coin_num !== 0) {
      writer.uint32(24).uint32(message.min_reserve_coin_num);
    }
    if (message.max_reserve_coin_num !== 0) {
      writer.uint32(32).uint32(message.max_reserve_coin_num);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolType } as PoolType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.min_reserve_coin_num = reader.uint32();
          break;
        case 4:
          message.max_reserve_coin_num = reader.uint32();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolType {
    const message = { ...basePoolType } as PoolType;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.min_reserve_coin_num !== undefined &&
      object.min_reserve_coin_num !== null
    ) {
      message.min_reserve_coin_num = Number(object.min_reserve_coin_num);
    } else {
      message.min_reserve_coin_num = 0;
    }
    if (
      object.max_reserve_coin_num !== undefined &&
      object.max_reserve_coin_num !== null
    ) {
      message.max_reserve_coin_num = Number(object.max_reserve_coin_num);
    } else {
      message.max_reserve_coin_num = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: PoolType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.min_reserve_coin_num !== undefined &&
      (obj.min_reserve_coin_num = message.min_reserve_coin_num);
    message.max_reserve_coin_num !== undefined &&
      (obj.max_reserve_coin_num = message.max_reserve_coin_num);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolType>): PoolType {
    const message = { ...basePoolType } as PoolType;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.min_reserve_coin_num !== undefined &&
      object.min_reserve_coin_num !== null
    ) {
      message.min_reserve_coin_num = object.min_reserve_coin_num;
    } else {
      message.min_reserve_coin_num = 0;
    }
    if (
      object.max_reserve_coin_num !== undefined &&
      object.max_reserve_coin_num !== null
    ) {
      message.max_reserve_coin_num = object.max_reserve_coin_num;
    } else {
      message.max_reserve_coin_num = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseParams: object = {
  min_init_deposit_amount: "",
  init_pool_coin_mint_amount: "",
  max_reserve_coin_amount: "",
  swap_fee_rate: "",
  withdraw_fee_rate: "",
  max_order_amount_ratio: "",
  unit_batch_height: 0,
  circuit_breaker_enabled: false,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    for (const v of message.pool_types) {
      PoolType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_init_deposit_amount !== "") {
      writer.uint32(18).string(message.min_init_deposit_amount);
    }
    if (message.init_pool_coin_mint_amount !== "") {
      writer.uint32(26).string(message.init_pool_coin_mint_amount);
    }
    if (message.max_reserve_coin_amount !== "") {
      writer.uint32(34).string(message.max_reserve_coin_amount);
    }
    for (const v of message.pool_creation_fee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.swap_fee_rate !== "") {
      writer.uint32(50).string(message.swap_fee_rate);
    }
    if (message.withdraw_fee_rate !== "") {
      writer.uint32(58).string(message.withdraw_fee_rate);
    }
    if (message.max_order_amount_ratio !== "") {
      writer.uint32(66).string(message.max_order_amount_ratio);
    }
    if (message.unit_batch_height !== 0) {
      writer.uint32(72).uint32(message.unit_batch_height);
    }
    if (message.circuit_breaker_enabled === true) {
      writer.uint32(80).bool(message.circuit_breaker_enabled);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.pool_types = [];
    message.pool_creation_fee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_types.push(PoolType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.min_init_deposit_amount = reader.string();
          break;
        case 3:
          message.init_pool_coin_mint_amount = reader.string();
          break;
        case 4:
          message.max_reserve_coin_amount = reader.string();
          break;
        case 5:
          message.pool_creation_fee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swap_fee_rate = reader.string();
          break;
        case 7:
          message.withdraw_fee_rate = reader.string();
          break;
        case 8:
          message.max_order_amount_ratio = reader.string();
          break;
        case 9:
          message.unit_batch_height = reader.uint32();
          break;
        case 10:
          message.circuit_breaker_enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.pool_types = [];
    message.pool_creation_fee = [];
    if (object.pool_types !== undefined && object.pool_types !== null) {
      for (const e of object.pool_types) {
        message.pool_types.push(PoolType.fromJSON(e));
      }
    }
    if (
      object.min_init_deposit_amount !== undefined &&
      object.min_init_deposit_amount !== null
    ) {
      message.min_init_deposit_amount = String(object.min_init_deposit_amount);
    } else {
      message.min_init_deposit_amount = "";
    }
    if (
      object.init_pool_coin_mint_amount !== undefined &&
      object.init_pool_coin_mint_amount !== null
    ) {
      message.init_pool_coin_mint_amount = String(
        object.init_pool_coin_mint_amount
      );
    } else {
      message.init_pool_coin_mint_amount = "";
    }
    if (
      object.max_reserve_coin_amount !== undefined &&
      object.max_reserve_coin_amount !== null
    ) {
      message.max_reserve_coin_amount = String(object.max_reserve_coin_amount);
    } else {
      message.max_reserve_coin_amount = "";
    }
    if (
      object.pool_creation_fee !== undefined &&
      object.pool_creation_fee !== null
    ) {
      for (const e of object.pool_creation_fee) {
        message.pool_creation_fee.push(Coin.fromJSON(e));
      }
    }
    if (object.swap_fee_rate !== undefined && object.swap_fee_rate !== null) {
      message.swap_fee_rate = String(object.swap_fee_rate);
    } else {
      message.swap_fee_rate = "";
    }
    if (
      object.withdraw_fee_rate !== undefined &&
      object.withdraw_fee_rate !== null
    ) {
      message.withdraw_fee_rate = String(object.withdraw_fee_rate);
    } else {
      message.withdraw_fee_rate = "";
    }
    if (
      object.max_order_amount_ratio !== undefined &&
      object.max_order_amount_ratio !== null
    ) {
      message.max_order_amount_ratio = String(object.max_order_amount_ratio);
    } else {
      message.max_order_amount_ratio = "";
    }
    if (
      object.unit_batch_height !== undefined &&
      object.unit_batch_height !== null
    ) {
      message.unit_batch_height = Number(object.unit_batch_height);
    } else {
      message.unit_batch_height = 0;
    }
    if (
      object.circuit_breaker_enabled !== undefined &&
      object.circuit_breaker_enabled !== null
    ) {
      message.circuit_breaker_enabled = Boolean(object.circuit_breaker_enabled);
    } else {
      message.circuit_breaker_enabled = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.pool_types) {
      obj.pool_types = message.pool_types.map((e) =>
        e ? PoolType.toJSON(e) : undefined
      );
    } else {
      obj.pool_types = [];
    }
    message.min_init_deposit_amount !== undefined &&
      (obj.min_init_deposit_amount = message.min_init_deposit_amount);
    message.init_pool_coin_mint_amount !== undefined &&
      (obj.init_pool_coin_mint_amount = message.init_pool_coin_mint_amount);
    message.max_reserve_coin_amount !== undefined &&
      (obj.max_reserve_coin_amount = message.max_reserve_coin_amount);
    if (message.pool_creation_fee) {
      obj.pool_creation_fee = message.pool_creation_fee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.pool_creation_fee = [];
    }
    message.swap_fee_rate !== undefined &&
      (obj.swap_fee_rate = message.swap_fee_rate);
    message.withdraw_fee_rate !== undefined &&
      (obj.withdraw_fee_rate = message.withdraw_fee_rate);
    message.max_order_amount_ratio !== undefined &&
      (obj.max_order_amount_ratio = message.max_order_amount_ratio);
    message.unit_batch_height !== undefined &&
      (obj.unit_batch_height = message.unit_batch_height);
    message.circuit_breaker_enabled !== undefined &&
      (obj.circuit_breaker_enabled = message.circuit_breaker_enabled);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.pool_types = [];
    message.pool_creation_fee = [];
    if (object.pool_types !== undefined && object.pool_types !== null) {
      for (const e of object.pool_types) {
        message.pool_types.push(PoolType.fromPartial(e));
      }
    }
    if (
      object.min_init_deposit_amount !== undefined &&
      object.min_init_deposit_amount !== null
    ) {
      message.min_init_deposit_amount = object.min_init_deposit_amount;
    } else {
      message.min_init_deposit_amount = "";
    }
    if (
      object.init_pool_coin_mint_amount !== undefined &&
      object.init_pool_coin_mint_amount !== null
    ) {
      message.init_pool_coin_mint_amount = object.init_pool_coin_mint_amount;
    } else {
      message.init_pool_coin_mint_amount = "";
    }
    if (
      object.max_reserve_coin_amount !== undefined &&
      object.max_reserve_coin_amount !== null
    ) {
      message.max_reserve_coin_amount = object.max_reserve_coin_amount;
    } else {
      message.max_reserve_coin_amount = "";
    }
    if (
      object.pool_creation_fee !== undefined &&
      object.pool_creation_fee !== null
    ) {
      for (const e of object.pool_creation_fee) {
        message.pool_creation_fee.push(Coin.fromPartial(e));
      }
    }
    if (object.swap_fee_rate !== undefined && object.swap_fee_rate !== null) {
      message.swap_fee_rate = object.swap_fee_rate;
    } else {
      message.swap_fee_rate = "";
    }
    if (
      object.withdraw_fee_rate !== undefined &&
      object.withdraw_fee_rate !== null
    ) {
      message.withdraw_fee_rate = object.withdraw_fee_rate;
    } else {
      message.withdraw_fee_rate = "";
    }
    if (
      object.max_order_amount_ratio !== undefined &&
      object.max_order_amount_ratio !== null
    ) {
      message.max_order_amount_ratio = object.max_order_amount_ratio;
    } else {
      message.max_order_amount_ratio = "";
    }
    if (
      object.unit_batch_height !== undefined &&
      object.unit_batch_height !== null
    ) {
      message.unit_batch_height = object.unit_batch_height;
    } else {
      message.unit_batch_height = 0;
    }
    if (
      object.circuit_breaker_enabled !== undefined &&
      object.circuit_breaker_enabled !== null
    ) {
      message.circuit_breaker_enabled = object.circuit_breaker_enabled;
    } else {
      message.circuit_breaker_enabled = false;
    }
    return message;
  },
};

const basePool: object = {
  id: 0,
  type_id: 0,
  reserve_coin_denoms: "",
  reserve_account_address: "",
  pool_coin_denom: "",
};

export const Pool = {
  encode(message: Pool, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type_id !== 0) {
      writer.uint32(16).uint32(message.type_id);
    }
    for (const v of message.reserve_coin_denoms) {
      writer.uint32(26).string(v!);
    }
    if (message.reserve_account_address !== "") {
      writer.uint32(34).string(message.reserve_account_address);
    }
    if (message.pool_coin_denom !== "") {
      writer.uint32(42).string(message.pool_coin_denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    message.reserve_coin_denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.type_id = reader.uint32();
          break;
        case 3:
          message.reserve_coin_denoms.push(reader.string());
          break;
        case 4:
          message.reserve_account_address = reader.string();
          break;
        case 5:
          message.pool_coin_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    message.reserve_coin_denoms = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.type_id !== undefined && object.type_id !== null) {
      message.type_id = Number(object.type_id);
    } else {
      message.type_id = 0;
    }
    if (
      object.reserve_coin_denoms !== undefined &&
      object.reserve_coin_denoms !== null
    ) {
      for (const e of object.reserve_coin_denoms) {
        message.reserve_coin_denoms.push(String(e));
      }
    }
    if (
      object.reserve_account_address !== undefined &&
      object.reserve_account_address !== null
    ) {
      message.reserve_account_address = String(object.reserve_account_address);
    } else {
      message.reserve_account_address = "";
    }
    if (
      object.pool_coin_denom !== undefined &&
      object.pool_coin_denom !== null
    ) {
      message.pool_coin_denom = String(object.pool_coin_denom);
    } else {
      message.pool_coin_denom = "";
    }
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type_id !== undefined && (obj.type_id = message.type_id);
    if (message.reserve_coin_denoms) {
      obj.reserve_coin_denoms = message.reserve_coin_denoms.map((e) => e);
    } else {
      obj.reserve_coin_denoms = [];
    }
    message.reserve_account_address !== undefined &&
      (obj.reserve_account_address = message.reserve_account_address);
    message.pool_coin_denom !== undefined &&
      (obj.pool_coin_denom = message.pool_coin_denom);
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    message.reserve_coin_denoms = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.type_id !== undefined && object.type_id !== null) {
      message.type_id = object.type_id;
    } else {
      message.type_id = 0;
    }
    if (
      object.reserve_coin_denoms !== undefined &&
      object.reserve_coin_denoms !== null
    ) {
      for (const e of object.reserve_coin_denoms) {
        message.reserve_coin_denoms.push(e);
      }
    }
    if (
      object.reserve_account_address !== undefined &&
      object.reserve_account_address !== null
    ) {
      message.reserve_account_address = object.reserve_account_address;
    } else {
      message.reserve_account_address = "";
    }
    if (
      object.pool_coin_denom !== undefined &&
      object.pool_coin_denom !== null
    ) {
      message.pool_coin_denom = object.pool_coin_denom;
    } else {
      message.pool_coin_denom = "";
    }
    return message;
  },
};

const basePoolMetadata: object = { pool_id: 0 };

export const PoolMetadata = {
  encode(message: PoolMetadata, writer: Writer = Writer.create()): Writer {
    if (message.pool_id !== 0) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.pool_coin_total_supply !== undefined) {
      Coin.encode(
        message.pool_coin_total_supply,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.reserve_coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolMetadata } as PoolMetadata;
    message.reserve_coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pool_coin_total_supply = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reserve_coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolMetadata {
    const message = { ...basePoolMetadata } as PoolMetadata;
    message.reserve_coins = [];
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = Number(object.pool_id);
    } else {
      message.pool_id = 0;
    }
    if (
      object.pool_coin_total_supply !== undefined &&
      object.pool_coin_total_supply !== null
    ) {
      message.pool_coin_total_supply = Coin.fromJSON(
        object.pool_coin_total_supply
      );
    } else {
      message.pool_coin_total_supply = undefined;
    }
    if (object.reserve_coins !== undefined && object.reserve_coins !== null) {
      for (const e of object.reserve_coins) {
        message.reserve_coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PoolMetadata): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.pool_coin_total_supply !== undefined &&
      (obj.pool_coin_total_supply = message.pool_coin_total_supply
        ? Coin.toJSON(message.pool_coin_total_supply)
        : undefined);
    if (message.reserve_coins) {
      obj.reserve_coins = message.reserve_coins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.reserve_coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PoolMetadata>): PoolMetadata {
    const message = { ...basePoolMetadata } as PoolMetadata;
    message.reserve_coins = [];
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = object.pool_id;
    } else {
      message.pool_id = 0;
    }
    if (
      object.pool_coin_total_supply !== undefined &&
      object.pool_coin_total_supply !== null
    ) {
      message.pool_coin_total_supply = Coin.fromPartial(
        object.pool_coin_total_supply
      );
    } else {
      message.pool_coin_total_supply = undefined;
    }
    if (object.reserve_coins !== undefined && object.reserve_coins !== null) {
      for (const e of object.reserve_coins) {
        message.reserve_coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const basePoolBatch: object = {
  pool_id: 0,
  index: 0,
  begin_height: 0,
  deposit_msg_index: 0,
  withdraw_msg_index: 0,
  swap_msg_index: 0,
  executed: false,
};

export const PoolBatch = {
  encode(message: PoolBatch, writer: Writer = Writer.create()): Writer {
    if (message.pool_id !== 0) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.begin_height !== 0) {
      writer.uint32(24).int64(message.begin_height);
    }
    if (message.deposit_msg_index !== 0) {
      writer.uint32(32).uint64(message.deposit_msg_index);
    }
    if (message.withdraw_msg_index !== 0) {
      writer.uint32(40).uint64(message.withdraw_msg_index);
    }
    if (message.swap_msg_index !== 0) {
      writer.uint32(48).uint64(message.swap_msg_index);
    }
    if (message.executed === true) {
      writer.uint32(56).bool(message.executed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolBatch } as PoolBatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.begin_height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.deposit_msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.withdraw_msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.swap_msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolBatch {
    const message = { ...basePoolBatch } as PoolBatch;
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = Number(object.pool_id);
    } else {
      message.pool_id = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    if (object.begin_height !== undefined && object.begin_height !== null) {
      message.begin_height = Number(object.begin_height);
    } else {
      message.begin_height = 0;
    }
    if (
      object.deposit_msg_index !== undefined &&
      object.deposit_msg_index !== null
    ) {
      message.deposit_msg_index = Number(object.deposit_msg_index);
    } else {
      message.deposit_msg_index = 0;
    }
    if (
      object.withdraw_msg_index !== undefined &&
      object.withdraw_msg_index !== null
    ) {
      message.withdraw_msg_index = Number(object.withdraw_msg_index);
    } else {
      message.withdraw_msg_index = 0;
    }
    if (object.swap_msg_index !== undefined && object.swap_msg_index !== null) {
      message.swap_msg_index = Number(object.swap_msg_index);
    } else {
      message.swap_msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    return message;
  },

  toJSON(message: PoolBatch): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.index !== undefined && (obj.index = message.index);
    message.begin_height !== undefined &&
      (obj.begin_height = message.begin_height);
    message.deposit_msg_index !== undefined &&
      (obj.deposit_msg_index = message.deposit_msg_index);
    message.withdraw_msg_index !== undefined &&
      (obj.withdraw_msg_index = message.withdraw_msg_index);
    message.swap_msg_index !== undefined &&
      (obj.swap_msg_index = message.swap_msg_index);
    message.executed !== undefined && (obj.executed = message.executed);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolBatch>): PoolBatch {
    const message = { ...basePoolBatch } as PoolBatch;
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.pool_id = object.pool_id;
    } else {
      message.pool_id = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    if (object.begin_height !== undefined && object.begin_height !== null) {
      message.begin_height = object.begin_height;
    } else {
      message.begin_height = 0;
    }
    if (
      object.deposit_msg_index !== undefined &&
      object.deposit_msg_index !== null
    ) {
      message.deposit_msg_index = object.deposit_msg_index;
    } else {
      message.deposit_msg_index = 0;
    }
    if (
      object.withdraw_msg_index !== undefined &&
      object.withdraw_msg_index !== null
    ) {
      message.withdraw_msg_index = object.withdraw_msg_index;
    } else {
      message.withdraw_msg_index = 0;
    }
    if (object.swap_msg_index !== undefined && object.swap_msg_index !== null) {
      message.swap_msg_index = object.swap_msg_index;
    } else {
      message.swap_msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    return message;
  },
};

const baseDepositMsgState: object = {
  msg_height: 0,
  msg_index: 0,
  executed: false,
  succeeded: false,
  to_be_deleted: false,
};

export const DepositMsgState = {
  encode(message: DepositMsgState, writer: Writer = Writer.create()): Writer {
    if (message.msg_height !== 0) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== 0) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.msg !== undefined) {
      MsgDepositWithinBatch.encode(
        message.msg,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DepositMsgState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositMsgState } as DepositMsgState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.msg = MsgDepositWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositMsgState {
    const message = { ...baseDepositMsgState } as DepositMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = Number(object.msg_height);
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = Number(object.msg_index);
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = Boolean(object.to_be_deleted);
    } else {
      message.to_be_deleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDepositWithinBatch.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: DepositMsgState): unknown {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = message.msg_height);
    message.msg_index !== undefined && (obj.msg_index = message.msg_index);
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined &&
      (obj.to_be_deleted = message.to_be_deleted);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? MsgDepositWithinBatch.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositMsgState>): DepositMsgState {
    const message = { ...baseDepositMsgState } as DepositMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = object.msg_height;
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = object.msg_index;
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    } else {
      message.to_be_deleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDepositWithinBatch.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const baseWithdrawMsgState: object = {
  msg_height: 0,
  msg_index: 0,
  executed: false,
  succeeded: false,
  to_be_deleted: false,
};

export const WithdrawMsgState = {
  encode(message: WithdrawMsgState, writer: Writer = Writer.create()): Writer {
    if (message.msg_height !== 0) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== 0) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.msg !== undefined) {
      MsgWithdrawWithinBatch.encode(
        message.msg,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WithdrawMsgState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawMsgState } as WithdrawMsgState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.msg = MsgWithdrawWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawMsgState {
    const message = { ...baseWithdrawMsgState } as WithdrawMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = Number(object.msg_height);
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = Number(object.msg_index);
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = Boolean(object.to_be_deleted);
    } else {
      message.to_be_deleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawWithinBatch.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: WithdrawMsgState): unknown {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = message.msg_height);
    message.msg_index !== undefined && (obj.msg_index = message.msg_index);
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined &&
      (obj.to_be_deleted = message.to_be_deleted);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? MsgWithdrawWithinBatch.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawMsgState>): WithdrawMsgState {
    const message = { ...baseWithdrawMsgState } as WithdrawMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = object.msg_height;
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = object.msg_index;
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    } else {
      message.to_be_deleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawWithinBatch.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const baseSwapMsgState: object = {
  msg_height: 0,
  msg_index: 0,
  executed: false,
  succeeded: false,
  to_be_deleted: false,
  order_expiry_height: 0,
};

export const SwapMsgState = {
  encode(message: SwapMsgState, writer: Writer = Writer.create()): Writer {
    if (message.msg_height !== 0) {
      writer.uint32(8).int64(message.msg_height);
    }
    if (message.msg_index !== 0) {
      writer.uint32(16).uint64(message.msg_index);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.to_be_deleted === true) {
      writer.uint32(40).bool(message.to_be_deleted);
    }
    if (message.order_expiry_height !== 0) {
      writer.uint32(48).int64(message.order_expiry_height);
    }
    if (message.exchanged_offer_coin !== undefined) {
      Coin.encode(
        message.exchanged_offer_coin,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.remaining_offer_coin !== undefined) {
      Coin.encode(
        message.remaining_offer_coin,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.reserved_offer_coin_fee !== undefined) {
      Coin.encode(
        message.reserved_offer_coin_fee,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.msg !== undefined) {
      MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SwapMsgState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapMsgState } as SwapMsgState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.msg_index = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.to_be_deleted = reader.bool();
          break;
        case 6:
          message.order_expiry_height = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.exchanged_offer_coin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.remaining_offer_coin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.reserved_offer_coin_fee = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.msg = MsgSwapWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapMsgState {
    const message = { ...baseSwapMsgState } as SwapMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = Number(object.msg_height);
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = Number(object.msg_index);
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = Boolean(object.to_be_deleted);
    } else {
      message.to_be_deleted = false;
    }
    if (
      object.order_expiry_height !== undefined &&
      object.order_expiry_height !== null
    ) {
      message.order_expiry_height = Number(object.order_expiry_height);
    } else {
      message.order_expiry_height = 0;
    }
    if (
      object.exchanged_offer_coin !== undefined &&
      object.exchanged_offer_coin !== null
    ) {
      message.exchanged_offer_coin = Coin.fromJSON(object.exchanged_offer_coin);
    } else {
      message.exchanged_offer_coin = undefined;
    }
    if (
      object.remaining_offer_coin !== undefined &&
      object.remaining_offer_coin !== null
    ) {
      message.remaining_offer_coin = Coin.fromJSON(object.remaining_offer_coin);
    } else {
      message.remaining_offer_coin = undefined;
    }
    if (
      object.reserved_offer_coin_fee !== undefined &&
      object.reserved_offer_coin_fee !== null
    ) {
      message.reserved_offer_coin_fee = Coin.fromJSON(
        object.reserved_offer_coin_fee
      );
    } else {
      message.reserved_offer_coin_fee = undefined;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgSwapWithinBatch.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: SwapMsgState): unknown {
    const obj: any = {};
    message.msg_height !== undefined && (obj.msg_height = message.msg_height);
    message.msg_index !== undefined && (obj.msg_index = message.msg_index);
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.to_be_deleted !== undefined &&
      (obj.to_be_deleted = message.to_be_deleted);
    message.order_expiry_height !== undefined &&
      (obj.order_expiry_height = message.order_expiry_height);
    message.exchanged_offer_coin !== undefined &&
      (obj.exchanged_offer_coin = message.exchanged_offer_coin
        ? Coin.toJSON(message.exchanged_offer_coin)
        : undefined);
    message.remaining_offer_coin !== undefined &&
      (obj.remaining_offer_coin = message.remaining_offer_coin
        ? Coin.toJSON(message.remaining_offer_coin)
        : undefined);
    message.reserved_offer_coin_fee !== undefined &&
      (obj.reserved_offer_coin_fee = message.reserved_offer_coin_fee
        ? Coin.toJSON(message.reserved_offer_coin_fee)
        : undefined);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? MsgSwapWithinBatch.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SwapMsgState>): SwapMsgState {
    const message = { ...baseSwapMsgState } as SwapMsgState;
    if (object.msg_height !== undefined && object.msg_height !== null) {
      message.msg_height = object.msg_height;
    } else {
      message.msg_height = 0;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = object.msg_index;
    } else {
      message.msg_index = 0;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
      message.to_be_deleted = object.to_be_deleted;
    } else {
      message.to_be_deleted = false;
    }
    if (
      object.order_expiry_height !== undefined &&
      object.order_expiry_height !== null
    ) {
      message.order_expiry_height = object.order_expiry_height;
    } else {
      message.order_expiry_height = 0;
    }
    if (
      object.exchanged_offer_coin !== undefined &&
      object.exchanged_offer_coin !== null
    ) {
      message.exchanged_offer_coin = Coin.fromPartial(
        object.exchanged_offer_coin
      );
    } else {
      message.exchanged_offer_coin = undefined;
    }
    if (
      object.remaining_offer_coin !== undefined &&
      object.remaining_offer_coin !== null
    ) {
      message.remaining_offer_coin = Coin.fromPartial(
        object.remaining_offer_coin
      );
    } else {
      message.remaining_offer_coin = undefined;
    }
    if (
      object.reserved_offer_coin_fee !== undefined &&
      object.reserved_offer_coin_fee !== null
    ) {
      message.reserved_offer_coin_fee = Coin.fromPartial(
        object.reserved_offer_coin_fee
      );
    } else {
      message.reserved_offer_coin_fee = undefined;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgSwapWithinBatch.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
