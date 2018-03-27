# Deferring by a tick

[Timers](https://nodejs.org/en/docs/guides/timers-in-node/) are functions for executing code after a set period of time.

Due to historical reasons, the way you interact with timers functions depend of on where you are running the code.

Although they are used in a homogeneous way, these functions work slightly different between them in terms of performance:

- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) is the most generic, but a bit slow because its clamped to 4ms.
- [setImmediate](https://nodejs.org/api/timers.html#timers_setimmediate_callback_args) is not available in most places (and probably never will be).
- [process.nextTick](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) is only in Node.js.
- [Promise#then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) needs polyfills in places.

A simple and tiny library to ensure to use the fastest timer function available is [tickedoff](https://github.com/jamiebuilds/tickedoff).
