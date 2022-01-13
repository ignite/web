/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { ValidatorDescription } from "../profile/validator";
import { CoordinatorDescription } from "../profile/coordinator";

export const protobufPackage = "tendermint.spn.profile";

export interface MsgUpdateValidatorDescription {
  address: string;
  description: ValidatorDescription | undefined;
}

export interface MsgUpdateValidatorDescriptionResponse {}

export interface MsgDeleteValidator {
  address: string;
}

export interface MsgDeleteValidatorResponse {}

export interface MsgCreateCoordinator {
  address: string;
  description: CoordinatorDescription | undefined;
}

export interface MsgCreateCoordinatorResponse {
  coordinatorID: number;
}

export interface MsgUpdateCoordinatorDescription {
  address: string;
  description: CoordinatorDescription | undefined;
}

export interface MsgUpdateCoordinatorDescriptionResponse {}

export interface MsgUpdateCoordinatorAddress {
  address: string;
  newAddress: string;
}

export interface MsgUpdateCoordinatorAddressResponse {}

export interface MsgDeleteCoordinator {
  address: string;
}

export interface MsgDeleteCoordinatorResponse {
  coordinatorID: number;
}

const baseMsgUpdateValidatorDescription: object = { address: "" };

export const MsgUpdateValidatorDescription = {
  encode(
    message: MsgUpdateValidatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      ValidatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidatorDescription,
    } as MsgUpdateValidatorDescription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.description = ValidatorDescription.decode(
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

  fromJSON(object: any): MsgUpdateValidatorDescription {
    const message = {
      ...baseMsgUpdateValidatorDescription,
    } as MsgUpdateValidatorDescription;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateValidatorDescription): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined &&
      (obj.description = message.description
        ? ValidatorDescription.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateValidatorDescription>
  ): MsgUpdateValidatorDescription {
    const message = {
      ...baseMsgUpdateValidatorDescription,
    } as MsgUpdateValidatorDescription;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromPartial(
        object.description
      );
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseMsgUpdateValidatorDescriptionResponse: object = {};

export const MsgUpdateValidatorDescriptionResponse = {
  encode(
    _: MsgUpdateValidatorDescriptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorDescriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse,
    } as MsgUpdateValidatorDescriptionResponse;
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

  fromJSON(_: any): MsgUpdateValidatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse,
    } as MsgUpdateValidatorDescriptionResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidatorDescriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidatorDescriptionResponse>
  ): MsgUpdateValidatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse,
    } as MsgUpdateValidatorDescriptionResponse;
    return message;
  },
};

const baseMsgDeleteValidator: object = { address: "" };

