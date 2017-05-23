# Creating timestamp

We have different approach for measure time, depending on the environment where we are running the code.

## Using `Date`

The universal way.

Using `Date` we can perform two actions for the same purpose:

- `Date.now()`
- `new Date().getTime()`

Althought both have the same output, but `Date.now()` is faster because you are not allocating an object and then calling the method of the object.

This is specially remarkable when you make successive calls (for example, when you append timestamps in logs).

Another thing to consider is the fact that, when you create a new Date() you are linking a specific point in time with the object. Therefore, successive calls to .getTime() will have the same output.

```js
var time = new Date()
time.getTime() // => 1472153262516
time.getTime() // => 1472153262516
```

The limitation of use `Date` is that the mimimum quantity of time is limited to one-millisecond resolution, while using browser/server API's methods for high resolution timming you can get resolution in order of nanoseconds.

## Using `perfomance.now`

The [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) perform a high resolution time accurate to five thousandths of a millisecond (5 microseconds).

## Using `process.hrtime`

THe [process.hrtime](https://nodejs.org/api/process.html#process_process_hrtime_time) returns high-resolution real time in *[seconds, nanoseconds]* `Array`. 

The time `Array` is relative to an arbitrary time in the past (not related to the time of day) and therefore not subject to [clock drifts](https://en.wikipedia.org/wiki/Clock_drift).
