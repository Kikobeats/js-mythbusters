# Interpolating variables

Creating an `String` interpolating variables always was a pain.

The solution that have [more](https://jsperf.com/concat-vs-plus-vs-join) [perfomance](https://jsperf.com/string-concat-fast/17) is using `+=` operator:

```js

function greetings (name) {
  var message = ''
  message += 'Hello '
  message += name
  message += ', how are you?'
  return message
}

var sayHello = greetings('Kiko')
console.log(sayHello) // => 'Hello Kiko, how are you?'
```

However, nowadays is totally recommended (less code and good perfomance) use template string for this purpose:

```js
function greetings (name) {
  return `Hello ${name}, how are you?`
}

var sayHello = greetings('Kiko')
console.log(sayHello) // => 'Hello Kiko, how are you?'
```
