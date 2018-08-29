"use strict";
/// <reference types="node" />
Object.defineProperty(exports, "__esModule", { value: true });
class Immediate {
    constructor(callback, ...args) {
        this.timer = setImmediate(callback, ...args);
    }
    remove() {
        if (this.timer) {
            clearImmediate(this.timer);
            this.timer = undefined;
        }
    }
}
exports.Immediate = Immediate;
class Interval {
    /**
     * @param delay - ms
     */
    constructor(delay, callback, ...args) {
        this.timer = setInterval(callback, delay, ...args);
    }
    remove() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
}
exports.Interval = Interval;
class Timeout {
    /**
     * @param delay - ms
     */
    constructor(delay, callback, ...args) {
        this.timer = setTimeout(callback, delay, ...args);
    }
    remove() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
    }
}
exports.Timeout = Timeout;
function immediate(callback, ...args) {
    return new Immediate(callback, ...args);
}
exports.immediate = immediate;
/**
 * @param delay - ms
 */
function interval(delay, callback, ...args) {
    return new Interval(delay, callback, ...args);
}
exports.interval = interval;
/**
 * @param delay - ms
 */
function timeout(delay, callback, ...args) {
    return new Timeout(delay, callback, ...args);
}
exports.timeout = timeout;
