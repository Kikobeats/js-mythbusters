# Always use flags

## Unicode flag

The unicode (`u`) flag is mandatory when working with Unicode strings, in particular when you might need to handle characters in astral planes, the ones that are not included in the first 1600 Unicode characters.

Like Emojis, for example, but not just those.

If you don’t add that flag, this simple regex that should match one character will not work, because for JavaScript that emoji is represented internally by 2 characters (see [Unicode in JavaScript](https://flaviocopes.com/javascript-unicode/)):

```js
/^.$/.test('a')   // ✅
/^.$/.test('🐶')  // ❌
/^.$/u.test('🐶') // ✅
```

So, always use the `u` flag.

Keep in mind that Unicode, just normal characters, handle ranges:

```js
/[a-z]/.test('a') // ✅
/[1-9]/.test('1') // ✅

/[🐶-🦊]/u.test('🐺') // ✅
/[🐶-🦊]/u.test('🐛') // ❌
```

JavaScript checks the internal code representation, so `🐶 < 🐺 < 🦊` because `\u1F436 < \u1F43A < \u1F98A`. Check [emoji-regex](https://github.com/mathiasbynens/emoji-regex) for exploring more about that.

## Dot all flag

By default, `.` matches any character except for line terminators.

Line terminators are specially remarkable when you are working with [Templates Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), when a break line is added at the end of each `String` line:

```js
const input = `
Lorem ipsum dolor sit amet, consectetur adispiscing hello
world elit. Nam sit amet elit id risus aliquam porta.
`

/hello.world/u.test(input)
// → false 🤔
```

As you can see, it doesn't match because a line break is present between `hello` and `world` words.

The problem, is that the dot, in fact, doest not math all characters. It only matches characters that JavaScript does not consider to be line terminators.

Sometimes you really do want to match any character, including new lines. This problem is so common that developers have started to use workarounds like this:

```js
const input = `
Lorem ipsum dolor sit amet, consectetur adispiscing hello
world elit. Nam sit amet elit id risus aliquam porta.
`

/hello[\s\S]world/u.test(input);
// → true 😕
```

So here we're matching any whitespace character or any non-whitespace character, which effectively matches any character.

Another workaround is to use a negated empty character class:

```js
const input = `
Lorem ipsum dolor sit amet, consectetur adispiscing hello
world elit. Nam sit amet elit id risus aliquam porta.
`

/hello[^]world/u.test(input);
// → true 🤷‍♂️
```

This matches any character that is not... nothing, which effectively matches any character.

Although these two techniques work, they are not intuitive or readable. Stuff like this is why regular expressions get a bad reputation for being hard to decipher.

The new regular expression flag called dotAll mode (`s`) makes the dot truly match any character, including line terminators:

```js
const input = `
Lorem ipsum dolor sit amet, consectetur adispiscing hello
world elit. Nam sit amet elit id risus aliquam porta.
`

/hello.world/us.test(input)
// → true 🎉
```
