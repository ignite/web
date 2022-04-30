/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    default:
      return "UNKNOWN";
  }
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: { [key: string]: Value };
}

export interface Struct_FieldsEntry {
  key: string;
  value: Value | undefined;
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  null_value: NullValue | undefined;
  /** Represents a double value. */
  number_value: number | undefined;
  /** Represents a string value. */
  string_value: string | undefined;
  /** Represents a boolean value. */
  bool_value: boolean | undefined;
  /** Represents a structured value. */
  struct_value: Struct | undefined;
  /** Represents a repeated `Value`. */
  list_value: ListValue | undefined;
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}

const baseStruct: object = {};

export const Struct = {
  encode(message: Struct, writer: Writer = Writer.create()): Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct {
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        message.fields[key] = Value.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.fields[key] = Value.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseStruct_FieldsEntry: object = { key: "" };

export const Struct_FieldsEntry = {
  encode(
    message: Struct_FieldsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseValue: object = {};

export const Value = {
  encode(message: Value, writer: Writer = Writer.create()): Writer {
    if (message.null_value !== undefined) {
      writer.uint32(8).int32(message.null_value);
    }
    if (message.number_value !== undefined) {
      writer.uint32(17).double(message.number_value);
    }
    if (message.string_value !== undefined) {
      writer.uint32(26).string(message.string_value);
    }
    if (message.bool_value !== undefined) {
      writer.uint32(32).bool(message.bool_value);
    }
    if (message.struct_value !== undefined) {
      Struct.encode(message.struct_value, writer.uint32(42).fork()).ldelim();
    }
    if (message.list_value !== undefined) {
      ListValue.encode(message.list_value, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValue } as Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.null_value = reader.int32() as any;
          break;
        case 2:
          message.number_value = reader.double();
          break;
        case 3:
          message.string_value = reader.string();
          break;
        case 4:
          message.bool_value = reader.bool();
          break;
        case 5:
          message.struct_value = Struct.decode(reader, reader.uint32());
          break;
        case 6:
          message.list_value = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    const message = { ...baseValue } as Value;
    if (object.null_value !== undefined && object.null_value !== null) {
      message.null_value = nullValueFromJSON(object.null_value);
    } else {
      message.null_value = undefined;
    }
    if (object.number_value !== undefined && object.number_value !== null) {
      message.number_value = Number(object.number_value);
    } else {
      message.number_value = undefined;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.string_value = String(object.string_value);
    } else {
      message.string_value = undefined;
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.bool_value = Boolean(object.bool_value);
    } else {
      message.bool_value = undefined;
    }
    if (object.struct_value !== undefined && object.struct_value !== null) {
      message.struct_value = Struct.fromJSON(object.struct_value);
    } else {
      message.struct_value = undefined;
    }
    if (object.list_value !== undefined && object.list_value !== null) {
      message.list_value = ListValue.fromJSON(object.list_value);
    } else {
      message.list_value = undefined;
    }
    return message;
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.null_value !== undefined &&
      (obj.null_value =
        message.null_value !== undefined
          ? nullValueToJSON(message.null_value)
          : undefined);
    message.number_value !== undefined &&
      (obj.number_value = message.number_value);
    message.string_value !== undefined &&
      (obj.string_value = message.string_value);
    message.bool_value !== undefined && (obj.bool_value = message.bool_value);
    message.struct_value !== undefined &&
      (obj.struct_value = message.struct_value
        ? Struct.toJSON(message.struct_value)
        : undefined);
    message.list_value !== undefined &&
      (obj.list_value = message.list_value
        ? ListValue.toJSON(message.list_value)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Value>): Value {
    const message = { ...baseValue } as Value;
    if (object.null_value !== undefined && object.null_value !== null) {
      message.null_value = object.null_value;
    } else {
      message.null_value = undefined;
    }
    if (object.number_value !== undefined && object.number_value !== null) {
      message.number_value = object.number_value;
    } else {
      message.number_value = undefined;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.string_value = object.string_value;
    } else {
      message.string_value = undefined;
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.bool_value = object.bool_value;
    } else {
      message.bool_value = undefined;
    }
    if (object.struct_value !== undefined && object.struct_value !== null) {
      message.struct_value = Struct.fromPartial(object.struct_value);
    } else {
      message.struct_value = undefined;
    }
    if (object.list_value !== undefined && object.list_value !== null) {
      message.list_value = ListValue.fromPartial(object.list_value);
    } else {
      message.list_value = undefined;
    }
    return message;
  },
};

const baseListValue: object = {};

export const ListValue = {
  encode(message: ListValue, writer: Writer = Writer.create()): Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? Value.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromPartial(e));
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
