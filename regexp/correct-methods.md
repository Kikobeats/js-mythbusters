# Use the correct `RegExp` method

In general terms:

- Use `.test` if you want a faster boolean check.
- Use `.match` to retrieve all matches when using the g global flag.

> It's possible that you can gain an extra of perfomance using String method to match `RegExp` instead of RegExp to match String. It's depends of your case of use and of your JavaScript Engine. Check [test#1](https://jsperf.com/regexp-test-search-vs-indexof/12), [test#2](https://jsperf.com/regex-methods-x-1/2) & [test#3](https://jsperf.com/test-vs-indexof-fast/5) benchmarks.
