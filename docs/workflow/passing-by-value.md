# Value vs. Reference

Programming languages can adopt different [evaluation strategies](https://en.wikipedia.org/wiki/Evaluation_strategy) about how they evaluate the argument(s) of a function call.

## Passing by value

**JavaScript is always passing primitives by value**, that means, the argument function call will receive a copy of the original parameters.


```js
const add = (n1, n2) => {
  n1 = n1 + n2
  return n1
}

const n = 1
console.log(add(n, 1)) // 2
console.log(n) // 1, it doesn't mutate
```

Although you reassign the value, it's a copy of the value that does not mutate out of the function scope.

## Passing by reference

If the value provided is not a primitive, or in other words, it's an `object` (and internally `array` and `function` are `object`'s as well) then the argument passed will be a copy of a reference, also knowing as **passing by reference**.

```js
const add = (obj, n) => {
  obj.value = obj.value + n
  return obj
}

const obj = { value: 1 }
console.log(add(obj, 1)) // 2
console.log(obj) // 2, it mutates!
```

It very hard identifies this kind of mutation, creating side effects and a situation that we do not want to be involved.

We can subtly change `add` implementation for creating a new object instead:

```js
const add = (obj, n) => {
  obj = { value: obj.value + n }
  return obj
}

const obj = { value: 1 }
console.log(add(obj, 1)) // 2
console.log(obj) // 1, now it doesn't mutate
```

A [pure function](https://kikobeats.com/es6-functions-pure-self-documented/) is a function where the return value is only determined by its input values, without observable side effects, making it predictable and stable.