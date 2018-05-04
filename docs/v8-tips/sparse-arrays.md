# Sparse Arrays

Internally the V8 engine can represent `Array`s following one of two approaches:

- **Fast Elements**: linear storage for compact keys sets.
- **Dictionary Elements**: hash table storage (more expensive to access on runtime).

If you want V8 to represent your `Array` in the `Fast Elements` form, you need to take into account the following:

- Use contiguous keys starting at `0`.
- Don't pre-allocate large `Array` (e.g. *> 64K* elements) that you don't use.
- Don't delete elements, specially in numeric `Array`s.
- Don't load uninitialized or deleted elements.

Another consideration: any name used as property name that is not a `String` will be serialized, read more at [Properties Names](v8-tips/properties-names).
