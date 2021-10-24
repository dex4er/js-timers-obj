#!/usr/bin/env node_modules/.bin/coffee

timers = await import('../lib/timers-obj.js')

ticker = timers.interval 1000, ->
  console.info 'Tick'

timers.timeout 5000, ->
  ticker.remove()

timers.immediate ->
  console.info 'Time is ticking...'
