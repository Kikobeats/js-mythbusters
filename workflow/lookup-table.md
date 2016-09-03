# Lookup table for result matching

When optimizing `if`/`else`, minimize the number of conditions to evaluate. This applies to `switch` cases as well.

The easiest optimization is to ensure that the most common conditions are first:

```js
if (value < 5) {
  // most frequency case
} else if (value > 5 && value < 10) {
  // second frequency case
} else {
 // in other case
}
```

## Index lookups

It's better to use a direct match approach using object/array index lookups:

```js
var lookupTable = {
  '1': 'is greater',
  '-1': 'is less',
  '0': 'is equal'
}

var myValue = 5

lookupTable[compare(4, myValue)]
```

In objects, you may also use *falsy* values as keys.

## Array vs. Object

Also be careful about choose between `Object` or `Array` for this purpose:

- If you need a incremental index, use `Array`.
- In other cases, use `Object`.

## Caveats

Although is more readable, using a lookup table isn't always better. The cost of creating the lookup table could be higher than the use set of `if`/`else` statements. So, it depends about your code running time:

- If you have to handle a small set of conditions (maybe less than 3) or the code running life is short, use `if`/`else`.
- In other cases, use the lookup table solution.
