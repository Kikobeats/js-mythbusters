# Lookup table for result matching

When we optimizing `if`/`else`, the goal is always to minimize the number of conditions to evaluate before taking the correct path. The easiest optimization is therefore to ensure that the most common conditions are first:

```js
if (value < 5) {
  // most frequency case
} else if (value > 5 && value < 10) {
  // second frequency case
} else {
 // in other case
}
```

`switch` is more or less the same (maybe more semantic and more structured code). But the point is makes the reduce the path size.

Better use a direct match approach based in object/array index:

```js
var lookupTable = {
  '1': 'is greater',
  '-1': 'is less',
  '0': 'is equal'
}

var myValue = 5

lookupTable[compare(4, myValue)]
```

Keep in mind that using an `Object` you can use `undefined` or `''` as key.

Also be careful about choose betweetn `Object` or `Array` for this purpose:

- If you need a incremental index, use `Array`.
- In other case use `Object`.

Under `ES2015`, consider use `Map` or `Set` combined with `Symbol`.

Althought is more readable, not in all scenarios use a lookup table is better: The cost of create the lookup table could be higher tan use a set of `if`/`else` statements. So, it depends about your code running time:

- If you have to handle a set of conditions (maybe less than 3 could be a metric) or the code running life is short, use `if`/`else`.
- In other case use lookup table solution.
