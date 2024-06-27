/// <reference types="node" />

export type TimerCallback = (...args: any[]) => void

type ms = number

export class Immediate {
  protected timer?: NodeJS.Immediate

  constructor(callback: TimerCallback, ...args: any[]) {
    this.timer = setImmediate(callback, ...args)
  }

  close(): this {
    if (this.timer) {
      clearImmediate(this.timer)
      this.timer = undefined
    }
    return this
  }

  hasRef(): boolean {
    return this.timer?.hasRef() || false
  }

  ref(): this {
    this.timer?.ref()
    return this
  }

  unref(): this {
    this.timer?.unref()
    return this
  }

  [Symbol.dispose]() {
    this.close()
  }
}

export class Interval {
  protected timer?: NodeJS.Timeout

  /**
   * @param delay - ms
   */
  constructor(delay: ms, callback: TimerCallback, ...args: any[]) {
    this.timer = setInterval(callback, delay, ...args)
  }

  close(): this {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = undefined
    }
    return this
  }

  hasRef(): boolean {
    return this.timer?.hasRef() || false
  }

  ref(): this {
    this.timer?.ref()
    return this
  }

  unref(): this {
    this.timer?.unref()
    return this
  }

  refresh(): this {
    this.timer?.refresh()
    return this
  }

  [Symbol.dispose]() {
    this.close()
  }
}

export class Timeout {
  protected timer?: NodeJS.Timeout

  /**
   * @param delay - ms
   */
  constructor(delay: ms, callback: TimerCallback, ...args: any[]) {
    this.timer = setTimeout(callback, delay, ...args)
  }

  close(): this {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    return this
  }

  hasRef(): boolean {
    return this.timer?.hasRef() || false
  }

  ref(): this {
    this.timer?.ref()
    return this
  }

  unref(): this {
    this.timer?.unref()
    return this
  }

  refresh(): this {
    this.timer?.refresh()
    return this
  }

  [Symbol.dispose]() {
    this.close()
  }
}

export function immediate(callback: TimerCallback, ...args: any[]): Immediate {
  return new Immediate(callback, ...args)
}

/**
 * @param delay - ms
 */
export function interval(delay: ms, callback: TimerCallback, ...args: any[]): Interval {
  return new Interval(delay, callback, ...args)
}

/**
 * @param delay - ms
 */
export function timeout(delay: ms, callback: TimerCallback, ...args: any[]): Timeout {
  return new Timeout(delay, callback, ...args)
}
