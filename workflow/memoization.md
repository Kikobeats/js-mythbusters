# Memoization: Caching successive calls

Just calculate the value of something once and reuse the value. This avoids the cost of recalculating the same value.

```js
var cache = Object.create(null)

var cityOne = 'Murcia'
var cityTwo = 'Madrid'
var routeName = `${cityOne}${cityTwo}`

if (!cache[routeName]) cache[routeName] = getDistance(cityOne, cityTwo)
```

Notes that first line is `Object.create(null)`. This create a `Object` without `prototype`. because we want a pure object for be used as a Hash Table (with all the [prototypical method](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/prototype) missing).

If you need more control about your cache, you can create it using Map or WeakMap structures. Specially use it when you want to remove items from the cache.

[LRU](https://www.npmjs.com/package/lru) or [mem](https://www.npmjs.com/package/mem) are good high level libraries that implement this technique.
