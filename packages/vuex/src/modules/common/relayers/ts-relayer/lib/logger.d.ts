export declare type LogMethod = (message: string, meta?: Record<string, unknown>) => Logger;
export interface Logger {
    error: LogMethod;
    warn: LogMethod;
    info: LogMethod;
    verbose: LogMethod;
    debug: LogMethod;
}
export declare class NoopLogger implements Logger {
    readonly error: LogMethod;
    readonly warn: LogMethod;
    readonly info: LogMethod;
    readonly verbose: LogMethod;
    readonly debug: LogMethod;
    constructor();
}
