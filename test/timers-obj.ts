import {expect} from "chai"

import {And, Feature, Given, Scenario, Then, When} from "./lib/steps.js"

import * as timersObj from "../src/timers-obj.js"

Feature("Test timers-obj module", () => {
  Scenario("Create and call immediate timer", () => {
    let args: number[]
    let callback: timersObj.TimerCallback
    let timer: timersObj.Immediate

    Given("callback with arguments for timer", () => {
      callback = (done: Mocha.Done, a: number, b: number, c: number) => {
        args = [a, b, c]
        done()
      }
    })

    When("I create immediate timer", done => {
      timer = timersObj.immediate(callback, done, 1, 2, 3)
    })

    Then("timer called callback with correct arguments", () => {
      expect(args).to.deep.equal([1, 2, 3])
    })

    And("timer can be closed", () => {
      timer.close()
    })
  })

  Scenario("Create and remove immediate timer", () => {
    let callback: timersObj.TimerCallback
    let called: boolean
    let timer: timersObj.Immediate

    Given("callback for timer", () => {
      called = false
      callback = () => {
        called = true
      }
    })

    When("I create immediate timer which is immediately closed", () => {
      timer = timersObj.immediate(callback)
      timer.close()
    })

    Then("callback is not called", () => {
      expect(called).to.be.false
    })
  })

  Scenario("Create and call interval timer", () => {
    let args: number[]
    let callback: timersObj.TimerCallback
    let seen: boolean = false
    let timer: timersObj.Interval

    Given("callback with arguments for timer", () => {
      callback = (done: Mocha.Done, a: number, b: number, c: number) => {
        if (!seen) {
          seen = true
          args = [a, b, c]
          done()
        }
      }
    })

    When("I create interval timer", done => {
      timer = timersObj.interval(0, callback, done, 1, 2, 3)
    })

    Then("timer called callback with correct arguments", () => {
      expect(args).to.deep.equal([1, 2, 3])
    })

    And("timer can be closed", () => {
      timer.close()
    })
  })

  Scenario("Create and remove interval timer", () => {
    let callback: timersObj.TimerCallback
    let called: boolean = false
    let timer: timersObj.Interval

    Given("callback for timer", () => {
      called = false
      callback = () => {
        called = true
      }
    })

    When("I create interval timer which is immediately closed", () => {
      timer = timersObj.interval(0, callback)
      timer.close()
    })

    Then("callback is not called", () => {
      expect(called).to.be.false
    })
  })

  Scenario("Create and call timeout timer", () => {
    let args: number[]
    let callback: timersObj.TimerCallback
    let timer: timersObj.Timeout

    Given("callback with arguments for timer", () => {
      callback = (done: Mocha.Done, a: number, b: number, c: number) => {
        args = [a, b, c]
        done()
      }
    })

    When("I create timeout timer", done => {
      timer = timersObj.timeout(0, callback, done, 1, 2, 3)
    })

    Then("timer called callback with correct arguments", () => {
      expect(args).to.deep.equal([1, 2, 3])
    })

    And("timer can be closed", () => {
      timer.close()
    })
  })

  Scenario("Create and remove timeout timer", () => {
    let callback: timersObj.TimerCallback
    let called: boolean = false
    let timer: timersObj.Timeout

    Given("callback for timer", () => {
      called = false
      callback = () => {
        called = true
      }
    })

    When("I create timeout timer which is immediately closed", () => {
      timer = timersObj.timeout(0, callback)
      timer.close()
    })

    Then("callback is not called", () => {
      expect(called).to.be.false
    })
  })
})
