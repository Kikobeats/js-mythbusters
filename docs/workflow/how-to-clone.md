# How to clone

Before explaining how to clone in JavaScript, we need to clarify a set of things related to what are primitives values and how it works when you pass them through functions.

## Primitives

A primitive (primitive value, primitive data type) is data that is not an object and has no methods.

In JavaScript, there are 7 primitive data types:

- [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [`BigInt`](https://developers.google.com/web/updates/2018/05/bigint)

All the primitives are **immutables**.

## Non Primitives

The rest of value that you can find on JavaScript are non primitives. We are talking about:

- `Object`
- `Array`
- `Function`

In fact, `Array` and `Function` are wrapped using `Object`. Primitives wrapped are `Object` as well.

This is why on **JavaScript all is an object**.

## Passing values

When you pass a value through a function, two situations can happen. Let's explore them.

### Passing by value

If the value is a **primitive**, then a copy of the value will be passed.

This means that the original value and the value passed through the function have a different memory space, so the second value is literally a copied from the first value.

```js
const clonePrimitive = value => value

let primitive = 123
const anotherPrimitive = clonePrimitive(primitive)

// let's modify the original value
primitive = 456

console.log(anotherPrimitive, primitive)
// => 123 456
```

Both values can be modified independently.

### Passing by reference

If the value is a **non primitive**, then a reference of the value will be passed.

```js
const names = ['Kiko', 'Carlos']

const addName = (collection, name) => collection.push(name)

addName(names, 'Antonella')

console.log(names)
// => [ 'Kiko', 'Carlos', 'Antonella' ]
```

A copy of the value will be not created and changes will be persistent out of the function that modifies the value.

## Cloning values
If you want to clone something, you have to keep in mind how primitives and non primitives values behavior.

Since non primitives values are just referenced, they should be iterated in order to clone them as a fresh value.
This is a an annotated version of the [clone-deep](https://github.com/jonschlinkert/clone-deep) dependency:

```js
const clone = require('shallow-clone')
const typeOf = require('kind-of')

const TYPES_COLLECTION = ['function', 'object', 'array']

function cloneCollection (val) {
  const newCollection = new val.constructor()
  for (const key in val) newCollection[key] = cloneDeep(val[key])
  return newCollection
}

function cloneDeep (val) {
  return TYPES_COLLECTION.includes(typeOf(val)) ? cloneCollection(val) : clone(val)
}
```

## Don't clone serializing

Maybe you've seen this piece of code over internet as technique for creating a clone of a value:

```js
const clone = value => JSON.parse(JSON.stringify(value))
```

This will convert the input from JavaScript types into a `String` and then parsing the `String` into JavaScript types again.

Althought it looks a simple and good idea, there is a series of edge cases to consider it harmful:

1. Will throw error in circular objects.
2. The `JSON.stringify` conversion has to be lossless. Therefore, methods are not allowed as members of type function are ignored by the JSON stringifier. The `undefined` value is not allowed either. Object keys with `undefined` value are omitted, while `undefined` values in arrays are substituted by `null`.
3. Members of the `Date` object become ISO-8601 strings, not representing the timezone of the client. The value new `Date(2011,0,1)` becomes `"2010-12-31T23:00:00.000Z"` after executing the above deep copy method in case you live in Central Europe.
