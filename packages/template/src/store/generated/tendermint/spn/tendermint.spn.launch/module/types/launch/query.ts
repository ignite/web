/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Chain } from "../launch/chain";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
import { Request } from "../launch/request";
import { Params } from "../launch/params";

export const protobufPackage = "tendermint.spn.launch";

export interface QueryGetChainRequest {
  launchID: number;
}

export interface QueryGetChainResponse {
  chain: Chain | undefined;
}

export interface QueryAllChainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllChainResponse {
  chain: Chain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGenesisAccountRequest {
  launchID: number;
  address: string;
}

export interface QueryGetGenesisAccountResponse {
  genesisAccount: GenesisAccount | undefined;
}

export interface QueryAllGenesisAccountRequest {
  launchID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllGenesisAccountResponse {
  genesisAccount: GenesisAccount[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVestingAccountRequest {
  launchID: number;
  address: string;
}

export interface QueryGetVestingAccountResponse {
  vestingAccount: VestingAccount | undefined;
}

export interface QueryAllVestingAccountRequest {
  launchID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllVestingAccountResponse {
  vestingAccount: VestingAccount[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGenesisValidatorRequest {
  launchID: number;
  address: string;
}

export interface QueryGetGenesisValidatorResponse {
  genesisValidator: GenesisValidator | undefined;
}

export interface QueryAllGenesisValidatorRequest {
  launchID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllGenesisValidatorResponse {
  genesisValidator: GenesisValidator[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRequestRequest {
  launchID: number;
  requestID: number;
}

export interface QueryGetRequestResponse {
  request: Request | undefined;
}

export interface QueryAllRequestRequest {
  launchID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllRequestResponse {
  request: Request[];
  pagination: PageResponse | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

const baseQueryGetChainRequest: object = { launchID: 0 };

export const QueryGetChainRequest = {
  encode(
    message: QueryGetChainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetChainRequest } as QueryGetChainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChainRequest {
    const message = { ...baseQueryGetChainRequest } as QueryGetChainRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetChainRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetChainRequest>): QueryGetChainRequest {
    const message = { ...baseQueryGetChainRequest } as QueryGetChainRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    return message;
  },
};

const baseQueryGetChainResponse: object = {};

export const QueryGetChainResponse = {
  encode(
    message: QueryGetChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetChainResponse } as QueryGetChainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = Chain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChainResponse {
    const message = { ...baseQueryGetChainResponse } as QueryGetChainResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = Chain.fromJSON(object.chain);
    } else {
      message.chain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChainResponse): unknown {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChainResponse>
  ): QueryGetChainResponse {
    const message = { ...baseQueryGetChainResponse } as QueryGetChainResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = Chain.fromPartial(object.chain);
    } else {
      message.chain = undefined;
    }
    return message;
  },
};

const baseQueryAllChainRequest: object = {};

export const QueryAllChainRequest = {
  encode(
    message: QueryAllChainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllChainRequest } as QueryAllChainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChainRequest {
    const message = { ...baseQueryAllChainRequest } as QueryAllChainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllChainRequest>): QueryAllChainRequest {
    const message = { ...baseQueryAllChainRequest } as QueryAllChainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllChainResponse: object = {};

export const QueryAllChainResponse = {
  encode(
    message: QueryAllChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.chain) {
      Chain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllChainResponse } as QueryAllChainResponse;
    message.chain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain.push(Chain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChainResponse {
    const message = { ...baseQueryAllChainResponse } as QueryAllChainResponse;
    message.chain = [];
    if (object.chain !== undefined && object.chain !== null) {
      for (const e of object.chain) {
        message.chain.push(Chain.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChainResponse): unknown {
    const obj: any = {};
    if (message.chain) {
      obj.chain = message.chain.map((e) => (e ? Chain.toJSON(e) : undefined));
    } else {
      obj.chain = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllChainResponse>
  ): QueryAllChainResponse {
    const message = { ...baseQueryAllChainResponse } as QueryAllChainResponse;
    message.chain = [];
    if (object.chain !== undefined && object.chain !== null) {
      for (const e of object.chain) {
        message.chain.push(Chain.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetGenesisAccountRequest: object = { launchID: 0, address: "" };

export const QueryGetGenesisAccountRequest = {
  encode(
    message: QueryGetGenesisAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGenesisAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGenesisAccountRequest,
    } as QueryGetGenesisAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGenesisAccountRequest {
    const message = {
      ...baseQueryGetGenesisAccountRequest,
    } as QueryGetGenesisAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetGenesisAccountRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGenesisAccountRequest>
  ): QueryGetGenesisAccountRequest {
    const message = {
      ...baseQueryGetGenesisAccountRequest,
    } as QueryGetGenesisAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetGenesisAccountResponse: object = {};

export const QueryGetGenesisAccountResponse = {
  encode(
    message: QueryGetGenesisAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.genesisAccount !== undefined) {
      GenesisAccount.encode(
        message.genesisAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGenesisAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGenesisAccountResponse,
    } as QueryGetGenesisAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisAccount = GenesisAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGenesisAccountResponse {
    const message = {
      ...baseQueryGetGenesisAccountResponse,
    } as QueryGetGenesisAccountResponse;
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      message.genesisAccount = GenesisAccount.fromJSON(object.genesisAccount);
    } else {
      message.genesisAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGenesisAccountResponse): unknown {
    const obj: any = {};
    message.genesisAccount !== undefined &&
      (obj.genesisAccount = message.genesisAccount
        ? GenesisAccount.toJSON(message.genesisAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGenesisAccountResponse>
  ): QueryGetGenesisAccountResponse {
    const message = {
      ...baseQueryGetGenesisAccountResponse,
    } as QueryGetGenesisAccountResponse;
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      message.genesisAccount = GenesisAccount.fromPartial(
        object.genesisAccount
      );
    } else {
      message.genesisAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllGenesisAccountRequest: object = { launchID: 0 };

export const QueryAllGenesisAccountRequest = {
  encode(
    message: QueryAllGenesisAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGenesisAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGenesisAccountRequest,
    } as QueryAllGenesisAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGenesisAccountRequest {
    const message = {
      ...baseQueryAllGenesisAccountRequest,
    } as QueryAllGenesisAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGenesisAccountRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGenesisAccountRequest>
  ): QueryAllGenesisAccountRequest {
    const message = {
      ...baseQueryAllGenesisAccountRequest,
    } as QueryAllGenesisAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllGenesisAccountResponse: object = {};

export const QueryAllGenesisAccountResponse = {
  encode(
    message: QueryAllGenesisAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.genesisAccount) {
      GenesisAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGenesisAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGenesisAccountResponse,
    } as QueryAllGenesisAccountResponse;
    message.genesisAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisAccount.push(
            GenesisAccount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGenesisAccountResponse {
    const message = {
      ...baseQueryAllGenesisAccountResponse,
    } as QueryAllGenesisAccountResponse;
    message.genesisAccount = [];
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      for (const e of object.genesisAccount) {
        message.genesisAccount.push(GenesisAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGenesisAccountResponse): unknown {
    const obj: any = {};
    if (message.genesisAccount) {
      obj.genesisAccount = message.genesisAccount.map((e) =>
        e ? GenesisAccount.toJSON(e) : undefined
      );
    } else {
      obj.genesisAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGenesisAccountResponse>
  ): QueryAllGenesisAccountResponse {
    const message = {
      ...baseQueryAllGenesisAccountResponse,
    } as QueryAllGenesisAccountResponse;
    message.genesisAccount = [];
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      for (const e of object.genesisAccount) {
        message.genesisAccount.push(GenesisAccount.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetVestingAccountRequest: object = { launchID: 0, address: "" };

export const QueryGetVestingAccountRequest = {
  encode(
    message: QueryGetVestingAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVestingAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVestingAccountRequest,
    } as QueryGetVestingAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVestingAccountRequest {
    const message = {
      ...baseQueryGetVestingAccountRequest,
    } as QueryGetVestingAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetVestingAccountRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVestingAccountRequest>
  ): QueryGetVestingAccountRequest {
    const message = {
      ...baseQueryGetVestingAccountRequest,
    } as QueryGetVestingAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetVestingAccountResponse: object = {};

export const QueryGetVestingAccountResponse = {
  encode(
    message: QueryGetVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.vestingAccount !== undefined) {
      VestingAccount.encode(
        message.vestingAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVestingAccountResponse,
    } as QueryGetVestingAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vestingAccount = VestingAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVestingAccountResponse {
    const message = {
      ...baseQueryGetVestingAccountResponse,
    } as QueryGetVestingAccountResponse;
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      message.vestingAccount = VestingAccount.fromJSON(object.vestingAccount);
    } else {
      message.vestingAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVestingAccountResponse): unknown {
    const obj: any = {};
    message.vestingAccount !== undefined &&
      (obj.vestingAccount = message.vestingAccount
        ? VestingAccount.toJSON(message.vestingAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVestingAccountResponse>
  ): QueryGetVestingAccountResponse {
    const message = {
      ...baseQueryGetVestingAccountResponse,
    } as QueryGetVestingAccountResponse;
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      message.vestingAccount = VestingAccount.fromPartial(
        object.vestingAccount
      );
    } else {
      message.vestingAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllVestingAccountRequest: object = { launchID: 0 };

export const QueryAllVestingAccountRequest = {
  encode(
    message: QueryAllVestingAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllVestingAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVestingAccountRequest,
    } as QueryAllVestingAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVestingAccountRequest {
    const message = {
      ...baseQueryAllVestingAccountRequest,
    } as QueryAllVestingAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVestingAccountRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVestingAccountRequest>
  ): QueryAllVestingAccountRequest {
    const message = {
      ...baseQueryAllVestingAccountRequest,
    } as QueryAllVestingAccountRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVestingAccountResponse: object = {};

export const QueryAllVestingAccountResponse = {
  encode(
    message: QueryAllVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vestingAccount) {
      VestingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVestingAccountResponse,
    } as QueryAllVestingAccountResponse;
    message.vestingAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vestingAccount.push(
            VestingAccount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVestingAccountResponse {
    const message = {
      ...baseQueryAllVestingAccountResponse,
    } as QueryAllVestingAccountResponse;
    message.vestingAccount = [];
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      for (const e of object.vestingAccount) {
        message.vestingAccount.push(VestingAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVestingAccountResponse): unknown {
    const obj: any = {};
    if (message.vestingAccount) {
      obj.vestingAccount = message.vestingAccount.map((e) =>
        e ? VestingAccount.toJSON(e) : undefined
      );
    } else {
      obj.vestingAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVestingAccountResponse>
  ): QueryAllVestingAccountResponse {
    const message = {
      ...baseQueryAllVestingAccountResponse,
    } as QueryAllVestingAccountResponse;
    message.vestingAccount = [];
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      for (const e of object.vestingAccount) {
        message.vestingAccount.push(VestingAccount.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetGenesisValidatorRequest: object = {
  launchID: 0,
  address: "",
};

export const QueryGetGenesisValidatorRequest = {
  encode(
    message: QueryGetGenesisValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGenesisValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGenesisValidatorRequest,
    } as QueryGetGenesisValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGenesisValidatorRequest {
    const message = {
      ...baseQueryGetGenesisValidatorRequest,
    } as QueryGetGenesisValidatorRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetGenesisValidatorRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGenesisValidatorRequest>
  ): QueryGetGenesisValidatorRequest {
    const message = {
      ...baseQueryGetGenesisValidatorRequest,
    } as QueryGetGenesisValidatorRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetGenesisValidatorResponse: object = {};

export const QueryGetGenesisValidatorResponse = {
  encode(
    message: QueryGetGenesisValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.genesisValidator !== undefined) {
      GenesisValidator.encode(
        message.genesisValidator,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGenesisValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGenesisValidatorResponse,
    } as QueryGetGenesisValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisValidator = GenesisValidator.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGenesisValidatorResponse {
    const message = {
      ...baseQueryGetGenesisValidatorResponse,
    } as QueryGetGenesisValidatorResponse;
    if (
      object.genesisValidator !== undefined &&
      object.genesisValidator !== null
    ) {
      message.genesisValidator = GenesisValidator.fromJSON(
        object.genesisValidator
      );
    } else {
      message.genesisValidator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGenesisValidatorResponse): unknown {
    const obj: any = {};
    message.genesisValidator !== undefined &&
      (obj.genesisValidator = message.genesisValidator
        ? GenesisValidator.toJSON(message.genesisValidator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGenesisValidatorResponse>
  ): QueryGetGenesisValidatorResponse {
    const message = {
      ...baseQueryGetGenesisValidatorResponse,
    } as QueryGetGenesisValidatorResponse;
    if (
      object.genesisValidator !== undefined &&
      object.genesisValidator !== null
    ) {
      message.genesisValidator = GenesisValidator.fromPartial(
        object.genesisValidator
      );
    } else {
      message.genesisValidator = undefined;
    }
    return message;
  },
};

const baseQueryAllGenesisValidatorRequest: object = { launchID: 0 };

export const QueryAllGenesisValidatorRequest = {
  encode(
    message: QueryAllGenesisValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGenesisValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGenesisValidatorRequest,
    } as QueryAllGenesisValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGenesisValidatorRequest {
    const message = {
      ...baseQueryAllGenesisValidatorRequest,
    } as QueryAllGenesisValidatorRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGenesisValidatorRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGenesisValidatorRequest>
  ): QueryAllGenesisValidatorRequest {
    const message = {
      ...baseQueryAllGenesisValidatorRequest,
    } as QueryAllGenesisValidatorRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllGenesisValidatorResponse: object = {};

export const QueryAllGenesisValidatorResponse = {
  encode(
    message: QueryAllGenesisValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.genesisValidator) {
      GenesisValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGenesisValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGenesisValidatorResponse,
    } as QueryAllGenesisValidatorResponse;
    message.genesisValidator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisValidator.push(
            GenesisValidator.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGenesisValidatorResponse {
    const message = {
      ...baseQueryAllGenesisValidatorResponse,
    } as QueryAllGenesisValidatorResponse;
    message.genesisValidator = [];
    if (
      object.genesisValidator !== undefined &&
      object.genesisValidator !== null
    ) {
      for (const e of object.genesisValidator) {
        message.genesisValidator.push(GenesisValidator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGenesisValidatorResponse): unknown {
    const obj: any = {};
    if (message.genesisValidator) {
      obj.genesisValidator = message.genesisValidator.map((e) =>
        e ? GenesisValidator.toJSON(e) : undefined
      );
    } else {
      obj.genesisValidator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGenesisValidatorResponse>
  ): QueryAllGenesisValidatorResponse {
    const message = {
      ...baseQueryAllGenesisValidatorResponse,
    } as QueryAllGenesisValidatorResponse;
    message.genesisValidator = [];
    if (
      object.genesisValidator !== undefined &&
      object.genesisValidator !== null
    ) {
      for (const e of object.genesisValidator) {
        message.genesisValidator.push(GenesisValidator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetRequestRequest: object = { launchID: 0, requestID: 0 };

export const QueryGetRequestRequest = {
  encode(
    message: QueryGetRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.requestID !== 0) {
      writer.uint32(16).uint64(message.requestID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRequestRequest } as QueryGetRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRequestRequest {
    const message = { ...baseQueryGetRequestRequest } as QueryGetRequestRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetRequestRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.requestID !== undefined && (obj.requestID = message.requestID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRequestRequest>
  ): QueryGetRequestRequest {
    const message = { ...baseQueryGetRequestRequest } as QueryGetRequestRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    return message;
  },
};

const baseQueryGetRequestResponse: object = {};

export const QueryGetRequestResponse = {
  encode(
    message: QueryGetRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRequestResponse,
    } as QueryGetRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRequestResponse {
    const message = {
      ...baseQueryGetRequestResponse,
    } as QueryGetRequestResponse;
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRequestResponse): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRequestResponse>
  ): QueryGetRequestResponse {
    const message = {
      ...baseQueryGetRequestResponse,
    } as QueryGetRequestResponse;
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request);
    } else {
      message.request = undefined;
    }
    return message;
  },
};

const baseQueryAllRequestRequest: object = { launchID: 0 };

export const QueryAllRequestRequest = {
  encode(
    message: QueryAllRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRequestRequest } as QueryAllRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRequestRequest {
    const message = { ...baseQueryAllRequestRequest } as QueryAllRequestRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRequestRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRequestRequest>
  ): QueryAllRequestRequest {
    const message = { ...baseQueryAllRequestRequest } as QueryAllRequestRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRequestResponse: object = {};

export const QueryAllRequestResponse = {
  encode(
    message: QueryAllRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.request) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRequestResponse,
    } as QueryAllRequestResponse;
    message.request = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRequestResponse {
    const message = {
      ...baseQueryAllRequestResponse,
    } as QueryAllRequestResponse;
    message.request = [];
    if (object.request !== undefined && object.request !== null) {
      for (const e of object.request) {
        message.request.push(Request.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRequestResponse): unknown {
    const obj: any = {};
    if (message.request) {
      obj.request = message.request.map((e) =>
        e ? Request.toJSON(e) : undefined
      );
    } else {
      obj.request = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRequestResponse>
  ): QueryAllRequestResponse {
    const message = {
      ...baseQueryAllRequestResponse,
    } as QueryAllRequestResponse;
    message.request = [];
    if (object.request !== undefined && object.request !== null) {
      for (const e of object.request) {
        message.request.push(Request.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a chain by index. */
  Chain(request: QueryGetChainRequest): Promise<QueryGetChainResponse>;
  /** Queries a list of chain items. */
  ChainAll(request: QueryAllChainRequest): Promise<QueryAllChainResponse>;
  /** Queries a genesisAccount by index. */
  GenesisAccount(
    request: QueryGetGenesisAccountRequest
  ): Promise<QueryGetGenesisAccountResponse>;
  /** Queries a list of genesisAccount items. */
  GenesisAccountAll(
    request: QueryAllGenesisAccountRequest
  ): Promise<QueryAllGenesisAccountResponse>;
  /** Queries a vestingAccount by index. */
  VestingAccount(
    request: QueryGetVestingAccountRequest
  ): Promise<QueryGetVestingAccountResponse>;
  /** Queries a list of vestingAccount items. */
  VestingAccountAll(
    request: QueryAllVestingAccountRequest
  ): Promise<QueryAllVestingAccountResponse>;
  /** Queries a genesisValidator by index. */
  GenesisValidator(
    request: QueryGetGenesisValidatorRequest
  ): Promise<QueryGetGenesisValidatorResponse>;
  /** Queries a list of genesisValidator items. */
  GenesisValidatorAll(
    request: QueryAllGenesisValidatorRequest
  ): Promise<QueryAllGenesisValidatorResponse>;
  /** Queries a request by index. */
  Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse>;
  /** Queries a list of request for a chain. */
  RequestAll(request: QueryAllRequestRequest): Promise<QueryAllRequestResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Chain(request: QueryGetChainRequest): Promise<QueryGetChainResponse> {
    const data = QueryGetChainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "Chain",
      data
    );
    return promise.then((data) =>
      QueryGetChainResponse.decode(new Reader(data))
    );
  }

  ChainAll(request: QueryAllChainRequest): Promise<QueryAllChainResponse> {
    const data = QueryAllChainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "ChainAll",
      data
    );
    return promise.then((data) =>
      QueryAllChainResponse.decode(new Reader(data))
    );
  }

  GenesisAccount(
    request: QueryGetGenesisAccountRequest
  ): Promise<QueryGetGenesisAccountResponse> {
    const data = QueryGetGenesisAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "GenesisAccount",
      data
    );
    return promise.then((data) =>
      QueryGetGenesisAccountResponse.decode(new Reader(data))
    );
  }

  GenesisAccountAll(
    request: QueryAllGenesisAccountRequest
  ): Promise<QueryAllGenesisAccountResponse> {
    const data = QueryAllGenesisAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "GenesisAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllGenesisAccountResponse.decode(new Reader(data))
    );
  }

  VestingAccount(
    request: QueryGetVestingAccountRequest
  ): Promise<QueryGetVestingAccountResponse> {
    const data = QueryGetVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "VestingAccount",
      data
    );
    return promise.then((data) =>
      QueryGetVestingAccountResponse.decode(new Reader(data))
    );
  }

  VestingAccountAll(
    request: QueryAllVestingAccountRequest
  ): Promise<QueryAllVestingAccountResponse> {
    const data = QueryAllVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "VestingAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllVestingAccountResponse.decode(new Reader(data))
    );
  }

  GenesisValidator(
    request: QueryGetGenesisValidatorRequest
  ): Promise<QueryGetGenesisValidatorResponse> {
    const data = QueryGetGenesisValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "GenesisValidator",
      data
    );
    return promise.then((data) =>
      QueryGetGenesisValidatorResponse.decode(new Reader(data))
    );
  }

  GenesisValidatorAll(
    request: QueryAllGenesisValidatorRequest
  ): Promise<QueryAllGenesisValidatorResponse> {
    const data = QueryAllGenesisValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "GenesisValidatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllGenesisValidatorResponse.decode(new Reader(data))
    );
  }

  Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse> {
    const data = QueryGetRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "Request",
      data
    );
    return promise.then((data) =>
      QueryGetRequestResponse.decode(new Reader(data))
    );
  }

  RequestAll(
    request: QueryAllRequestRequest
  ): Promise<QueryAllRequestResponse> {
    const data = QueryAllRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "RequestAll",
      data
    );
    return promise.then((data) =>
      QueryAllRequestResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
