### Object/Arrays initialization inline

```js
var array = []
array[0] = 77   // Allocates
array[1] = 88
array[2] = 0.5  // Allocates, converts
array[3] = true // Allocates, converts
```

is less efficient than:

```js
var array = [77, 88, 0.5, true]
```

Because in the first example the individual assignments are performed one after another, and the assignment of `a[2]` causes the Array to be converted to an Array of unboxed doubles, but then the assignment of `a[3]` causes it to be re-converted back to an Array that can contain any values (`Number` or `Object`). In the second case, the compiler knows the types of all of the elements in the literal, and the hidden class can be determined up front.

Another example:

```js
var array = []
for (var i = 0; i < 10; i++) array[0] |= i  // Oh no!
```

versus:

```js
var array = []
array[0] = 0
for (var i = 0; i < 10; i++) array[0] |= i  // Much better! 2x faster.
```

Any name used as property name that is not a string is stringified via `.toString()`, even numbers, so 1 becomes "1".

Also, `Arrays` in JavaScript are just `Objects` with magic length property.
