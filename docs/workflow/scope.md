# Scope

If you declare a global variable but you only use it in a small part of your code,
then you are keeping the variable in memory all the time.

When a variable is referenced, Javascript hunts it down by looping through the
different members of the scope chain. This scope chain is the set of variables
available within the current scope. Across all major browsers it has at least
two items: a set of local variables and a set of global variables.

Simply put, the deeper the engine has to dig into this scope chain, the longer
the operation will take. It first goes through the local variables starting with
`this`, the function arguments, then any locally defined variables, and afterwards
it iterates through global variables.

## const & let

Since ES2015, you can use [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).

`const` means that the variable can’t be reassigned:

```js
const objt = { foo: 'bar' }

objt = {}
console.log(objt) // => = { foo: 'bar' }

objt.foo = 'WAT'
console.log(objt) // => = { foo: 'WAT' }

objt.wat = 'the hell'
console.log(objt) // => = { foo: 'WAT', wat: 'the hell' }

const objt = {}
// => TypeError: Identifier 'objt' has already been declared
```

!> If you want to use `const` over `Object` and also be not possible reassign
object properties, use [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

`let` means that the variable may be reassigned, such as a counter in a loop, or
a value swap in an algorithm. It also signals that the variable will be used only
in the block it’s defined in, which is not always the entire containing function.

`var` is now the weakest signal available when you define a variable in JavaScript.
The variable may or may not be reassigned, and the variable may or may not be used
for an entire function, or just for the purpose of a block or loop.

## A Simple rule

So if you need to allow the variable to be reassigned, use `let`, otherwise use
`const`. Also, if you need to deallocate a value by unsetting it, you may consider
`let` over `const`.
