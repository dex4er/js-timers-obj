'use strict'

const timersObj = require('../lib/timers-obj')

/* global Feature, Scenario, Given, When, Then */
const t = require('tap')
require('tap-given')(t)
require('chai').should()

Feature('Test timers-obj module', () => {
  Scenario('Create and call immediate timer', function () {
    Given('callback with arguments for timer', () => {
      this.callback = (done, a, b, c) => {
        this.arguments = [a, b, c]
        done()
      }
    })

    When('I create immediate timer', done => {
      this.timer = timersObj.immediate(this.callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      this.arguments.should.deep.equal([1, 2, 3])
    })

    Then('timer can be removed', () => {
      this.timer.remove()
    })
  })

  Scenario('Create and remove immediate timer', () => {
    Given('callback for timer', () => {
      this.called = false
      this.callback = () => {
        this.called = true
      }
    })

    When('I create immediate timer which is immediately removed', () => {
      this.timer = timersObj.immediate(this.callback)
      this.timer.remove()
    })

    Then('callback is not called', () => {
      this.called.should.be.false
    })
  })

  Scenario('Create and call interval timer', function () {
    Given('callback with arguments for timer', () => {
      this.callback = (done, a, b, c) => {
        this.arguments = [a, b, c]
        done()
      }
    })

    When('I create interval timer', done => {
      this.timer = timersObj.interval(0, this.callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      this.arguments.should.deep.equal([1, 2, 3])
    })

    Then('timer can be removed', () => {
      this.timer.remove()
    })
  })

  Scenario('Create and remove interval timer', () => {
    Given('callback for timer', () => {
      this.called = false
      this.callback = () => {
        this.called = true
      }
    })

    When('I create interval timer which is immediately removed', () => {
      this.timer = timersObj.interval(0, this.callback)
      this.timer.remove()
    })

    Then('callback is not called', () => {
      this.called.should.be.false
    })
  })

  Scenario('Create and call timeout timer', function () {
    Given('callback with arguments for timer', () => {
      this.callback = (done, a, b, c) => {
        this.arguments = [a, b, c]
        done()
      }
    })

    When('I create timeout timer', done => {
      this.timer = timersObj.timeout(0, this.callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      this.arguments.should.deep.equal([1, 2, 3])
    })

    Then('timer can be removed', () => {
      this.timer.remove()
    })
  })

  Scenario('Create and remove timeout timer', () => {
    Given('callback for timer', () => {
      this.called = false
      this.callback = () => {
        this.called = true
      }
    })

    When('I create timeout timer which is immediately removed', () => {
      this.timer = timersObj.timeout(0, this.callback)
      this.timer.remove()
    })

    Then('callback is not called', () => {
      this.called.should.be.false
    })
  })
})
