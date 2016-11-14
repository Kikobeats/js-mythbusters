# Declaring instances

When declaring a `RegExp`, it oesn't matter if you use a **constructor**:

```js
const reUsername = /^[a-zA-Z0-9]+$/g
```

or if you use an **expression literal**:

```js
const reUsername = RegExp('^[a-zA-Z0-9]+$', 'g')
```

The important thing is to store it into a variable to make it reusable.

The use of `new` is unnecessary. According to [ECMAScript](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-constructor):

> The RegExp constructor is the %RegExp% intrinsic object and the initial value of the RegExp property of the global object. When RegExp is called as a function rather than as a constructor, it creates and initializes a new RegExp object. Thus the function call RegExp(...) is equivalent to the object creation expression new RegExp(...) with the same arguments.

*Another reason for hating `new`, right?*
