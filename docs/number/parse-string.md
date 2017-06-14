# Parsing String

There are lots of ways to convert a `String` into a `Number`:

|                     | `'1000'` | `'10.9'` | `'1,000.9'` | `'011'` | `'10c'` | `'$10'` |
|---------------------|----------|----------|-------------|---------|---------|---------|
| `parseInt(num)`     | 1000     | 10       | 1           | 11      | 10      | NaN     |
| `parseInt(num, 10)` | 1000     | 10       | 1           | 11      | 10      | NaN     |
| `parseFloat(num)`   | 1000     | 10.9     | 1           | 11      | 10      | NaN     |
| `Number(num)`       | 1000     | 10.9     | NaN         | 11      | NaN     | NaN     |
| `~~num`             | 1000     | 10       | 0           | 11      | 0       | 0       |
| `num / 1`           | 1000     | 10.9     | NaN         | 11      | NaN     | NaN     |
| `num * 1`           | 1000     | 10.9     | NaN         | 11      | NaN     | NaN     |
| `num - 0`           | 1000     | 10.9     | NaN         | 11      | NaN     | NaN     |
| `+num`              | 1000     | 10.9     | NaN         | 11      | NaN     | NaN     |

Despite the differences of the results, it does not matter too much which method you use in terms of performance.

`+num` is the shortest way and is often used in JavaScript minification tools.

Use `Number(num)` constructor should be enough evidence of your intention.

If you want to use one of the tricky ways, keep in mind that the intention is not always obvious.

A solution could be to wrap them into a named function:

```js
const toNumber = num => +num
console.log(toNumber('10.9'))
// => 10.9
```

but now you are not earning anything you can not do already with `Number(num)`.
