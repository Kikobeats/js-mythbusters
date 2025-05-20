# Empty prototype

All objects in JavaSCript are instance of `Object` and they inherit properties and methods, such as `.toString`.

There are situations in which you just want to use an `Object` instance as a container of values.

For those cases, an `Object` maybe be deliberately created with an empty prototype, meaning it inherits nothing.

```js
const cache = Object.create(null)
```

In this way, the object has a smaller memory footprint.

Since it doesn't inherit from other object, you can't typechecking using `instanceof`:

```js
Object.create(null) instanceof Object // false
```

Check [null-prototype-object](https://github.com/Kikobeats/null-prototype-object) to see the most extreme optimization for this.