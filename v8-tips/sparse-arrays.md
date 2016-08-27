# Sparse Arrays

Internally V8 can represent `Array` following two approach:

- **Fast Elements**: linear storage for compact keys sets.
- **Dictionary Elements**: hash table storage otherwise (more expensive to access on runtime).

If you want that V8 represents your `Array` in the `Fast Elements` form, you need to have a special considerations:

- Use contiguous keys starting at `0`.
- Don't pre-allocate large `Array` (e.g. *> 64K* elements) that you don't use.
- Don't delete elements, in special in numeric `Array`'s.
- Don't load uninitialized or deleted elements.

Another consideration: Any name used as property name that is not a string is stringified via `.toString()`, so:

- `1` will be `'1'`.
- `undefined` will be `'undefined'`.
- `null` will be `'null'`.
- `''` will be `''`.
