# Spread Syntax

The [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) was introduced as a language feature to make easier destructure a value from a collection. 

This is specially useful to groups values form an array:

```js
const [,, input, ...flags] = process.argv
```

or from an object:

```js
const { email, ...details } = customer
```

It's great because the group of values will be allocated as a fresh copy.

However, it should be used carefully, specially into loops or any functional iteration. Consider the following code for reducing a collection of files:

```js
const environment = FILES.reduce(
  (acc, key) => ({
    ...acc,
    [key]: loadYaml(key)
  }),
  {}
)
```

In the code, the reduce loop runs as many times as items to iterate. Since we are destructuring the previously value obtained, we are creating a new fresh copy in each iteration. 

That's penalty the performance and can be easily avoided just using [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) instead:


```js
const environment = FILES.reduce(
  (acc, key) =>
    Object.assign(acc, {
      [key]: loadYaml(key)
    }),
  {}
)
```

In fact, what is doing `Object.assign` there is to just the accumulator, so we can do that instead, being the simplest solution:

```js
const environment = FILES.reduce((acc, key) => {
  acc[key] = loadYaml(key)
  return acc
}, {})
```
