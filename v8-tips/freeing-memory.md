# Freeing memory by assigning `null`

If you want to delete a property of an `Object`, set the property to `null`:

```js
// Inefficent way (Bad)
var foo = { bar: 'hello world' }
delete foo.bar

// Efficent way (Good)
var foo = { bar: 'hello world' }
foo.bar = null
```

If you want do delete the `Object` entirely, then simply `foo = null`.

Garbage Collector is interested in `Object`'s that are not referenced by any other `Object`. On the other hand, JavaScript engines can detect such *hot* `Object`'s and attempt to optimize them.

This is easier if the `Object`'s structure doesn’t heavily change over its lifetime. Using `delete` can trigger such changes.

This also is applicable to `Array`.
