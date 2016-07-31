'use strict'

const timers = require('timers-obj')

let ticker = timers.interval(1000, () => {
  console.log('Tick')
})

timers.timeout(5000, () => {
  ticker.remove()
})

timers.immediate(() => {
  console.log('Time is ticking...')
})
