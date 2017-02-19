## timers-obj

[![Build Status](https://secure.travis-ci.org/dex4er/js-timers-obj.svg)](http://travis-ci.org/dex4er/js-timers-obj) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-timers-obj/badge.svg)](https://coveralls.io/github/dex4er/js-timers-obj) [![npm](https://img.shields.io/npm/v/timers-obj.svg?maxAge=2592000)](https://www.npmjs.com/package/timers-obj)

This module provides the wrappers for standard `timers` module so all timers
(immediate, interval and timeout) can be used as objects.

For constructors, callback argument is after delay argument so it provides more
convenient syntax for [CoffeeScript](http://coffeescript.org/) and
[LiveScript](http://livescript.net/), ie.:

```coffee
timer = timers.interval 1000, ->
  console.log 'Time is ticking'
```

### Installation

```shell
npm install timers-obj
```

### Usage

Require in your script

```js
const timers = require('timers-obj')
```

#### immediate

Create timer

```js
const timer = timers.immediate(cb, [...args])
```

Remove timer

```js
timer.remove()
```

#### interval

Create timer

```js
const timer = timers.interval(delay, cb, [...args])
```

Remove timer

```js
timer.remove()
```

#### timeout

Create timer

```js
const timer = timers.timeout(delay, cb, [...args])
```

Remove timer

```js
timer.remove()
```

### License

Copyright (c) 2016-2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
