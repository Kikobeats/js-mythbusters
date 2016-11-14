# `new` agnostic

You can force an `Object` constructor to return an instance of the `Object` even when the `new` keyword hasn't been used:

```js
function User (name, passwordHash) {
  if (!(this instanceof User)) return new User(name, passwordHash) // magic line!

  this.name = name
  this.passwordHash = passwordHash
}
```

Now, the behavior is the expected in both cases:

```js
var x = User('baravelli', 'd8b74df393528d51cd19980ae0aa028e')
var y = new User('baravelli', 'd8b74df393528d51cd19980ae0aa028e')

x instanceof User // true
y instanceof User // true
```
