# Properties names

When you use a unquoted property names as `Object` keys, the [specification](http://es5.github.io/x8.html#x8.10) defines that it will be implicitly serialized as `String`:

```js
var object = {
  // `abc` is a valid identifier; no quotes are needed
  abc: 1,
  // `123` is a numeric literal; no quotes are needed
  123: 2,
  // `π` is a valid identifier; no quotes are needed
  π: Math.PI,
  // `var` is a valid identifier name (although it’s a reserved word); no quotes are needed
  var: 4,
  // `foo bar` is not a valid identifier name; quotes are required
  'foo bar': 5,
  // `foo-bar` is not a valid identifier name; quotes are required
  'foo-bar': 6,
  // the empty string is not a valid identifier name; quotes are required
  '': 7
}
```

When you use of numeric literals, the implicit coerced could be a bit confusing.

For example, if you were to use the number `.12e3` as an (unquoted) property name, it would be coerced into a string first, and the actual object key would become `'120'`.

```js
var object = {
  0.12e3: 'wut'
}
object[0.12e3] // 'wut'
object['.12e3'] // undefined
object['120'] // 'wut'
```

!>  A [numeric literal](http://es5.github.io/x7.html#x7.8.3) can be either a decimal literal (e.g. `0`, `123`, `123.`, `.123`, `1.23`, `1e23`, `1E-23`, `1e+23`, `12`, but not `01`, `+123` or `-123`) or a hex integer literal (0[xX][0-9a-fA-F]+ in regex, e.g. `0xFFFF`, `0X123`, `0xaBcD`).

In this case, because the `String` representation of the `Number` is different, this is the correct way to acess using bracket notation:

```js
var object = {
  12e34: 42
}

object['1.2e+35'] = 42
```

## Common Cases

!> You can easily check the string value of any number with `String(number)` or [Unquoted JavaScript property name validator](https://mothereff.in/js-properties#12e34).

This is a list of common object keys used as `String`:

- `1` will be `'1'`.
- `undefined` will be `'undefined'`.
- `null` will be `'null'`.
- `''` will be `''`.
- `true`/`false` as `'true'`/`'false'`.

Also, **reserverd words** cannot be used as object keys.
