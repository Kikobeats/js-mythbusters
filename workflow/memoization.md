# Memoization: Cache successive calls.

Just calculate the value of something once, and reuse the value avoiding the cost of recalculate the same value.

If you need to control of a set of tiny values, you can use an `Map`:

```js
var cache = new Map()

var cityOne = 'Murcia'
var cityTwo = 'Madrid'
var routeName = `${cityOne}${cityTwo}`

if (!cache.has(routeName)) cache.set(routeName, getDistance(cityOne, cityTwo))
```

A little complex but better solution will be control the size of the `Map`, as LRU cache.
