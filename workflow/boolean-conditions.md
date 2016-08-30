# Control flow based in boolean condition

Avoid using `>=` and `<=` unless necessary. It's faster to use a simpler comparison.

```js
// slow
// two boolean conditions: `=== 0` and `> 0`
array.indexOf(i) >= 0

// fast
// just one boolean condition: `!== -1`
array.indexOf(i) !== -1
```
