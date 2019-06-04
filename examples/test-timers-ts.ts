#!/usr/bin/env ts-node

import * as timers from "../src/timers-obj"

const ticker = timers.interval(1000, () => {
  console.info("Tick")
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.info("Time is ticking...")
})
