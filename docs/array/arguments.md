# arguments is special

There are numerous ways to use `arguments` in a way that causes the function to be unoptimizable. One must be extremely careful when using `arguments`.

Only use:

* `arguments.length`.
* `arguments[i]` where `i` is always a valid integer index into the `arguments`, and can not be out of bound.
* Never use `arguments` directly without `.length` or `[i]`.
* STRICTLY `fn.apply(y, arguments)` is ok, nothing else is (e.g. `.slice`). That's because `Function#apply` is special.
* Be aware that adding properties to functions (e.g. `fn.$inject =...`) and bound functions (i.e. the result of `Function#bind`) generate hidden classes and, therefore, are not safe when using `.apply`.

If you need to process the input of a function as an `array`, a good performance approach is manipulate a copy of `arguments`. You can do it using `spread operator`:

```js
function spreadOp (...args) {
  return other(args)
}
```

If you are in a scenario where is not possible to use `spread operator`, we recommend use the tiny [sliced](https://github.com/aheckmann/sliced) library for making a copy of the `array`:

```js
const sliced = require('sliced')

function myFunctionWithArgs () {
  const args = sliced(arguments)
}
```
