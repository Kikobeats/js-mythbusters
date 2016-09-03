# Interpolating variables

Instead of [String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

The reason is that this way to concat is more primitive and need less wrapping around the `String` object.

Check [test#1](https://jsperf.com/concat-vs-plus-vs-join) and [test#2](https://jsperf.com/string-concat-fast/17) benchmarks.
