# Reallocation

Instead of declare a new `Array` and reserving memory for that, you can reallocate an `Array` previously declared.

The thing that you need is remove the content of the array; You can do that using [`Array.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length):

```js
var array = [1, 2, 3, 4, 5]

array = [] //  bad
array.length = 0 // good!
```

Another good approach to use `.length` is when you know the size of your `Array`. In this case you can reserve the necessary memory space:

```js
var array = []
arr.length = 5

arr[0] = 1
arr[1] = 2
arr[2] = 3
```
