#!/usr/bin/env coffee

timers = require '../lib/timers-obj'

ticker = timers.interval 1000, ->
  console.info 'Tick'

timers.timeout 5000, ->
  ticker.remove()

timers.immediate ->
  console.info 'Time is ticking...'
