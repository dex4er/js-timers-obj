#!/usr/bin/env -S node --experimental-specifier-resolution=node --experimental-modules --no-warnings --loader ts-node/esm

import * as timers from "../src/timers-obj.js"

const ticker = timers.interval(1000, () => {
  console.info("Tick")
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.info("Time is ticking...")
})
