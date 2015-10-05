# JavaScript MyghtBusters

## General

### 'use strict' makes your code faster

From [MDN use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) section:

*Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.*


See also [use strict differences in Microsoft MDN](https://msdn.microsoft.com/library/br230269%28v=vs.94%29.aspx).

## Strings

#### += instead of String.concat

It is strongly recommended that assignment operators (+, +=) are used instead of the concat() method. See this perfomance test.

* [Perfomance test](https://jsperf.com/concat-vs-plus-vs-join)

## RegexEp

#### .test vs .match

Use `.test` if you want a faster boolean check. Use `.match` to retrieve all matches when using the g global flag.

* [Perfomance test](http://jsperf.com/test-vs-match-regex)


## Collections

#### create a cache variable for the length of a collection for successive `.length` calls

Prevent re-calculate the length of a collection all the time. Instead, store the value in a variable.

* [Perfomance test](https://jsperf.com/array-length-vs-cached)

# License

MIT © [Kiko Beats](http://kikobeats.com)
