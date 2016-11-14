# Interpolating variables

Creating a `String` interpolating variables was always a pain.

The solution that has [more](https://jsperf.com/concat-vs-plus-vs-join) [perfomance](https://jsperf.com/string-concat-fast/17) is using the `+=` operator:

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

However, nowadays it is recommended to use template strings due to implying less code and more perfomance:

```js
function greetings (name) {
  return `Hello ${name}, how are you?`
}

var sayHello = greetings('Kiko')
console.log(sayHello) // => 'Hello Kiko, how are you?'
```
