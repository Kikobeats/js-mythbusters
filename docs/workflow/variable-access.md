# Variable access

When it comes to Javascript data, there’s pretty much four ways to access it:

- Literal values
- Variables
- Object properties
- Array items

When thinking about optimization, literal values and variables perform about the
same, and are significantly faster than object properties and array items.

So whenever you reference an object property or array item multiple times, you
can get a performance boost by defining a variable (this applies to both reading and writing data).

```js
var name = myObject.name
var value = array[3]
```

Consider this loop:

```js
// Minimizing property lookups
for (var i = 0, num = items.length; i < num; i++) process(items[i])
```

```js
var j = 0
var num = items.length
while (j < num) process(items[j++])
```

You can remove the first iteration of the loop if you know that `num > 0`:

```js
var k = 0
var num = items.length

do process(items[k++])
while (k < num)
```

Depending on the length of the array, you can save around 25% off the total loop
execution time in most engines.

!> Decreasing the work done per iteration is most effective when the loop has a complexity of O(n). When the loop is more complex than O(n), it is advisable to focus your attention on decreasing the number of iterations.

Another good low level tip is to decrement the counter value instead of incrementing it.

```js
var j = items.length

while (j--) {
  process(items[j])
}
```

Now you are using one variable for the control and based in a boolean value. Excellent!

By reversing loops and minimizing property lookups, you can see execution times
that are up to 50%–60% faster than the original.
