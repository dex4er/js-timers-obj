#!/usr/bin/env node

import * as timers from "../lib/timers-obj.js"

const ticker = timers.interval(1000, () => {
  console.info("Tick")
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.info("Time is ticking...")
})
