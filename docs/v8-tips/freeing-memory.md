# Freeing memory

If you want to remove a property from an `Object`, probably you are considering use `delete`: 

```js
var foo = { bar: 'hello world' }
delete foo.bar // Inefficient way (bad)
```

But this action have serious performance degradation. A most common technique with the same effect is assign `undefined`:

```js
var foo = { bar: 'hello world' }
foo.bar = undefined // Efficient way (good)
```

The problem with `delete` boils down to the way V8 handles the dynamic nature of JavaScript objects and the (also potentially dynamic) prototype chains that make property lookups even more complex at an implementation level.

The garbage collector is interested in `Object`s that are not referenced by any other `Object`. On the other hand, JavaScript engines can detect such *hot* `Object`s and attempt to optimize them.

This is easier if the `Object`'s structure doesn’t heavily change over its lifetime. Using `delete` can trigger such changes.

This also is applicable to `Array`.
