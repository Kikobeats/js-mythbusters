# `arguments` is special

There are numerous ways to use `arguments` in a way that causes the function to be unoptimizable. One must be extremely careful when using `arguments`.

Only use:

* `arguments.length`.
* `arguments[i]` where `i` is always a valid integer index into the `arguments`, and can not be out of bound.
* Never use `arguments` directly without `.length` or `[i]`.
* STRICTLY `fn.apply(y, arguments)` is ok, nothing else is, e.g. `.slice`, That's because `Function#apply` is special.
* Be aware that adding properties to functions (e.g. `fn.$inject =...`) and bound functions (i.e. the result of `Function#bind`) generate hidden classes and, therefore, are not safe when using `.apply`.
