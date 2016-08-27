# Freeing memory by assigning `null`

If you want to delete a property of a `Object` uses:

```js
var foo = { bar: 'hello world' }
foo.bar = null
```

Instead of:

```js
var foo = { bar: 'hello world' }
delete foo.bar
```

If you want do delete the `Object` enterely, then simply `foo = null`.

Garbage Collector are interested in `Object`'s that are not referenced by any other `Object`.

On the other hand, JavaScript engines can detect such *hot* `Object`'s and attempt to optimize them.

This is easier if the `Object`'s structure doesn’t heavily change over its lifetime and delete can trigger such changes.

This also is applicable to `Array`.
