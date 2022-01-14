/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";

export const protobufPackage = "tendermint.spn.launch";

export interface Request {
  launchID: number;
  requestID: number;
  creator: string;
  createdAt: number;
  content: RequestContent | undefined;
}

export interface RequestContent {
  genesisAccount: GenesisAccount | undefined;
  vestingAccount: VestingAccount | undefined;
  genesisValidator: GenesisValidator | undefined;
  accountRemoval: AccountRemoval | undefined;
  validatorRemoval: ValidatorRemoval | undefined;
}

export interface AccountRemoval {
  address: string;
}

export interface ValidatorRemoval {
  valAddress: string;
}

const baseRequest: object = {
  launchID: 0,
  requestID: 0,
  creator: "",
  createdAt: 0,
};

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.requestID !== 0) {
      writer.uint32(16).uint64(message.requestID);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.content !== undefined) {
      RequestContent.encode(message.content, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.content = RequestContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = RequestContent.fromJSON(object.content);
    } else {
      message.content = undefined;
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.creator !== undefined && (obj.creator = message.creator);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.content !== undefined &&
      (obj.content = message.content
        ? RequestContent.toJSON(message.content)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = RequestContent.fromPartial(object.content);
    } else {
      message.content = undefined;
    }
    return message;
  },
};

const baseRequestContent: object = {};

export const RequestContent = {
  encode(message: RequestContent, writer: Writer = Writer.create()): Writer {
    if (message.genesisAccount !== undefined) {
      GenesisAccount.encode(
        message.genesisAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.vestingAccount !== undefined) {
      VestingAccount.encode(
        message.vestingAccount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.genesisValidator !== undefined) {
      GenesisValidator.encode(
        message.genesisValidator,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.accountRemoval !== undefined) {
      AccountRemoval.encode(
        message.accountRemoval,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.validatorRemoval !== undefined) {
      ValidatorRemoval.encode(
        message.validatorRemoval,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RequestContent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestContent } as RequestContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisAccount = GenesisAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.vestingAccount = VestingAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.genesisValidator = GenesisValidator.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.accountRemoval = AccountRemoval.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.validatorRemoval = ValidatorRemoval.decode(
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

  fromJSON(object: any): RequestContent {
    const message = { ...baseRequestContent } as RequestContent;
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      message.genesisAccount = GenesisAccount.fromJSON(object.genesisAccount);
    } else {
      message.genesisAccount = undefined;
    }
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      message.vestingAccount = VestingAccount.fromJSON(object.vestingAccount);
    } else {
      message.vestingAccount = undefined;
    }
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
    if (object.accountRemoval !== undefined && object.accountRemoval !== null) {
      message.accountRemoval = AccountRemoval.fromJSON(object.accountRemoval);
    } else {
      message.accountRemoval = undefined;
    }
    if (
      object.validatorRemoval !== undefined &&
      object.validatorRemoval !== null
    ) {
      message.validatorRemoval = ValidatorRemoval.fromJSON(
        object.validatorRemoval
      );
    } else {
      message.validatorRemoval = undefined;
    }
    return message;
  },

  toJSON(message: RequestContent): unknown {
    const obj: any = {};
    message.genesisAccount !== undefined &&
      (obj.genesisAccount = message.genesisAccount
        ? GenesisAccount.toJSON(message.genesisAccount)
        : undefined);
    message.vestingAccount !== undefined &&
      (obj.vestingAccount = message.vestingAccount
        ? VestingAccount.toJSON(message.vestingAccount)
        : undefined);
    message.genesisValidator !== undefined &&
      (obj.genesisValidator = message.genesisValidator
        ? GenesisValidator.toJSON(message.genesisValidator)
        : undefined);
    message.accountRemoval !== undefined &&
      (obj.accountRemoval = message.accountRemoval
        ? AccountRemoval.toJSON(message.accountRemoval)
        : undefined);
    message.validatorRemoval !== undefined &&
      (obj.validatorRemoval = message.validatorRemoval
        ? ValidatorRemoval.toJSON(message.validatorRemoval)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestContent>): RequestContent {
    const message = { ...baseRequestContent } as RequestContent;
    if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
      message.genesisAccount = GenesisAccount.fromPartial(
        object.genesisAccount
      );
    } else {
      message.genesisAccount = undefined;
    }
    if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
      message.vestingAccount = VestingAccount.fromPartial(
        object.vestingAccount
      );
    } else {
      message.vestingAccount = undefined;
    }
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
    if (object.accountRemoval !== undefined && object.accountRemoval !== null) {
      message.accountRemoval = AccountRemoval.fromPartial(
        object.accountRemoval
      );
    } else {
      message.accountRemoval = undefined;
    }
    if (
      object.validatorRemoval !== undefined &&
      object.validatorRemoval !== null
    ) {
      message.validatorRemoval = ValidatorRemoval.fromPartial(
        object.validatorRemoval
      );
    } else {
      message.validatorRemoval = undefined;
    }
    return message;
  },
};

const baseAccountRemoval: object = { address: "" };

export const AccountRemoval = {
  encode(message: AccountRemoval, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountRemoval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountRemoval } as AccountRemoval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountRemoval {
    const message = { ...baseAccountRemoval } as AccountRemoval;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: AccountRemoval): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountRemoval>): AccountRemoval {
    const message = { ...baseAccountRemoval } as AccountRemoval;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseValidatorRemoval: object = { valAddress: "" };

export const ValidatorRemoval = {
  encode(message: ValidatorRemoval, writer: Writer = Writer.create()): Writer {
    if (message.valAddress !== "") {
      writer.uint32(10).string(message.valAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ValidatorRemoval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorRemoval } as ValidatorRemoval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorRemoval {
    const message = { ...baseValidatorRemoval } as ValidatorRemoval;
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = String(object.valAddress);
    } else {
      message.valAddress = "";
    }
    return message;
  },

  toJSON(message: ValidatorRemoval): unknown {
    const obj: any = {};
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorRemoval>): ValidatorRemoval {
    const message = { ...baseValidatorRemoval } as ValidatorRemoval;
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = object.valAddress;
    } else {
      message.valAddress = "";
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
