# Memoization: Cache successive calls.

Just calculate the value of something once, and reuse the value avoiding the cost of recalculate the same value.

If you need to control of a set of tiny values, you can use an object:

```js
var cache = {}
var cityOne = 'Murcia'
var cityTwo = 'Madrid'
var routeName = cityOne + '-' +  cityTwo

if (!cache[routeName]) cache[routeName] = getDistance(cityOne, cityTwo)
return cache[routeName]
```

If you actually don't know how your cache could grow in memory, be careful. You need a little more sophisticated way as [lru-cache](https://www.npmjs.com/package/lru-cache) to control it.
