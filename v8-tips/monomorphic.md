# Monomorphic over Polymorphic types

Operations are **monomorphic** if the **hidden classes** of inputs are always the same - otherwise they are **polymorphic**, meaning some of the arguments can change type across different calls to the operation.

For example, the second `add()` call in this example causes polymorphism:

```js
function add(x, y) {
  return x + y;
}

add(1, 2);      // + in add is monomorphic
add("a", "b");  // + in add becomes polymorphic
```

**Monomorphic** types is more predictable for the compiler and more easy to generate good code.
