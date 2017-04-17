# Preallocation

It's typical use an `Array` such a temporal container of data.

!> If you need to work with binary data, use a [Buffer](https://www.npmjs.com/package/buffer)

Instead of allocate a new `Array` every time, a good approach in terms of perfomance is reuse the same array instance.

For clean the elements of the `Array`, you can follow different approach.

Probably the most evident is use `.pop` in a loop for clean all the elements:

```js
const array = [1, 2, 3, 4, 5]
while (array.length) array.pop()
console.log(array) // []
```

However, there is a better and simpler using [`Array.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length). This property is writable, and, if you set the value to `0`, remove all the elements:

```js
const array = [1, 2, 3, 4, 5]
array.length = 0
console.log(array) // []
```
