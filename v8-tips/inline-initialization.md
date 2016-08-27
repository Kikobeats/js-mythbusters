# Inline Initialization

When you need to create a new `Object` (included `Array`, because `Array` in JavaScript are just `Object` with magic [`.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property), you can do that following two approach.

The first approach is declared the new `Object` and later attach the information that we want to associated with the `Object`:

```js
var array = []
array[0] = 77   // Allocates
array[1] = 88
array[2] = 0.5  // Allocates, converts
array[3] = true // Allocates, converts
```

In this example, the individual assignments are performed one after another, and the assignment of `a[2]` causes the `Array` to be converted to an `Array` of unboxed doubles, but then the assignment of `a[3]` causes it to be re-converted back to an `Array` that can contain any values (`Number` or `Object`).

<br>

A more inmediate solution is attach all the informaton in one call:

```js
var array = [ 77, 88, 0.5, true ]
```

Now in this case, the compiler knows the types of all of the elements in the literal, and the **hidden class** can be determined up front.

<br>

Imagine that you want to have an `Array` of elements but you can't build it in one call you need to build it dynamically. How to?

An inmediate solution would be:


```js
var array = []
for (var i = 0; i < 10; i++) array[0] |= i  // Oh no!
```

but knowing how **hidden class** act, a better solution in terms of performance would be:

```js
var array = []
array[0] = 0
for (var i = 0; i < 10; i++) array[0] |= i  // Much better! 2x faster.
```

Because in the first piece of code you are accessing an element that doesn't exist in the array, and in this case the specs says that it wants to return `undefined` that later is converted into `0`, so you need to do this extra effort simply to compare with `0`.

Maybe for that you could be a interest for you use [`Array.prototype.fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).
