# Avoid try/catch

Certain constructs like `try/catch` are considered not optimizable by the JavaScript engine, so avoid handling business logic inside.

Just pass an error handler as a callback for this type of things.

Or maybe the thing that you need to avoid is synchronous code? :P

A good approach for supporting optimization with throweable code is to return an `Error` and later and check the type.

```js
function maybeError () {
  /*  ... */
}

var result = maybeError()

if (result instanceof Error) {
  /* do something under error */
}

/* in other case no error */
```
