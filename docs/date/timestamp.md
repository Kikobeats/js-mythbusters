# Creating timestamp

You have two ways of creating a timestamp:

- `Date.now()`
- `new Date().getTime()`

Althought `Date.now()` and `new Date()` have the same behavior, `Date.now()` is faster because you are not allocating an object and then calling the method of the object.


!> In the browser side, consider using [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now), which has better precision than `Date.now()` and always increases at a constant rate, independent of the system clock.

This is specially remarkable when you make successive calls (for example, when you append timestamps in logs).

Another thing to consider is the fact that, when you create a `new Date()` you are linking a specific point in time with the object. Therefore, successive calls to `.getTime()` will have the same output.

```js
var time = new Date()
time.getTime() // => 1472153262516
time.getTime() // => 1472153262516
```
