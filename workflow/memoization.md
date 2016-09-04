# Memoization: Cache successive calls.

Just calculate the value of something once and reuse the value. This avoids the cost of recalculating the same value.

If you need to control a set of small values, you can use a `Map`:

```js
var cache = new Map()

var cityOne = 'Murcia'
var cityTwo = 'Madrid'
var routeName = `${cityOne}${cityTwo}`

if (!cache.has(routeName)) cache.set(routeName, getDistance(cityOne, cityTwo))
```

A more complex, but better solution, would be to control the size of the `Map`. One example would be to use an LRU cache.
