#### Instead of String.concat, use '+='.

It's no clear why this happens. We suppose that `String.concat` is part of a Class and need to wrap more things.

In general terms, `+=` is faster, but depends of your JavaScript Engine and version.

Check [test#1](https://jsperf.com/concat-vs-plus-vs-join) and [test#2](https://jsperf.com/string-concat-fast/17) benchmarks.
