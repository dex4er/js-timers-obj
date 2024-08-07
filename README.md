# timers-obj

<!-- markdownlint-disable MD013 -->

[![GitHub](https://img.shields.io/github/v/release/dex4er/js-timers-obj?display_name=tag&sort=semver)](https://github.com/dex4er/js-timers-obj)
[![CI](https://github.com/dex4er/js-timers-obj/actions/workflows/ci.yaml/badge.svg)](https://github.com/dex4er/js-timers-obj/actions/workflows/ci.yaml)
[![Trunk Check](https://github.com/dex4er/js-timers-obj/actions/workflows/trunk.yaml/badge.svg)](https://github.com/dex4er/js-timers-obj/actions/workflows/trunk.yaml)
[![Coverage Status](https://coveralls.io/repos/github/dex4er/js-timers-obj/badge.svg)](https://coveralls.io/github/dex4er/js-timers-obj)
[![npm](https://img.shields.io/npm/v/timers-obj.svg)](https://www.npmjs.com/package/timers-obj)

<!-- markdownlint-enable MD013 -->

This module provides the wrappers for the standard
[timers](https://nodejs.org/api/timers.html) module so all timers (immediate,
interval and timeout) can be used as objects.

The classes are separate for each timer to prevent mistakes, ie. closing the
wrong timer.

For constructors, the callback argument is after `delay` argument so it
provides a more convenient syntax for
[CoffeeScript](http://coffeescript.org/) and
[LiveScript](http://livescript.net/), ie.:

```coffee
timers = await import('timers-obj')

timer = timers.interval 1000, ->
  console.log 'Time is ticking'
```

## Requirements

This is an ESM module that requires ES2021 and Node >= 16.

## Installation

```shell
npm install timers-obj
```

_Additionally for Typescript:_

```shell
npm install -D @types/node
```

## Usage

```js
import * as timers from "timers-obj"
```

or:

```js
import {Immediate, immediate, Interval, interval, Timeout, timeout} from "timers-obj"
```

### immediate

Creates timer with immediate callback.

```js
const timer = timers.immediate(cb, [...args])
```

### interval

Creates timer with callback run in intervals.

```js
const timer = timers.interval(delay, cb, [...args])
```

### timeout

Creates timer with callback run after timeout.

```js
const timer = timers.timeout(delay, cb, [...args])
```

### close

Closes timer.

```js
timer = timer.close()
```

The method returns this object.

### hasRef

Returns `true` if the object will keep the Node.js event loop active.

```js
const hasRef = timer.hasRef()
```

### ref

Requests that the Node.js event loop does not exit so long as the Timeout is
active.

```js
timer = timer.ref()
```

The method returns this object.

### unref

Requests that the Node.js event loop exits even if the Timeout is active.

```js
timer = timer.unref()
```

The method returns this object.

### refresh

Sets the timer's start time to the current time. Only for interval and
timeout timers.

```js
timer = timer.refresh()
```

The method returns this object.

### [Symbol.dispose]

Clears the timer at the end of a scope.

```ts
using timer = timers.immediate(cb, [...args])
using timer = timers.interval(delay, cb, [...args])
using timer = timers.timeout(delay, cb, [...args])
```

## License

Copyright (c) 2016-2024 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
