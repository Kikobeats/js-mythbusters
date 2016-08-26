# Reallocation

A good approach for performance is reuse instance in favour to avoid create a new instance and the costs that it represents.

If you want to remove the content of an array, use [`Array.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length):

```js
var array = [1, 2, 3, 4, 5]

/* do something */

array = [] //  bad
array.length = 0 // good!
```
