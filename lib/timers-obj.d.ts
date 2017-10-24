/// <reference types="node" />

export type TimerCallback = (...args: any[]) => void

export class Immediate {
  readonly timer: NodeJS.Timer
  constructor (callback: TimerCallback, ...args: any[])
  remove (): void
}

export class Interval {
  readonly timer: NodeJS.Timer
  constructor (delay: number, callback: TimerCallback, ...args: any[])
  remove (): void
}

export class Timeout {
  readonly timer: NodeJS.Timer
  constructor (delay: number, callback: TimerCallback, ...args: any[])
  remove (): void
}

export function immediate (callback: TimerCallback, ...args: any[]): Immediate
export function interval (delay: number, callback: TimerCallback, ...args: any[]): Interval
export function timeout (delay: number, callback: TimerCallback, ...args: any[]): Timeout
