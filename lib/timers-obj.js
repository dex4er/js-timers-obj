'use strict'

class Immediate {
  constructor (callback, ...args) {
    this.timer = setImmediate(callback, ...args)
  }

  remove () {
    if (this.timer) {
      clearImmediate(this.timer)
      this.timer = null
    }
  }
}

class Interval {
  constructor (delay, callback, ...args) {
    this.timer = setInterval(callback, delay, ...args)
  }

  remove () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}

class Timeout {
  constructor (delay, callback, ...args) {
    this.timer = setTimeout(callback, delay, ...args)
  }

  remove () {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}

function immediate (callback, ...args) {
  return new Immediate(callback, ...args)
}

function interval (delay, callback, ...args) {
  return new Interval(delay, callback, ...args)
}

function timeout (delay, callback, ...args) {
  return new Timeout(delay, callback, ...args)
}

module.exports = {
  Immediate: Immediate,
  Interval: Interval,
  Timeout: Timeout,
  immediate: immediate,
  interval: interval,
  timeout: timeout
}
