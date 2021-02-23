import { EventEmitter } from "events";
import ReconnectingWebSocket from "reconnecting-websocket";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import {
    SigningStargateClient,
} from "@cosmjs/stargate";
import { OfflineDirectSigner, Registry } from "@cosmjs/proto-signing";

export interface IClientConfig {
    apiAddr: string;
    rpcAddr?: string;
    wsAddr?: string;
}
export type QueryParamsType = Record<string | number, any>;
export interface IFullRequestParams {
    body?: unknown;
    path: string;
    query?: QueryParamsType;
    method: "GET" | "POST" | "PUT";
}

export default class SPClient extends EventEmitter {
    private apiAddr: string;
    private rpcAddr: string;
    private wsAddr: string;
    private connectedPromise: Promise<void>;
    private socket: ReconnectingWebSocket;
    private connectRes;
    private connectRej;
    public signingClient;
    private signer: OfflineDirectSigner;
    private timer: ReturnType<typeof setInterval>;

    constructor({ apiAddr, rpcAddr, wsAddr }: IClientConfig) {
        super();
        this.apiAddr = apiAddr;
        this.rpcAddr = rpcAddr;
        this.wsAddr = wsAddr;
        const poll: any = this.connectivityTest.bind(this);
        this.timer = setInterval(poll, 5000);
        this.connectivityTest();
        if (this.wsAddr) {
            this.connectedPromise = new Promise((res, rej) => {
                this.connectRes = res;
                this.connectRej = rej;
            });
            try {
                this.socket = new ReconnectingWebSocket(this.wsAddr);
            } catch (e) {
                this.connectRej();
                throw "WS node unavailable";
            }
            this.socket.onopen = this.onOpenWS.bind(this);
            this.socket.onmessage = this.onMessageWS.bind(this);
            this.socket.onerror = this.onErrorWS.bind(this);
            this.socket.onclose = this.onCloseWS.bind(this);
        }
    }
    public async useSigner(signer: OfflineDirectSigner): Promise<void> {
        this.signingClient = await SigningStargateClient.connectWithSigner(
            this.rpcAddr,
            signer
        );
        this.signer = signer;
    }
    public switchAPI(apiAddr: string):void {
        this.apiAddr = apiAddr;
    }
    public async switchWS(wsAddr: string): Promise<void> {
        this.emit("ws-status", false);
        this.wsAddr = wsAddr;
        this.connectedPromise = new Promise((res, rej) => {
            this.connectRes = res;
            this.connectRej = rej;
        });
        try {
            this.socket = new ReconnectingWebSocket(this.wsAddr);
        } catch (e) {
            this.connectRej();
            throw "WS node unavailable";
        }
        this.socket.onopen = this.onOpenWS.bind(this);
        this.socket.onmessage = this.onMessageWS.bind(this);
        this.socket.onerror = this.onErrorWS.bind(this);
        this.socket.onclose = this.onCloseWS.bind(this);
        return this.connectedPromise;
    }
    public async switchRPC(rpcAddr: string): Promise<void> {
        this.rpcAddr = rpcAddr;
        if (this.signingClient) {
            const registry:Registry = { ...this.signingClient.registry };
            this.signingClient = await SigningStargateClient.connectWithSigner(
                this.rpcAddr,
                this.signer,
                {registry}
            );
        }
    }
    private async connectivityTest(): Promise<void> {
        if (this.apiAddr) {
            try {
                await axios.get(this.apiAddr + "/node_info");
                this.emit("api-status", true);
            } catch (error) {
                if (!error.response) {
                    this.emit("api-status", false);
                } else {
                    this.emit("api-status", true);
                }
            }
        }
        if (this.rpcAddr) {
            try {
                await axios.get(this.rpcAddr);
                this.emit("rpc-status", true);
            } catch (error) {
                if (!error.response) {
                    this.emit("rpc-status", false);
                } else {
                    this.emit("api-status", true);
                }
            }
        }
    }
    public connectWS(): Promise<void> {
        return this.connectedPromise;
    }
    private onErrorWS(): void {
        this.connectRej();
    }
    private onCloseWS(): void {
        this.emit("ws-status", false);
    }
    private onOpenWS(): void {
        this.connectRes();
        this.emit("ws-status", true);
        this.socket.send(
            JSON.stringify({
                jsonrpc: "2.0",
                method: "subscribe",
                id: "1",
                params: ["tm.event = 'NewBlock'"],
            })
        );
    }
    private onMessageWS(msg: any): void {
        const result: any = JSON.parse(msg.data).result;
        if (result.data && result.data.type === "tendermint/event/NewBlock") {
            this.emit("newblock", JSON.parse(msg.data).result);
        }
    }
    public async query(url: string, params = ""): Promise<any> {
        try {
            const response: any = await axios.get(this.apiAddr + url + params);
            return response.data;
        } catch (e) {
            throw "Could not access API: " + this.apiAddr + url + params;
        }
    }

    private addQueryParam(query: QueryParamsType, key: string): string {
        const value: any = query[key];

        return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(
                Array.isArray(value)
                    ? value.join(",")
                    : typeof value === "number"
                    ? value
                    : `${value}`
            )
        );
    }
    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query: QueryParamsType = rawQuery || {};
        const keys: string[] = Object.keys(query).filter(
            (key) => "undefined" !== typeof query[key]
        );
        return keys
            .map((key) =>
                typeof query[key] === "object" && !Array.isArray(query[key])
                    ? this.toQueryString(query[key] as QueryParamsType)
                    : this.addQueryParam(query, key)
            )
            .join("&");
    }
    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString: string = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    public async request<T = any>({
        body,
        path,
        query,
        method,
    }: IFullRequestParams): Promise<AxiosResponse<T>> {
        const url: string = this.apiAddr + path + this.addQueryParams(query);
        try {
            const response: AxiosPromise<any> = axios({
                url,
                method,
                data: body,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            });
            const data: AxiosResponse<any> = await response;
            return data;
        } catch (e) {
            throw "Could not access API: " + url;
        }
    }
}
