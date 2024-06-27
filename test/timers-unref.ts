import {expect} from "chai"

import {And, Feature, Given, Scenario, Then, When} from "./lib/steps.js"

import * as timersObj from "../src/timers-obj.js"

Feature("Test timers-obj module for ref and unref", () => {
  Scenario("Ref and unref immediate timer", () => {
    let callback: timersObj.TimerCallback
    let hasRef: boolean
    let timer: timersObj.Immediate

    Given("callback for timer", () => {
      callback = () => {}
    })

    When("I create immediate timer", () => {
      timer = timersObj.immediate(callback)
      hasRef = timer.hasRef()
    })

    Then("Timer has ref", () => {
      expect(hasRef).to.be.true
    })

    And("Ref can be called", () => {
      timer.ref()
    })

    And("Unref can be called and it won't block the event loop", () => {
      timer.unref()
    })

    And("Timer has not ref anymore", () => {
      expect(timer.hasRef()).to.be.false
    })
  })

  Scenario("Ref and unref interval timer", () => {
    let callback: timersObj.TimerCallback
    let hasRef: boolean
    let timer: timersObj.Interval

    Given("callback for timer", () => {
      callback = () => {}
    })

    When("I create interval timer", () => {
      timer = timersObj.interval(1000, callback)
      hasRef = timer.hasRef()
    })

    Then("Timer has ref", () => {
      expect(hasRef).to.be.true
    })

    And("Ref can be called", () => {
      timer.ref()
    })

    And("Unref can be called and it won't block the event loop", () => {
      timer.unref()
    })

    And("Timer has not ref anymore", () => {
      expect(timer.hasRef()).to.be.false
    })
  })

  Scenario("Ref and unref timeout timer", () => {
    let callback: timersObj.TimerCallback
    let hasRef: boolean
    let timer: timersObj.Timeout

    Given("callback for timer", () => {
      callback = () => {}
    })

    When("I create timeout timer", () => {
      timer = timersObj.timeout(1000, callback)
      hasRef = timer.hasRef()
    })

    Then("Timer has ref", () => {
      expect(hasRef).to.be.true
    })

    And("Ref can be called", () => {
      timer.ref()
    })

    And("Unref can be called and it won't block the event loop", () => {
      timer.unref()
    })

    And("Timer has not ref anymore", () => {
      expect(timer.hasRef()).to.be.false
    })
  })
})
