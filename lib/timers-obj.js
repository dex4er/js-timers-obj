'use strict'

class ImmediateObj {
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

class IntervalObj {
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

class TimeoutObj {
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

module.exports = {
  immediate: (callback, ...args) => {
    return new ImmediateObj(callback, ...args)
  },
  interval: (delay, callback, ...args) => {
    return new IntervalObj(delay, callback, ...args)
  },
  timeout: (delay, callback, ...args) => {
    return new TimeoutObj(delay, callback, ...args)
  }
}
