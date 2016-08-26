#### Avoid .bind, is slower.

In general terms, `.bind` the context with a `Function` generate need a considerable effort.

Native method is, in general JavaScript Engines slow. Instead, you can use:

- `.call` method (when you need to call the function once).
- `var self = this` is simple and effective.

> Otherwise, exists a set of alternatives, such as libraries that try to implement a better way to do the same. In special, Lodash implementation is based in bitwise, that is very fast check in JavaScript. Check the [test](https://jsperf.com/bind-vs-jquery-proxy/104) benchmark.

I usually use `.bind` more oriented to bind arguments that doesn't change around Function:

```
function sayHello(day, name) {
  console.log('Hello ' + name + ', have a good ' + day)
}

var day = 'Monday'
var sayMonday = sayHello.bind(null, day)

sayMonday('Kiko')
// => 'Hello Kiko, have a good monday'
```
