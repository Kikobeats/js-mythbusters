## Parsing String

There is a lot of ways to convert a `String` into a `Number`:

|                   	| 1000 	| 10.9 	| 1,000.9 	| 011 	| 10c 	| $10 	|
|-------------------	|------	|------	|---------	|-----	|-----	|-----	|
| parseInt(num)     	| 1000 	| 10   	| 1       	| 11  	| 10  	| NaN 	|
| parseInt(num, 10) 	| 1000 	| 10   	| 1       	| 11  	| 10  	| NaN 	|
| parseFloat(num)   	| 1000 	| 10.9 	| 1       	| 11  	| 10  	| NaN 	|
| Number(num)       	| 1000 	| 10.9 	| NaN     	| 11  	| NaN 	| NaN 	|
| ~~num             	| 1000 	| 10   	| 0       	| 11  	| 0   	| 0   	|
| num / 1           	| 1000 	| 10.9 	| NaN     	| 11  	| NaN 	| NaN 	|
| num * 1           	| 1000 	| 10.9 	| NaN     	| 11  	| NaN 	| NaN 	|
| num - 0           	| 1000 	| 10.9 	| NaN     	| 11  	| NaN 	| NaN 	|
| +num              	| 1000 	| 10.9 	| NaN     	| 11  	| NaN 	| NaN 	|