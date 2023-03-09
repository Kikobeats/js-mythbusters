# Global flag (g)

The global flag indicates the regular expression should be tested against all possible matches in a string.

```js
const regex = new RegExp('o', 'g')

const greetings = 'Hello, how are you?'
const results = greetings.match(regex)

console.log(results.length) // => 3
```

If you just want to know if a string matches a regular expression, you use [RegExp.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) for it.

```js
const regex = new RegExp('o', 'g')
const greetings = 'Hello, how are you?'

regex.test(greetings) // => true
```

When `.test` is invoked, the regex keeps internally the state of the search at [lastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) property.

This will be cause inconsistent results if you call test method several times:

```js
const regex = new RegExp('o', 'g')
const greetings = 'Hello, how are you?'

regex.lastIndex // => 0
regex.test(greetings) // => true
regex.lastIndex // => 5
regex.test(greetings) // => true
regex.lastIndex // => 9
regex.test(greetings) // => true
regex.lastIndex // => 17
regex.test(greetings) // => false
regex.lastIndex // => 0
```

As you can see, `lastIndex` will continue from the last matched result.

That can be easily avoided just wrapping into a function that will be executed from the beginning every time:

```js
const greetings = 'Hello, how are you?'

const test = (str) => {
    const regex = new RegExp('o', 'g')
    return regex.test(str)
}

test(greetings) // => true
test(greetings) // => true
test(greetings) // => true
test(greetings) // => true
```
