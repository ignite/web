"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const transfer_1 = require("../../../../ibc/applications/transfer/v1/transfer");
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'ibc.applications.transfer.v1';
const baseQueryDenomTraceRequest = { hash: '' };
exports.QueryDenomTraceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== '') {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomTraceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomTraceRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomTraceRequest);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = '';
        }
        return message;
    },
};
const baseQueryDenomTraceResponse = {};
exports.QueryDenomTraceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denomTrace !== undefined) {
            transfer_1.DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomTraceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = transfer_1.DenomTrace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomTraceResponse);
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            message.denomTrace = transfer_1.DenomTrace.fromJSON(object.denomTrace);
        }
        else {
            message.denomTrace = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denomTrace !== undefined &&
            (obj.denomTrace = message.denomTrace
                ? transfer_1.DenomTrace.toJSON(message.denomTrace)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomTraceResponse);
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            message.denomTrace = transfer_1.DenomTrace.fromPartial(object.denomTrace);
        }
        else {
            message.denomTrace = undefined;
        }
        return message;
    },
};
const baseQueryDenomTracesRequest = {};
exports.QueryDenomTracesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomTracesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomTracesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
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
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomTracesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDenomTracesResponse = {};
exports.QueryDenomTracesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomTracesResponse);
        message.denomTraces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomTracesResponse);
        message.denomTraces = [];
        if (object.denomTraces !== undefined && object.denomTraces !== null) {
            for (const e of object.denomTraces) {
                message.denomTraces.push(transfer_1.DenomTrace.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denomTraces = message.denomTraces.map((e) => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraces = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomTracesResponse);
        message.denomTraces = [];
        if (object.denomTraces !== undefined && object.denomTraces !== null) {
            for (const e of object.denomTraces) {
                message.denomTraces.push(transfer_1.DenomTrace.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = transfer_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = transfer_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    DenomTrace(request) {
        const data = exports.QueryDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'DenomTrace', data);
        return promise.then((data) => exports.QueryDenomTraceResponse.decode(new minimal_1.default.Reader(data)));
    }
    DenomTraces(request) {
        const data = exports.QueryDenomTracesRequest.encode(request).finish();
        const promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'DenomTraces', data);
        return promise.then((data) => exports.QueryDenomTracesResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'Params', data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29kZWMvaWJjL2FwcGxpY2F0aW9ucy90cmFuc2Zlci92MS9xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsZ0ZBRzJEO0FBQzNELGlGQUcwRDtBQUMxRCxpRUFBcUM7QUFHeEIsUUFBQSxlQUFlLEdBQUcsOEJBQThCLENBQUM7QUFpRDlELE1BQU0sMEJBQTBCLEdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFFM0MsUUFBQSxzQkFBc0IsR0FBRztJQUNwQyxNQUFNLENBQ0osT0FBK0IsRUFDL0IsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FDSixLQUE4QixFQUM5QixNQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLDBCQUEwQixDQUE0QixDQUFDO1FBQzVFLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSywwQkFBMEIsQ0FBNEIsQ0FBQztRQUM1RSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQStCO1FBQ3BDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FDVCxNQUEyQztRQUUzQyxNQUFNLE9BQU8sR0FBRyxrQkFBSywwQkFBMEIsQ0FBNEIsQ0FBQztRQUM1RSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sMkJBQTJCLEdBQVcsRUFBRSxDQUFDO0FBRWxDLFFBQUEsdUJBQXVCLEdBQUc7SUFDckMsTUFBTSxDQUNKLE9BQWdDLEVBQ2hDLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ3BDLHFCQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FDSixLQUE4QixFQUM5QixNQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUNYLDJCQUEyQixDQUNKLENBQUM7UUFDN0IsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFVBQVUsR0FBRyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ2hFLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUNYLDJCQUEyQixDQUNKLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUNqRSxPQUFPLENBQUMsVUFBVSxHQUFHLHFCQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDaEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdDO1FBQ3JDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVM7WUFDOUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQyxDQUFDLENBQUMscUJBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FDVCxNQUE0QztRQUU1QyxNQUFNLE9BQU8sR0FBRyxrQkFDWCwyQkFBMkIsQ0FDSixDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDakUsT0FBTyxDQUFDLFVBQVUsR0FBRyxxQkFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLDJCQUEyQixHQUFXLEVBQUUsQ0FBQztBQUVsQyxRQUFBLHVCQUF1QixHQUFHO0lBQ3JDLE1BQU0sQ0FDSixPQUFnQyxFQUNoQyxTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFFeEMsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyx3QkFBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMzRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQ0osS0FBOEIsRUFDOUIsTUFBZTtRQUVmLE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFDWCwyQkFBMkIsQ0FDSixDQUFDO1FBQzdCLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxVQUFVLEdBQUcsd0JBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNqRSxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFDWCwyQkFBMkIsQ0FDSixDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDakUsT0FBTyxDQUFDLFVBQVUsR0FBRyx3QkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFnQztRQUNyQyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTO1lBQzlCLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVTtnQkFDbEMsQ0FBQyxDQUFDLHdCQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQ1QsTUFBNEM7UUFFNUMsTUFBTSxPQUFPLEdBQUcsa0JBQ1gsMkJBQTJCLENBQ0osQ0FBQztRQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsd0JBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUNoQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSw0QkFBNEIsR0FBVyxFQUFFLENBQUM7QUFFbkMsUUFBQSx3QkFBd0IsR0FBRztJQUN0QyxNQUFNLENBQ0osT0FBaUMsRUFDakMsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyx5QkFBWSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDekIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FDSixLQUE4QixFQUM5QixNQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUNYLDRCQUE0QixDQUNKLENBQUM7UUFDOUIsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDekIsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxVQUFVLEdBQUcseUJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFDWCw0QkFBNEIsQ0FDSixDQUFDO1FBQzlCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDbkUsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxVQUFVLEdBQUcseUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUNoQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBaUM7UUFDdEMsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN2QixHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNyQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTO1lBQzlCLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVTtnQkFDbEMsQ0FBQyxDQUFDLHlCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQ1QsTUFBNkM7UUFFN0MsTUFBTSxPQUFPLEdBQUcsa0JBQ1gsNEJBQTRCLENBQ0osQ0FBQztRQUM5QixPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ25FLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUNqRSxPQUFPLENBQUMsVUFBVSxHQUFHLHlCQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDaEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sc0JBQXNCLEdBQVcsRUFBRSxDQUFDO0FBRTdCLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsTUFBTSxDQUNKLENBQXFCLEVBQ3JCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsa0JBQUssc0JBQXNCLENBQXdCLENBQUM7UUFDcEUsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLENBQU07UUFDYixNQUFNLE9BQU8sR0FBRyxrQkFBSyxzQkFBc0IsQ0FBd0IsQ0FBQztRQUNwRSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQXFCO1FBQzFCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBa0M7UUFDNUMsTUFBTSxPQUFPLEdBQUcsa0JBQUssc0JBQXNCLENBQXdCLENBQUM7UUFDcEUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLHVCQUF1QixHQUFXLEVBQUUsQ0FBQztBQUU5QixRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLE1BQU0sQ0FDSixPQUE0QixFQUM1QixTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFFeEMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNsRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyx1QkFBdUIsQ0FBeUIsQ0FBQztRQUN0RSxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsTUFBTSxHQUFHLGlCQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDeEQsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssdUJBQXVCLENBQXlCLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQTRCO1FBQ2pDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXdDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLGtCQUFLLHVCQUF1QixDQUF5QixDQUFDO1FBQ3RFLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFjRixNQUFhLGVBQWU7SUFFMUIsWUFBWSxHQUFRO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxVQUFVLENBQ1IsT0FBK0I7UUFFL0IsTUFBTSxJQUFJLEdBQUcsOEJBQXNCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixvQ0FBb0MsRUFDcEMsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IsK0JBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQ1QsT0FBZ0M7UUFFaEMsTUFBTSxJQUFJLEdBQUcsK0JBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixvQ0FBb0MsRUFDcEMsYUFBYSxFQUNiLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IsZ0NBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFDaEMsTUFBTSxJQUFJLEdBQUcsMEJBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixvQ0FBb0MsRUFDcEMsUUFBUSxFQUNSLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IsMkJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTVDRCwwQ0E0Q0MifQ==