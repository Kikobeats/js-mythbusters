#### Avoid try/catch

Certain constructs like `try/catch` are considered not optimizable for the JavaScript engine, so avoid handle business logic inside. Just for pass an error as callback and this type of things.

A good approach for support optimization with throweable code is return an `Error` an later check about the type.

```js
function mayBeError () {
  /*  ... */
}

var result = maybeError()

if (result instanceof Error) {
	/* do something under error */
}

/* in other case no error */
```
