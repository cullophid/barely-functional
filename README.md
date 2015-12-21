# Barely Functional
*A Tiny functional programming library *

barely-functional is a tiny (2.1Kb without minification) library for doing functional programming. It includes `curry`
and `compose`, and wraps several native es5 methods including `.map()` `.reduce()` and `.filter()` and several es6
methods such as `.every()` and `.find()`. The library also contains several non native functions inspired (READ: stolen)
from [ramdajs](http://ramdajs.com/).


## installing

`npm i barely-functional`

## using
```js
const _ = require('barely-functional')

 const sumOfEven = _.compose(_.sum, _.filter((e) => e % 2 === 0))
```

*Barely functional is written in es6. It will run on node.js v4.0 and up. If you wish to use it in the browser you need to use babel and (webpack/browserify)*


## But ramda is way better...
 Yes it is, but it is also a lot bigger. If you a writing a small module, you might not want to include all of [Ramda](https://http://ramdajs.com).

## Functions

### append :: a -> [a] -> [a]
Adds the specified value to the end of the supplied array.
```js
_.append(5, [1, 2, 3, 4]);
// => [1, 2, 3, 4, 5]
```

### compose :: ((y -> z), (x -> y) ... (o -> p)(a, b, ..., n -> o)) -> (a, b, ..., n -> z)
Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.

```js
const add1  =  (n) => n + 1
const double  =  (n) => n * 2

const add1AndDouble = _.compose(double, add1)

add1AndDouble(5)
// => 12

```

### concat :: [a] -> [a] - [a]
Concatenates two arrays.
```js
_.concat([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6];
```

### curry :: (* -> a) -> (* -> a)
Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If f is a ternary function and g is R.curry(f), the following are equivalent:

```js
const sum3 = _.curry((a, b, c) => a + b + c)
sum3(1)(2)(3)
// => 6
sum3(1)(2, 3)
// => 6
sum3(1, 2)(3)
// => 6
sum3(1, 2, 3)
// => 6
```


### drop :: Number -> [a] -> [a]
Returns a new list without the first n elements

```js
_.drop(2, [1, 2, 3, 4])
// => [3, 4]
```

### dropLast :: [a] -> [a]
Returns a new list without the last n elements

```js
_.dropLast(2, [1, 2, 3, 4])
// => [1, 2]
```
### every :: (a -> Boolean) -> [a] -> Boolean
Returns true if every element in the list satisfies the predicate function.

```js
_.every(n => n > 2, [2, 3, 4])
// => false

every(n => n > 2, [3, 4, 5])
// => true
```

### filter :: (a -> Boolean) -> [a] -> [a]
Returns a new list containing only the elements in the list that satisfies the predicated function.

```js
_.filter(n => n > 2, [1, 2, 3, 4])
// => [3, 4]
```

### find :: (a -> Boolean) -> [a] -> void 0 | a
Returns the first element satisfying the predicate function. If no element can be found it returns undefined.
```js
_.find(n => n === 2, [1, 2, 3,4])
// => 2
```

### findIndex :: (a -> Boolean) -> [a] -> Int
Returns the index of first element satisfying the predicate function. If no element can be found it returns -1.
```js
_.findIndex(n => n === 2, [1, 2, 3,4])
// => 1
```

### has :: String -> Object -> Boolean
Returns true if the given object has a property with the specified name.
```js
_.has('a', {a:2})
// => true
_.has('b', {a:2})
// => false
```

### head :: [a] -> a
Returns the first element of a list
```js
_.head([1, 2, 3])
// => 1
```

### includes :: a -> [a] -> Boolean
Returns true if the list includes the given element
```js
_.includes('a', ['a', 'b', 'c'])
// => true
```

### indexOf :: a -> [a] -> Int
Returns the index of the specified element in the list. Returns -1 if the element is not in the list
```js
_.indexOf(1, [0, 1, 2, 3])
// => 1
```


### init :: [a] -> [a]
Returns all elements of the list except the last
```js
_.init([1, 2, 3, 4]])
// => [1, 2, 3]
```

### join :: String -> [a] -> String
Returns a string by concatenating all elements of the list interlaced with the specified string.

```js
_.join('|', ['a', 'b', 'c'])
// => "a|b|c"

### keys :: Object -> [String]
Returns a list of the given objects keys.

```js
_.keys({a: 1, b: 2, c: 3})
// => ["a", "b", "c"]
```

### last :: [a] -> a
Returns the last element of the list.

```js
_.last([1, 2, 3])
// => 3
```

### length :: [a] -> Int
Returns the length of a list / function / string.

```js
_.length([1, 2, 3])
// => 3
```

### map :: (a -> b) -> [a] -> [b]

### match :: RegExp -> String -> [String | void 0]

### nth :: Int -> [a] -> a

### prop :: String -> Object -> a

### props :: [String] -> Object -> [a | void 0]

### range :: Int -> Int -> [Int]

### reduce :: (a -> b -> a) -> a -> [b] -> a

### reduceRight :: (a -> b -> a) -> a -> [b] -> a

### replace :: RegExp | String -> String -> String

### reverse :: [a] -> [a]

### search

### slice :: Int -> Int -> [a] -> [a]

### some :: (a -> Boolean) -> [a] -> Boolean

### sort :: [a] -> [a]

### split :: String | regExp -> String -> [String]

### sum :: [Number] -> Number

### tail :: [a] -> [a]

### take :: Int -> [a] -> [a]

### takeLast :: Int -> [a] -> [a]

### test :: RegExp -> String -> Boolean

### toLowerCase :: String -> String

### toUpperCase :: String -> String

### trim :: String -> String

### values :: Object -> [a]

## 2.1Kb is too big!
basic.js is just 1.1KB. It contains all the native es5/es6 functions as well as curry and compose.

```js
const _ = require('barely-functional/basic')
```
