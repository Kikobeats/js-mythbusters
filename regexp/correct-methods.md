# Use the correct `RegExp` method

In general:

- Use `.test` if you want a fast boolean check.
- Use `.match` to retrieve all matches when using the `g` flag.

> It is possible to gain extra perfomance using `String` method to match `RegExp` instead of `RegExp` to match `String`. It depends on your use case and of your JavaScript engine. Check [test#1](https://jsperf.com/regexp-test-search-vs-indexof/12), [test#2](https://jsperf.com/regex-methods-x-1/2) and [test#3](https://jsperf.com/test-vs-indexof-fast/5) benchmarks.
