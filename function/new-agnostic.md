#### Make Your Constructors new-Agnostic

Even your function is called or not using `new` keyword, you can force to have the same behavior in both cases:

```js
function User (name, passwordHash) {
  if (!(this instanceof User)) return new User(name, passwordHash) // magic line!

  this.name = name
  this.passwordHash = passwordHash
}
```

Now, the behavior is the expected in both cases:

```
var x = User("baravelli", "d8b74df393528d51cd19980ae0aa028e")
var y = new User("baravelli","d8b74df393528d51cd19980ae0aa028e")

x instanceof User // true
y instanceof User // true
```
