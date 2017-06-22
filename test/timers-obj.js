'use strict'

const timersObj = require('../lib/timers-obj')

const t = require('tap')
require('tap-given')(t)
const chai = require('chai')
chai.should()
chai.use(require('dirty-chai'))

Feature('Test timers-obj module', () => {
  Scenario('Create and call immediate timer', () => {
    let args
    let callback
    let timer

    Given('callback with arguments for timer', () => {
      callback = (done, a, b, c) => {
        args = [a, b, c]
        done()
      }
    })

    When('I create immediate timer', done => {
      timer = timersObj.immediate(callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      args.should.deep.equal([1, 2, 3])
    })

    And('timer can be removed', () => {
      timer.remove()
    })
  })

  Scenario('Create and remove immediate timer', () => {
    let callback
    let called
    let timer

    Given('callback for timer', () => {
      called = false
      callback = () => {
        this.called = true
      }
    })

    When('I create immediate timer which is immediately removed', () => {
      timer = timersObj.immediate(callback)
      timer.remove()
    })

    Then('callback is not called', () => {
      called.should.be.false()
    })
  })

  Scenario('Create and call interval timer', () => {
    let args
    let callback
    let timer

    Given('callback with arguments for timer', () => {
      callback = (done, a, b, c) => {
        args = [a, b, c]
        done()
      }
    })

    When('I create interval timer', done => {
      timer = timersObj.interval(0, callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      args.should.deep.equal([1, 2, 3])
    })

    And('timer can be removed', () => {
      timer.remove()
    })
  })

  Scenario('Create and remove interval timer', () => {
    let callback
    let called
    let timer

    Given('callback for timer', () => {
      called = false
      callback = () => {
        called = true
      }
    })

    When('I create interval timer which is immediately removed', () => {
      timer = timersObj.interval(0, callback)
      timer.remove()
    })

    Then('callback is not called', () => {
      called.should.be.false()
    })
  })

  Scenario('Create and call timeout timer', () => {
    let args
    let callback
    let timer

    Given('callback with arguments for timer', () => {
      callback = (done, a, b, c) => {
        args = [a, b, c]
        done()
      }
    })

    When('I create timeout timer', done => {
      timer = timersObj.timeout(0, callback, done, 1, 2, 3)
    })

    Then('timer called callback with correct arguments', () => {
      args.should.deep.equal([1, 2, 3])
    })

    And('timer can be removed', () => {
      timer.remove()
    })
  })

  Scenario('Create and remove timeout timer', () => {
    let callback
    let called
    let timer

    Given('callback for timer', () => {
      called = false
      callback = () => {
        called = true
      }
    })

    When('I create timeout timer which is immediately removed', () => {
      timer = timersObj.timeout(0, callback)
      timer.remove()
    })

    Then('callback is not called', () => {
      called.should.be.false()
    })
  })
})
