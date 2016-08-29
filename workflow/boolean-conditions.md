# Control flow based in boolean condition

Avoid using `>=` and `<=` unless necessary. It's faster to use a simpler comparison.

```js
// slow
// two boolean conditions: `=== -1` and `> -1`
array.indexOf(i) >= 1

// fast
// just one boolean condition: `!== -1`
array.indexOf(i) !== -1
```
