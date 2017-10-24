#!/usr/bin/env node

'use strict'

const timers = require('../lib/timers-obj')

let ticker = timers.interval(1000, () => {
  console.info('Tick')
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.info('Time is ticking...')
})
