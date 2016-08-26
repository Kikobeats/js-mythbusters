#### Focus RegExp on failing faster.

Slow regex processing is usually caused by slow failure rather than slow matching.

Reduce the use of `|` using character classes and optional components, or by pushing the alternation further back into the regex (allowing some match attemps to fail before reaching the alternation):

| Instead of | Use          |
|------------|--------------|
| `cat|bat`  | `[cb]at`     |
| `red|read` | `rea?d`      |
| `red|raw`  | `r(?:ed|aw)` |
| `(.|\r|\n)`| `[\s\S]`     |
