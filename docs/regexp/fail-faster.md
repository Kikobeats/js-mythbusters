# Focus on failing faster

Slow `RegExp` processing is usually caused by slow failure rather than slow matching.

Reduce the use of `|` using character classes and optional components, or by pushing the alternation further back into the `RegExp` (allowing some match attempts to fail before reaching the alternation):

| Instead of            | Use             |
|-----------------------|-----------------|
| cat&#124;bat          | [cb]at          |
| red&#124;read         | rea?d           |
| red&#124;raw          | r(?:ed&#124;aw) |
| (.\&#124;\r\&#124;\n) | [\s\S]          |

Everyone knows `RegExp` are difficult to write. A good approach to write the right `RegExp` is to automate the process.

[regexgen](https://github.com/devongovett/regexgen#regexgen) is a good library for that: it generates a tree structure based on the input and generates the most optimized `RegexEp`, removing redundancies:

```bash
$ regexgen wave freewave freestylewave "freestyle wave"
/(?:free(?:style ?)?)?wave/
```

You can combine it with [randexp](https://github.com/fent/randexp.js) to generates random strings that match a given RegExp:

```js
const RandExp = require('randexp')
new RandExp(/hello+ (world|to you)/).gen()
// => hellooooooooooooooooooo world
```

Another useful library to consider is [regex-not](https://github.com/jonschlinkert/regex-not) for creating regular expression for matching everything except for the given string. 

You can find good resources to learn how to create focused regular expressions at [A Guide to JavaScript Regular Expressions](https://flaviocopes.com/javascript-regular-expressions/) and [Learn Regex](https://github.com/zeeshanu/learn-regex).
