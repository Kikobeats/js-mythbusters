# Creating a timestamp

We have different approaches for measuring time, depending if you want to use the system clock as baseline or monotonic time for a better and more secure high resolution timing.

## System Clock

The familiar system clock which tells the time of day is referred to as a real-time clock or a wall-clock. The time on this clock will jump when changed. Relying on the wall-clock to find out how much time has passed since a previous event is a bug waiting to happen.

!> Because you depend of the system clock, you need to setup [timezone environment variable](https://www.cyberciti.biz/faq/linux-unix-set-tz-environment-variable/) property, specially in **production** scenarios.

### Using Date

JavaScript `Date` instance represents a single moment in time.

`Date` objects are based on a time value that is the number of milliseconds since [1 January, 1970 UTC](https://en.wikipedia.org/wiki/Unix_time).

We can get the moment of the time that identify as *now* performing one of these actions:

- `Date.now()`
- `new Date().getTime()`
- `+new Date` *// so clever*

We like `Date.now()` because you are not allocating an object and then calling the method of the object.

This is specially remarkable when you make successive calls (for example, when you append timestamps in logs).

Another thing to consider is the fact that, when you create a `new Date()` you are linking a specific point in time with the object.

Therefore, successive calls to `.getTime()` will have the same output.

```js
const time = new Date()
time.getTime() // => 1472153262516
time.getTime() // => 1472153262516
```

The limitation of use `Date` is that the minimum quantity of time you are measuring is limited to *one-millisecond* resolution, while using browser/server API's methods for high resolution timing you can get resolutions in order of nanoseconds.

## High Resolution Timing

To safely measure elapsed time in a program, you need a clock that ticks out time continuously, without any jumps when a user sets the system time. This kind of clock is called a monotonic clock.

The [High Resolution Timer](High Resolution Timer) was added by the [WebPerf Working Group](http://www.w3.org/2010/webperf/) to allow measurement in the Web Platform with more precision.

!> Perhaps less often considered is that `Date`, based on system time, isn't ideal for real user monitoring either. Most systems run a daemon which regularly synchronizes the time. It is common for the clock to be tweaked a few milliseconds every 15-20 minutes. At that rate about 1% of 10 second intervals measured would be inaccurate.

### perfomance.now

The [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) perform a high resolution time accurate to five thousandths of a millisecond (5 microseconds).

### process.hrtime

[process.hrtime](https://nodejs.org/api/process.html#process_process_hrtime_time) means that the reported time will be monotonically increasing, and not subject to [clock drifts](https://en.wikipedia.org/wiki/Clock_drift).

It returns high-resolution real time `Array` as *[seconds, nanoseconds]*.
