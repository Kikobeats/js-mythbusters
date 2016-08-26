### Freeing memory by assigning 'null'.

If you want to delete a property of a object uses

```
var foo = { bar: 'hello world' };
foo.bar = null;
```

Instead of:

```
var foo = { bar: 'hello world' };
delete foo.bar;
```

If you want do delete the object enterely, then simply `foo = null`.

Garbage Collector is interested in objects that are not referenced by any other object.

On the other hand, JavaScript engines can detect such "hot" objects and attempt to optimize them. This is easier if the object’s structure doesn’t heavily change over its lifetime and delete can trigger such changes.

This also is applicable to `Arrays`

[Writing Fast, Memory-Efficient JavaScript @ smashingmagazine](http://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions).