# Creating timestamps

Normally for create timestamps you have two ways:

- `Date.now()`
- `new.Date().getTime()`

Althought `Date.now()` and `new.Date()` have the same behavior, `Date.now()` is faster because you are not allocating and object and then calling the method of the object.

This is specially remarkable when you make sucesive calls (for example, when you append timestamps in logs).

Another thing to be considered is the fact that, when you create a `new Date()` you are linking a moment of the time with the object. Sucesive calls to `.getTime()` have the same output.

```js
var time = new Date()
time.getTime() // => 1472153262516
time.getTime() // => 1472153262516
```
