# Inline Initialization

When you need to create a new `Object` (including and `Array`, because an `Array` in JavaScript are just `Object` with a magical [`.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property), you can do that following two approaches.

The first approach is to declare the new `Object` and later attach the information that we want to associate to the `Object`:

```js
const array = []
array[0] = 77 // Allocates
array[1] = 88 // Allocates
array[2] = 0.5 // Allocates, converts
array[3] = true // Allocates, converts
```

In this example, the individual assignments are performed one after the other, and the assignment of `a[2]` causes the `Array` to be converted to an `Array` of unboxed doubles, but then the assignment of `a[3]` causes it to be re-converted back to an `Array` that can contain any values (`Number` or `Object`).

A more immediate solution is to attach all the information in one call:

```js
const array = [77, 88, 0.5, true]
```

In the above code, the compiler knows the types of all of the elements in the literal, and the [hidden classes](/v8-tips/hidden-classes) can be determined up front.