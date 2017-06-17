# pop over shift

The `.shift` method removes the first element from an array and returns it.

To remove the returned item without re-addressing the array and invalidating all references to it, `shift` requires moving the entire array around.

On the other hand, `.pop` removes the last element of an `Array` by simply subtracting 1 from its length.

Because of that `.shift` is usually much slower than `.pop`.
