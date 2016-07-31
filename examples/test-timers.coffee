#!/usr/bin/env coffee

timers = require 'timers-obj'

ticker = timers.interval 1000, ->
  console.log 'Tick'

timers.timeout 5000, ->
  ticker.remove()

timers.immediate ->
  console.log 'Time is ticking...'
