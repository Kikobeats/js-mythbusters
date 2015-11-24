# JavaScript MythBusters

> A list of JavaScript tips to avoid load performance from a high level point of view.

## Make your code faster with 'use strict'.

From [MDN use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) section:

*Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.*

See [all use strict rules](https://msdn.microsoft.com/library/br230269%28v=vs.94%29.aspx).

## Cache sucesive calls.

Just calculate the value of something once, and reuse the value avoiding the cost of recalculate the same value.

This is very typical with `array.length`: If you need the value more than once, cache in a variable:

```js
var array = [1, 2, 3, 4, 5]
var arraySize = array.legnth;
```

If you need to control of a set of tiny values, you can use an object:

```js
var cache = {};

var cityOne = 'Murcia';
var cityTwo = 'Madrid';
var routeName = cityOne + '-' +  cityTwo;

if (!cache[routeName])
  cache[routeName] = getDistance(cityOne, cityTwo);

return cache[routeName];
```

If you actually don't know how your cache could grow in memory, be careful. You need a little more sophisticated way as [memory-cache](https://www.npmjs.com/package/memory-cache) or [lru-cache](https://www.npmjs.com/package/lru-cache) to control it.

## Better a variable than an array/object access.

If you need to check the result more than once.

When it comes to Javascript data, there’s pretty much four ways to access it: literal values, variables, object properties, and array items. When thinking about optimization, literal values and variables perform about the same, and are significantly faster than object properties and array items.

So whenever you reference an object property or array item multiple times, you can get a performance boost by defining a variable. (This applies to both reading and writing data).

```js
var name = myObject.name;
var value = array[3];
```

## Setup the correct variables scope.

If you declare a global variable but you only use it in a little part of your code, then you are keeping in memory the variable all time but.

When a variable is referenced, Javascript hunts it down by looping through the different members of the scope chain. This scope chain is the set of variables available within the current scope, and across all major browsers it has at least two items: a set of local variables and a set of global variables.

Simply put, the deeper the engine has to dig into this scope chain, the longer the operation will take. It first goes through the local variables starting with this, the function arguments, then any locally defined variables, and afterwards iterates through any global variables.

**Continue reading: ES2015 tips**

Notes that with ES2015, you can use `const` and `let` as well.

`const` means that the variable can’t be reassigned. (Not to be confused with immutable values. Unlike true immutable datatypes such as those produced by Immutable.js and Mori, a `const` object can have properties mutated.):

```js
const objt = { foo: 'bar' };

objt = {};
console.log(objt); // => = { foo: 'bar' }

objt.foo = 'WAT';
console.log(objt); // => = { foo: 'WAT' }

objt.wat = 'the hell';
console.log(objt); // => = { foo: 'WAT', wat: 'the hell' }

const objt = {}
TypeError: Identifier 'objt' has already been declared
```

`let` means that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

`var` is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop.

You need to be reassign? then `let`, else `const`.

Another important approach: If you need to deallocate a value by unsetting it, you may consider `let` over `const`.


## Freeing memory by assigning 'null'.

If you want to delete a property of a object uses

```
var foo = { bar: 'hello world' };
foo.bar = null;
```

Instead of:

```
var foo = { bar: 'hello world' };
delete foo.bar;
```

If you want do delete the object enterely, then simply `foo = null`.


Garbage Collector is interested in objects that are not referenced by any other object.

On the other hand, JavaScript engines can detect such "hot" objects and attempt to optimize them. This is easier if the object’s structure doesn’t heavily change over its lifetime and delete can trigger such changes.

[Writing Fast, Memory-Efficient JavaScript @ smashingmagazine](http://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions).


## Instead of String.concat, use '+=' (or not).

It's no clear why this happens. We suppose that `String.concat` is part of a Class and need to wrap more things.

In general terms, `+=` is more fastests, but depends of your JavaScript Engine and version.

Check [test#1](https://jsperf.com/concat-vs-plus-vs-join) and [test#2](https://jsperf.com/string-concat-fast/17) benchmarks.

## Use RegExp in sense case.

*SOON*

## Use the correct RegExp method.

Use `.test` if you want a faster boolean check. Use `.match` to retrieve all matches when using the g global flag.

Also keep in mind that you can match with regex, or string methods to find substring inside a string.

The perfomance depends again of your JavaScript Engine. Try to use optimal method of your case of use. There isn't exist another rule.

Check [test#1](https://jsperf.com/regex-methods-x-1/2), [test#2](https://jsperf.com/search-vs-indexof11/4) and [test#3](https://jsperf.com/test-vs-indexof-fast) benchmarks.

## Avoid .bind, is slower.

Instead, save the context in a variable and them use it.

```
var _this = this;
```

*SOON MORE*


## Collections

#### create a cache variable for the length of a collection for successive `.length` calls

Prevent re-calculate the length of a collection all the time. Instead, store the value in a variable.

* [Perfomance test](https://jsperf.com/array-length-vs-cached)

# License

MIT © [Kiko Beats](http://kikobeats.com)
