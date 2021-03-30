import { StargateClient } from '@cosmjs/stargate';
import { SinonSpy } from 'sinon';
import { Order } from '../codec/ibc/core/channel/v1/channel';
import { ChannelInfo, IbcClient } from './ibcclient';
import { Logger, LogMethod } from './logger';
export declare class TestLogger implements Logger {
    readonly error: SinonSpy & LogMethod;
    readonly warn: SinonSpy & LogMethod;
    readonly info: SinonSpy & LogMethod;
    readonly verbose: SinonSpy & LogMethod;
    readonly debug: SinonSpy & LogMethod;
    constructor(shouldLog?: boolean);
}
export declare const simapp: {
    tendermintUrlWs: string;
    tendermintUrlHttp: string;
    chainId: string;
    prefix: string;
    denomStaking: string;
    denomFee: string;
    minFee: string;
    blockTime: number;
    faucet: {
        mnemonic: string;
        pubkey0: {
            type: string;
            value: string;
        };
        address0: string;
    };
    /** Unused account */
    unused: {
        pubkey: {
            type: string;
            value: string;
        };
        address: string;
        accountNumber: number;
        sequence: number;
        balanceStaking: string;
        balanceFee: string;
    };
};
export declare const wasmd: {
    tendermintUrlWs: string;
    tendermintUrlHttp: string;
    chainId: string;
    prefix: string;
    denomStaking: string;
    denomFee: string;
    minFee: string;
    blockTime: number;
    faucet: {
        mnemonic: string;
        pubkey0: {
            type: string;
            value: string;
        };
        address0: string;
    };
    unused: {
        pubkey: {
            type: string;
            value: string;
        };
        address: string;
        accountNumber: number;
        sequence: number;
        balanceStaking: string;
        balanceFee: string;
    };
};
export declare const ics20: {
    srcPortId: string;
    destPortId: string;
    version: string;
    ordering: Order;
};
export interface SigningOpts {
    readonly tendermintUrlHttp: string;
    readonly prefix: string;
    readonly denomFee: string;
    readonly minFee: string;
}
interface QueryOpts {
    readonly tendermintUrlHttp: string;
}
declare type FundingOpts = SigningOpts & {
    readonly faucet: {
        readonly mnemonic: string;
    };
};
export declare function queryClient(opts: QueryOpts): Promise<StargateClient>;
export declare function signingClient(opts: SigningOpts, mnemonic: string, logger?: Logger): Promise<IbcClient>;
export declare function setup(logger?: Logger): Promise<IbcClient[]>;
export declare function fundAccount(opts: FundingOpts, rcpt: string, amount: string): Promise<void>;
export declare function generateMnemonic(): string;
export declare function randomAddress(prefix: string): string;
export declare function transferTokens(src: IbcClient, srcDenom: string, dest: IbcClient, destPrefix: string, channel: ChannelInfo, amounts: number[], timeout?: number): Promise<number[]>;
export {};
