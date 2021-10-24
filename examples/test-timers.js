#!/usr/bin/env node

import * as timers from "timers-obj"

const ticker = timers.interval(1000, () => {
  console.info("Tick")
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.info("Time is ticking...")
})
