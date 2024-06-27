import {expect} from "chai"

import {setTimeout} from "node:timers/promises"

import {And, Feature, Given, Scenario, Then, When} from "./lib/steps.js"

import * as timersObj from "../src/timers-obj.js"

Feature("Test timers-obj module for refresh", () => {
  Scenario("Refresh interval timer", () => {
    let callback: timersObj.TimerCallback
    let seen: boolean = false
    let timer: timersObj.Interval

    Given("callback for timer", () => {
      callback = () => {
        seen = true
      }
    })

    When("I create interval timer", () => {
      timer = timersObj.interval(1000, callback)
    })

    And("wait a little", async () => {
      await setTimeout(500)
    })

    Then("callback was not yet seen", async () => {
      expect(seen).to.be.false
    })

    When("I refresh the timer", async () => {
      timer.refresh()
    })

    And("wait a little longer", async () => {
      await setTimeout(700)
    })

    Then("callback was not yet seen", () => {
      expect(seen).to.be.false
    })

    When("wait a little longer", async () => {
      await setTimeout(300)
    })

    Then("callback was seen", () => {
      expect(seen).to.be.true
    })

    And("timer can be closed", () => {
      timer.close()
    })
  })

  Scenario("Refresh timeout timer", () => {
    let callback: timersObj.TimerCallback
    let seen: boolean = false
    let timer: timersObj.Timeout

    Given("callback for timer", () => {
      callback = () => {
        seen = true
      }
    })

    When("I create interval timer", () => {
      timer = timersObj.timeout(1000, callback)
    })

    And("wait a little", async () => {
      await setTimeout(500)
    })

    Then("callback was not yet seen", async () => {
      expect(seen).to.be.false
    })

    When("I refresh the timer", async () => {
      timer.refresh()
    })

    And("wait a little longer", async () => {
      await setTimeout(700)
    })

    Then("callback was not yet seen", () => {
      expect(seen).to.be.false
    })

    When("wait a little longer", async () => {
      await setTimeout(300)
    })

    Then("callback was seen", () => {
      expect(seen).to.be.true
    })

    And("timer can be closed", () => {
      timer.close()
    })
  })
})
