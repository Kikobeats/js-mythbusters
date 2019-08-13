# Lookup table

When optimizing `if`/`else`, we want to minimize the number of conditions to
evaluate. This applies to `switch` cases as well.

The easiest optimization is to ensure that the most common conditions are first:

```js
if (value < 5) {
  // most frequent case
} else if (value > 5 && value < 10) {
  // second most frequent case
} else {
  // other less frequent cases
}
```

Using `switch` makes the code more readable when you have lot `if/else` statements.

## Index lookups

Sometimes you can write the code in a way you don't need to evaluate conditions to reach the right subroutine.

You can use an `object` or `array` for doing direct match index lookups:

```js
const lookupTable = {
  1: 'is greater',
  '-1': 'is less',
  0: 'is equal'
}

const myValue = 5

lookupTable[compare(4, myValue)]
```

You may also use *falsy* values as keys in objects.

## Array vs Object

Be careful when choosing between `Object` or `Array`:

- If you need an incremental index, use `Array`.
- In other cases, use `Object`.

## Caveats

Although it is more readable, using a lookup table isn't always better. The cost
of creating the lookup table could be higher than using a set of `if`/`else`
statements. It depends on your code:

- If you have to handle a small set of conditions (maybe less than 3) or the code runtime life is short, use `if`/`else`.
- In other cases use a lookup table.
