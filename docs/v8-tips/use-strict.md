# Use strict

From [MDN use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) section:

> Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

See [all use strict rules](https://msdn.microsoft.com/library/br230269%28v=vs.94%29.aspx).

In `node`, you can use the flag `--use_strict`, but is not recommended if you have dependencies untested to work with this flag.
