#### Control flow based in boolean condition

Always as possible, compare with a simple boolean (for example, in loops conditions): It's a more simple (and consecuentially faster):

```js
// slow
// two boolean conditions = 0 and > 0
array.indexOf(i) >= 0

// fast
// just one boolean condition
array.indexOf(i) !== 0
```
