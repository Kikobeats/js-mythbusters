# Hidden class

JavaScript has limited compile-time type information: types can be changed at
runtime. This is why it is expensive to reason about JS types at compile time.

```js
function Point (x, y) {
  this.x = x
  this.y = y
}

var p1 = new Point(11, 22) // => hidden Point class created
var p2 = new Point(33, 44) // => hidden Point class shared with p1
// At this point, p1 and p2 have a shared hidden class

p2.z = 55 // => another hidden class (Point') created, p1 !== p2
```

This might lead you to question how JavaScript performance could ever get anywhere close to C++. However, V8 has hidden types created internally for objects at runtime; objects with the same hidden class can then use the same optimized generated code.

Keep in mind:

- Initialize all object members in constructor functions (so the instances don't change type later).
- Always initialize object members in the same order.
