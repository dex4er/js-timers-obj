# timers-obj

<!-- markdownlint-disable MD013 -->

[![Build Status](https://api.travis-ci.com/dex4er/js-timers-obj.svg)](https://app.travis-ci.com/github/dex4er/js-timers-obj) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-timers-obj/badge.svg)](https://coveralls.io/github/dex4er/js-timers-obj) [![npm](https://img.shields.io/npm/v/timers-obj.svg)](https://www.npmjs.com/package/timers-obj)

<!-- markdownlint-enable MD013 -->

This module provides the wrappers for standard
[timers](https://nodejs.org/api/timers.html) module so all timers (immediate,
interval and timeout) can be used as objects.

For constructors, callback argument is after delay argument so it provides more
convenient syntax for [CoffeeScript](http://coffeescript.org/) and
[LiveScript](http://livescript.net/), ie.:

```coffee
timers = await import('timers-obj')

timer = timers.interval 1000, ->
  console.log 'Time is ticking'
```

## Requirements

This is ESM module which requires ES2020 and Node >= 14.

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

Create timer

```js
const timer = timers.immediate(cb, [...args])
```

Remove timer

```js
timer.remove()
```

### interval

Create timer

```js
const timer = timers.interval(delay, cb, [...args])
```

Remove timer

```js
timer.remove()
```

### timeout

Create timer

```js
const timer = timers.timeout(delay, cb, [...args])
```

Remove timer

```js
timer.remove()
```

## License

Copyright (c) 2016-2021 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
