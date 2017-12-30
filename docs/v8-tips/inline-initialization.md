# Inline Initialization

When you need to create a new `Object` (including `Array`s, because `Array`s in JavaScript are just `Object` with a magical [`.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property), you can do that following two approaches.

The first approach is to declare the new `Object` and later attach the information that we want to associate to the `Object`:

```js
var array = []
array[0] = 77   // Allocates
array[1] = 88   // Allocates
array[2] = 0.5  // Allocates, converts
array[3] = true // Allocates, converts
```

In this example, the individual assignments are performed one after the other, and the assignment of `a[2]` causes the `Array` to be converted to an `Array` of unboxed doubles, but then the assignment of `a[3]` causes it to be re-converted back to an `Array` that can contain any values (`Number` or `Object`).

<br>

A more immediate solution is to attach all the information in one call:

```js
var array = [ 77, 88, 0.5, true ]
```

Now, the compiler knows the types of all of the elements in the literal, and the **hidden class** can be determined up front.

<br>

Imagine that you want to have an `Array` of elements but you can't build it in one call. You need to build it dynamically. How do you do it?

An immediate solution would be:

```js
var array = []
for (var i = 0; i < 10; i++) array[i] |= 0  // Oh no!
```

This piece of code is accessing an element that doesn't exist in the array, and in this case the specs says that it wants to return `undefined` that later is converted into `0`, so you need to do this extra effort simply to compare with `0`.


The array is being re-converted all time, but knowing how **hidden classes** act, a better solution in terms of performance would be:

```js
var array = []
array[0] = 0
for (var i = 0; i < 10; i++) array[i] |= i  // Much better! 2x faster.
```
 
This second piece of code is simply better in terms of perfomance because we initialize a value out of the array with the same type as the element on the loops, so we avoid transforming the type of the array all the time.