export const MsgDeleteValidator = {
  encode(
    message: MsgDeleteValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
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

  fromJSON(object: any): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteValidator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteValidatorResponse: object = {};

export const MsgDeleteValidatorResponse = {
  encode(
    _: MsgDeleteValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
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

  fromJSON(_: any): MsgDeleteValidatorResponse {
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteValidatorResponse>
  ): MsgDeleteValidatorResponse {
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
    return message;
  },
};

const baseMsgCreateCoordinator: object = { address: "" };

export const MsgCreateCoordinator = {
  encode(
    message: MsgCreateCoordinator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      CoordinatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCoordinator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.description = CoordinatorDescription.decode(
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

  fromJSON(object: any): MsgCreateCoordinator {
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateCoordinator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined &&
      (obj.description = message.description
        ? CoordinatorDescription.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCoordinator>): MsgCreateCoordinator {
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromPartial(
        object.description
      );
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseMsgCreateCoordinatorResponse: object = { coordinatorID: 0 };

export const MsgCreateCoordinatorResponse = {
  encode(
    message: MsgCreateCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCoordinatorResponse,
    } as MsgCreateCoordinatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCoordinatorResponse {
    const message = {
      ...baseMsgCreateCoordinatorResponse,
    } as MsgCreateCoordinatorResponse;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID);
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCoordinatorResponse): unknown {
    const obj: any = {};
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCoordinatorResponse>
  ): MsgCreateCoordinatorResponse {
    const message = {
      ...baseMsgCreateCoordinatorResponse,
    } as MsgCreateCoordinatorResponse;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID;
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },
};

const baseMsgUpdateCoordinatorDescription: object = { address: "" };

export const MsgUpdateCoordinatorDescription = {
  encode(
    message: MsgUpdateCoordinatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      CoordinatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCoordinatorDescription,
    } as MsgUpdateCoordinatorDescription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.description = CoordinatorDescription.decode(
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

  fromJSON(object: any): MsgUpdateCoordinatorDescription {
    const message = {
      ...baseMsgUpdateCoordinatorDescription,
    } as MsgUpdateCoordinatorDescription;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateCoordinatorDescription): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined &&
      (obj.description = message.description
        ? CoordinatorDescription.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCoordinatorDescription>
  ): MsgUpdateCoordinatorDescription {
    const message = {
      ...baseMsgUpdateCoordinatorDescription,
    } as MsgUpdateCoordinatorDescription;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromPartial(
        object.description
      );
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseMsgUpdateCoordinatorDescriptionResponse: object = {};

export const MsgUpdateCoordinatorDescriptionResponse = {
  encode(
    _: MsgUpdateCoordinatorDescriptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorDescriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse,
    } as MsgUpdateCoordinatorDescriptionResponse;
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

  fromJSON(_: any): MsgUpdateCoordinatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse,
    } as MsgUpdateCoordinatorDescriptionResponse;
    return message;
  },

  toJSON(_: MsgUpdateCoordinatorDescriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCoordinatorDescriptionResponse>
  ): MsgUpdateCoordinatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse,
    } as MsgUpdateCoordinatorDescriptionResponse;
    return message;
  },
};

const baseMsgUpdateCoordinatorAddress: object = { address: "", newAddress: "" };

export const MsgUpdateCoordinatorAddress = {
  encode(
    message: MsgUpdateCoordinatorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.newAddress !== "") {
      writer.uint32(18).string(message.newAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCoordinatorAddress,
    } as MsgUpdateCoordinatorAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.newAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCoordinatorAddress {
    const message = {
      ...baseMsgUpdateCoordinatorAddress,
    } as MsgUpdateCoordinatorAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = String(object.newAddress);
    } else {
      message.newAddress = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCoordinatorAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCoordinatorAddress>
  ): MsgUpdateCoordinatorAddress {
    const message = {
      ...baseMsgUpdateCoordinatorAddress,
    } as MsgUpdateCoordinatorAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = object.newAddress;
    } else {
      message.newAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateCoordinatorAddressResponse: object = {};

export const MsgUpdateCoordinatorAddressResponse = {
  encode(
    _: MsgUpdateCoordinatorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse,
    } as MsgUpdateCoordinatorAddressResponse;
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

  fromJSON(_: any): MsgUpdateCoordinatorAddressResponse {
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse,
    } as MsgUpdateCoordinatorAddressResponse;
    return message;
  },

  toJSON(_: MsgUpdateCoordinatorAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCoordinatorAddressResponse>
  ): MsgUpdateCoordinatorAddressResponse {
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse,
    } as MsgUpdateCoordinatorAddressResponse;
    return message;
  },
};

const baseMsgDeleteCoordinator: object = { address: "" };

export const MsgDeleteCoordinator = {
  encode(
    message: MsgDeleteCoordinator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCoordinator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCoordinator } as MsgDeleteCoordinator;
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

  fromJSON(object: any): MsgDeleteCoordinator {
    const message = { ...baseMsgDeleteCoordinator } as MsgDeleteCoordinator;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCoordinator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCoordinator>): MsgDeleteCoordinator {
    const message = { ...baseMsgDeleteCoordinator } as MsgDeleteCoordinator;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteCoordinatorResponse: object = { coordinatorID: 0 };

export const MsgDeleteCoordinatorResponse = {
  encode(
    message: MsgDeleteCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCoordinatorResponse,
    } as MsgDeleteCoordinatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCoordinatorResponse {
    const message = {
      ...baseMsgDeleteCoordinatorResponse,
    } as MsgDeleteCoordinatorResponse;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID);
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCoordinatorResponse): unknown {
    const obj: any = {};
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCoordinatorResponse>
  ): MsgDeleteCoordinatorResponse {
    const message = {
      ...baseMsgDeleteCoordinatorResponse,
    } as MsgDeleteCoordinatorResponse;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID;
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  UpdateValidatorDescription(
    request: MsgUpdateValidatorDescription
  ): Promise<MsgUpdateValidatorDescriptionResponse>;
  DeleteValidator(
    request: MsgDeleteValidator
  ): Promise<MsgDeleteValidatorResponse>;
  CreateCoordinator(
    request: MsgCreateCoordinator
  ): Promise<MsgCreateCoordinatorResponse>;
  UpdateCoordinatorDescription(
    request: MsgUpdateCoordinatorDescription
  ): Promise<MsgUpdateCoordinatorDescriptionResponse>;
  UpdateCoordinatorAddress(
    request: MsgUpdateCoordinatorAddress
  ): Promise<MsgUpdateCoordinatorAddressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCoordinator(
    request: MsgDeleteCoordinator
  ): Promise<MsgDeleteCoordinatorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  UpdateValidatorDescription(
    request: MsgUpdateValidatorDescription
  ): Promise<MsgUpdateValidatorDescriptionResponse> {
    const data = MsgUpdateValidatorDescription.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "UpdateValidatorDescription",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidatorDescriptionResponse.decode(new Reader(data))
    );
  }

  DeleteValidator(
    request: MsgDeleteValidator
  ): Promise<MsgDeleteValidatorResponse> {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "DeleteValidator",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidatorResponse.decode(new Reader(data))
    );
  }

  CreateCoordinator(
    request: MsgCreateCoordinator
  ): Promise<MsgCreateCoordinatorResponse> {
    const data = MsgCreateCoordinator.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "CreateCoordinator",
      data
    );
    return promise.then((data) =>
      MsgCreateCoordinatorResponse.decode(new Reader(data))
    );
  }

  UpdateCoordinatorDescription(
    request: MsgUpdateCoordinatorDescription
  ): Promise<MsgUpdateCoordinatorDescriptionResponse> {
    const data = MsgUpdateCoordinatorDescription.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "UpdateCoordinatorDescription",
      data
    );
    return promise.then((data) =>
      MsgUpdateCoordinatorDescriptionResponse.decode(new Reader(data))
    );
  }

  UpdateCoordinatorAddress(
    request: MsgUpdateCoordinatorAddress
  ): Promise<MsgUpdateCoordinatorAddressResponse> {
    const data = MsgUpdateCoordinatorAddress.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "UpdateCoordinatorAddress",
      data
    );
    return promise.then((data) =>
      MsgUpdateCoordinatorAddressResponse.decode(new Reader(data))
    );
  }

  DeleteCoordinator(
    request: MsgDeleteCoordinator
  ): Promise<MsgDeleteCoordinatorResponse> {
    const data = MsgDeleteCoordinator.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Msg",
      "DeleteCoordinator",
      data
    );
    return promise.then((data) =>
      MsgDeleteCoordinatorResponse.decode(new Reader(data))
    );
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
