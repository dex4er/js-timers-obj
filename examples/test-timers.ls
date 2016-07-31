#!/usr/bin/env lsc

require! 'timers-obj': timers

ticker = timers.interval 1000 ->
  console.log 'Tick'

timers.timeout 5000 ->
  ticker.remove!

timers.immediate ->
  console.log 'Time is ticking...'
