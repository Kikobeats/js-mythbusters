# null and undefined

While `null` means "no object", `undefined` is "no value".

The simple way for typecheck both value is using weak equal:

```js
const isNil = value => value == null
```

Although the problem is still there: everyone uses `null` and `undefined` inconsistently and interchangeably, not being clear when to use which.

We cannot remove `null` from JavaScript (e.g., JSON doesn't support `undefined`) but we can mitigate the impact.

In order to apply a simple rule there, just [use `undefined` over `null`](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined).
