# Focus `RegExp` on failing faster.

Slow `RegExp` processing is usually caused by slow failure rather than slow matching.

Reduce the use of `|` using character classes and optional components, or by pushing the alternation further back into the `RegExp` (allowing some match attemps to fail before reaching the alternation):

| Instead of | Use            |
|------------|----------------|
| `cat|bat`  | `[cb]at`       |
| `red|read` | `rea?d`        |
| `red|raw`  | `r(?:ed|aw)`   |
| `(.\|\r\|\n)`| `[\s\S]`     |

All people known `RegExp` are difficult to write. A good approach for write the right `RegExp` is automate the process.

[regexgen](https://github.com/devongovett/regexgen#regexgen) is a good library for that: It's generate a Trie structure based on the input and generate the most optimized `RegexEp`, removing redundancies.

See it in action from your CLI:

```js
$ npm install regexgen-cli
$ regexgen wave freewave freestylewave "freestyle wave"
/(?:free(?:style ?)?)?wave/
```
