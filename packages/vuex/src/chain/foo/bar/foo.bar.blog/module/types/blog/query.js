/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Post } from "../blog/post";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "foo.bar.blog";
const baseQueryGetPostRequest = { id: "" };
export const QueryGetPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
const baseQueryGetPostResponse = {};
export const QueryGetPostResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Post !== undefined) {
            Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Post = Post.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromJSON(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Post !== undefined &&
            (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromPartial(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    },
};
const baseQueryAllPostRequest = {};
export const QueryAllPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPostResponse = {};
export const QueryAllPostResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Post) {
            Post.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Post.push(Post.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Post) {
            obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
        }
        else {
            obj.Post = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Post(request) {
        const data = QueryGetPostRequest.encode(request).finish();
        const promise = this.rpc.request("foo.bar.blog.Query", "Post", data);
        return promise.then((data) => QueryGetPostResponse.decode(new Reader(data)));
    }
    PostAll(request) {
        const data = QueryAllPostRequest.encode(request).finish();
        const promise = this.rpc.request("foo.bar.blog.Query", "PostAll", data);
        return promise.then((data) => QueryAllPostResponse.decode(new Reader(data)));
    }
}
