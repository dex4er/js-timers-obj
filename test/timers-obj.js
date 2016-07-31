'use strict'

var t = require('tap')
var timersObj = require('../lib/timers-obj')

var TIMEOUT = 10000

t.plan(6)

t.test('Create and call immediate timer', {timeout: TIMEOUT}, function (t) {
  t.plan(4)

  var timer = timersObj.immediate(function (a, b, c) {
    t.pass('immediate timer is called')
    t.same([a, b, c], [1, 2, 3], 'immediate timer is called with correct arguments')
    timer.remove()
    t.ok(timer, 'immediate timer is removed')
    t.end()
  }, 1, 2, 3)

  t.ok(timer, 'immediate timer is created')
})

t.test('Create and remove immediate timer', {timeout: TIMEOUT}, function (t) {
  t.plan(2)

  var timer = timersObj.immediate(function () {
    t.fail('immediate timer is called')
  })

  t.ok(timer, 'immediate timer is created')
  timer.remove()
  t.ok(timer, 'immediate timer is removed')
  t.end()
})

t.test('Create and call interval timer', {timeout: TIMEOUT}, function (t) {
  t.plan(4)

  var timer = timersObj.interval(1, function (a, b, c) {
    t.pass('interval timer is called')
    t.same([a, b, c], [1, 2, 3], 'immediate timer is called with correct arguments')
    timer.remove()
    t.ok(timer, 'interval timer is removed')
    t.end()
  }, 1, 2, 3)

  t.ok(timer, 'interval timer is created')
})

t.test('Create and remove interval timer', {timeout: TIMEOUT}, function (t) {
  t.plan(2)

  var timer = timersObj.interval(1, function () {
    t.fail('interval timer is called')
  })

  t.ok(timer, 'interval timer is created')
  timer.remove()
  t.ok(timer, 'interval timer is removed')
  t.end()
})

t.test('Create and call timeout timer', {timeout: TIMEOUT}, function (t) {
  t.plan(4)

  var timer = timersObj.timeout(1, function (a, b, c) {
    t.pass('timeout timer is called')
    t.same([a, b, c], [1, 2, 3], 'immediate timer is called with correct arguments')
    timer.remove()
    t.ok(timer, 'timeout timer is removed')
    t.end()
  }, 1, 2, 3)

  t.ok(timer, 'timeout timer is created')
})

t.test('Create and remove timeout timer', {timeout: TIMEOUT}, function (t) {
  t.plan(2)

  var timer = timersObj.timeout(1, function () {
    t.fail('timeout timer is called')
  })

  t.ok(timer, 'timeout timer is created')
  timer.remove()
  t.ok(timer, 'timeout timer is removed')
  t.end()
})
