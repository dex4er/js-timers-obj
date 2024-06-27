#!/usr/bin/env -S node --experimental-specifier-resolution=node --experimental-modules --no-warnings --loader ts-node/esm

import * as timers from "../src/timers-obj.js"
import {scheduler} from "node:timers/promises"

using _ticker = timers.interval(1000, () => {
  console.info("Tick")
})

await scheduler.wait(5500)
