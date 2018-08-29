/// <reference types="node" />
export declare type TimerCallback = (...args: any[]) => void;
export declare class Immediate {
    protected timer?: NodeJS.Timer;
    constructor(callback: TimerCallback, ...args: any[]);
    remove(): void;
}
export declare class Interval {
    protected timer?: NodeJS.Timer;
    /**
     * @param delay - ms
     */
    constructor(delay: number, callback: TimerCallback, ...args: any[]);
    remove(): void;
}
export declare class Timeout {
    protected timer?: NodeJS.Timer;
    /**
     * @param delay - ms
     */
    constructor(delay: number, callback: TimerCallback, ...args: any[]);
    remove(): void;
}
export declare function immediate(callback: TimerCallback, ...args: any[]): Immediate;
/**
 * @param delay - ms
 */
export declare function interval(delay: number, callback: TimerCallback, ...args: any[]): Interval;
/**
 * @param delay - ms
 */
export declare function timeout(delay: number, callback: TimerCallback, ...args: any[]): Timeout;
