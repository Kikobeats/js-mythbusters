# Declaring instances

Doesn't matter if you use **constructor**

```js
const reUsername = /^[a-zA-Z0-9]+$/g
```

or **expression literal**

```js
const reUsername = RegExp('^[a-zA-Z0-9]+$', 'g')
```

The important thing is store it into a variable to make it reusable.

As you can see I don't use `new` because it is unnecessary. According with [ECMAScript](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-constructor):

> The RegExp constructor is the %RegExp% intrinsic object and the initial value of the RegExp property of the global object. When RegExp is called as a function rather than as a constructor, it creates and initializes a new RegExp object. Thus the function call RegExp(…) is equivalent to the object creation expression new RegExp(…) with the same arguments.

*Another reason for hate `new`, right?*
