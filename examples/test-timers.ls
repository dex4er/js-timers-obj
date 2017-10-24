#!/usr/bin/env lsc

require! '../lib/timers-obj': timers

ticker = timers.interval 1000 ->
  console.info 'Tick'

timers.timeout 5000 ->
  ticker.remove!

timers.immediate ->
  console.info 'Time is ticking...'
