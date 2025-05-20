# Memoization

Just calculate the value of something once and reuse the value. This avoids the
cost of recalculating the same value, caching successive calls:

```js
const NullProtoObj = require('null-prototype-object')

const memoize = fn =>
  ((cache) => (...args) => 
    cache[args] || (cache[args] = fn(...args))
  )(new NullProtoObj())

const getDistanceMemo = memoize(getDistance)

getDistanceMemo('Murcia', 'Madrid') // => computed, slow
getDistanceMemo('Murcia', 'Madrid') // => cached, fast!
```

Notes the first line: `NullProtoObj`. This create an `Object` without
`prototype`. because we want a pure object to be used as a hash table (with all
the [prototypical methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/prototype) missing).

If you need more control of your cache, you can create it using Map or WeakMap
structures. Specially use this when you want to remove items from the cache.

[LRU](https://www.npmjs.com/package/lru) or [mem](https://www.npmjs.com/package/mem)
are good high level libraries that implement this technique.
