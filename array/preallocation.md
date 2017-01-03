# Preallocation

Instead of declaring a new `Array` and reserving memory for it, you can reallocate an `Array` previously declared.

For that, you need to remove the previous contents of the array. You can do that setting [`Array.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) to 0:

```js
var array = [1, 2, 3, 4, 5]

array = [] //  bad
array.length = 0 // good!
```

Another good tip is to reserve the necessary memory space for your `Array` by setting its `.length` beforehand.

```js
var array = []
arr.length = 5

arr[0] = 1
arr[1] = 2
arr[2] = 3
```

That useful when you want to use an `Array` as temporal data buffer. [array-list](https://www.npmjs.com/package/array-list) is a good library for that.
