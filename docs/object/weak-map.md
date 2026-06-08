# WeakMap

A `WeakMap` is a collection of key/value pairs where **keys must be objects**
(or non-registered symbols), and the values can be anything.

Unlike `Map`, `WeakMap` holds *weak* references to its keys. This means the
garbage collector can reclaim a key's memory if there are no other references
to that object — making `WeakMap` invisible to it.

## When to use WeakMap over Map

Use a `WeakMap` when you need to associate metadata or private state with an
object **without preventing that object from being garbage-collected**.

```js
// ❌ Map — keeps the DOM node alive even after removal from the DOM
const cache = new Map()
cache.set(domNode, computedData)

// ✅ WeakMap — domNode can be GC'd when removed from the DOM
const cache = new WeakMap()
cache.set(domNode, computedData)
```

## Caching without memory leaks

A common pattern is to cache the result of expensive computations per object:

```js
const results = new WeakMap()

function process(obj) {
  if (results.has(obj)) return results.get(obj)

  const result = expensiveComputation(obj)
  results.set(obj, result)
  return result
}
```

Once `obj` loses all other references, both the key and cached value are
automatically freed — no manual cleanup needed.

## Proxy + WeakMap: read-only views

`WeakMap` pairs naturally with `Proxy` to cache proxied wrappers without
leaking memory:

```js
const proxies = new WeakMap()

function readOnlyView(target) {
  if (proxies.has(target)) return proxies.get(target)

  const proxy = new Proxy(target, {
    set() { throw new Error("read-only") },
    defineProperty() { throw new Error("read-only") },
    deleteProperty() { throw new Error("read-only") },
  })

  proxies.set(target, proxy)
  return proxy
}
```

Without `WeakMap`, `readOnlyView` would create a new `Proxy` on every call
and accumulate proxies indefinitely.

## Private class fields (modern alternative)

For *new* code, consider native private fields (`#`) — they offer similar
encapsulation without the overhead of a `WeakMap` lookup:

```js
// With WeakMap
const _secret = new WeakMap()
class Foo {
  constructor(secret) { _secret.set(this, secret) }
  getSecret() { return _secret.get(this) }
}

// With private fields (preferred in modern JS)
class Foo {
  #secret
  constructor(secret) { this.#secret = secret }
  getSecret() { return this.#secret }
}
```

Prefer `WeakMap` when you need to store private data for objects you **don't
control** (e.g., DOM nodes, third-party objects).

## Limitations

- Keys must be objects or non-registered symbols — primitives are not allowed
- Not iterable — you cannot loop over entries or get its size
- No `clear()` method

## References

- [MDN: WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [ES6 in Depth: Proxies — Mozilla Hacks](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/)
- [WeakMap and WeakSet — javascript.info](https://javascript.info/weakmap-weakset)
