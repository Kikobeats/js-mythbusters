# Math methods

Native parts of JavaScript are all written in a lower-level language such as C++.
That means these methods are compiled down to machine code as part of the browser
and therefore don't have the same limitations as your code.

The `Math` object contains properties and methods designed to make mathematical
operations easier and most of the time they are implemented as native operations.

There are several mathematical constants available:

| Constant      | Meaning                                              |
|---------------|------------------------------------------------------|
| `Math.E`      | The value of `E`, the base of the natural logarithms |
| `Math.LN10`   | The natural logarithm of 10                          |
| `Math.LN2`    | The natural logarithm of 2                           |
| `Math.LOG2E`  | The base-2 logarithm of `E`                          |
| `Math.Log10E` | The base-10 logarithm of `E`                         |
| `Math.PI`     | The value of π                                       |
| `Math.SQRT1_2`| The square root of 1/2                               |
| `Math.SQRT2`  | The square root of 2                                 |

Each of these values is precalculated, so there is no need for you to calculate them yourself. There are also methods to handle mathematical calculations:

| Method                  | Meaning                   |
|-------------------------|---------------------------|
| `Math.abs(num)`         | The absolute value of num |
| `Math.exp(num)`         | Math.e**num               |
| `Math.log(num)`         | The logarithm of num      |
| `Math.pow(num, power)`  | num**power                |
| `Math.sqrt(num)`        | The square root of num    |
| `Math.acos(x)`          | The arc cosine of x       |
