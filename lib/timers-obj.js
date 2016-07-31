'use strict'

function ImmediateObj () {
  this.timer = setImmediate.apply(null, Array.prototype.slice.call(arguments))
}

ImmediateObj.prototype.constructor = ImmediateObj

ImmediateObj.prototype.remove = function () {
  if (this.timer) {
    clearImmediate(this.timer)
    this.timer = null
  }
}

function IntervalObj () {
  this.timer = setInterval.apply(null, Array.prototype.slice.call(arguments))
}

IntervalObj.prototype.constructor = IntervalObj

IntervalObj.prototype.remove = function () {
  if (this.timer) {
    clearInterval(this.timer)
    this.timer = null
  }
}

function TimeoutObj () {
  this.timer = setTimeout.apply(null, Array.prototype.slice.call(arguments))
}

TimeoutObj.prototype.constructor = TimeoutObj

TimeoutObj.prototype.remove = function () {
  if (this.timer) {
    clearTimeout(this.timer)
    this.timer = null
  }
}

module.exports = {
  immediate: function (cb) {
    return new (Function.prototype.bind.apply(ImmediateObj, [null, cb].concat(Array.prototype.slice.call(arguments, 1))))
  },
  interval: function (ms, cb) {
    return new (Function.prototype.bind.apply(IntervalObj, [null, cb, ms].concat(Array.prototype.slice.call(arguments, 2))))
  },
  timeout: function (ms, cb) {
    return new (Function.prototype.bind.apply(TimeoutObj, [null, cb, ms].concat(Array.prototype.slice.call(arguments, 2))))
  }
}
