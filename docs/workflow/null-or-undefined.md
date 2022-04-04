# null or undefined

If you just want to take care into terms of semantic:

- `null` means "no object", 
- `undefined` is "no value".

The simple way for typechecking both value is using weak equal:

```js
const isNil = value => value == null
```

However, even it's correct to say these values are different, they are frequently used inconsistently and interchangeably, not being clear when to use which.

We cannot remove `null` from JavaScript (e.g., JSON doesn't support `undefined`) but we can mitigate the impact.

In order to apply a simple rule there, just [use `undefined` over `null`](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined).
