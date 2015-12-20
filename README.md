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

###append :: a -> [a] -> [a]
Adds the specified value to the end of the supplied array.
```js
_.append(5, [1, 2, 3, 4]);
// => [1, 2, 3, 4, 5]
```

###compose :: 

###concat :: [a] -> [a] - [a]
Concatenates two arrays.
```js
_.concat([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6];
```

###curry ::

###drop :: [a] -> [a]

###dropLast :: [a] -> [a]

###every :: (a -> Boolean) -> [a] -> Boolean

###filter :: (a -> Boolean) -> [a] -> [a]

###find :: (a -> Boolean) -> [a] -> void 0 | a

###findIndex :: (a -> Boolean) -> [a] -> Int

###has :: String -> Object -> Boolean

###head :: [a] -> a

###includes :: a -> [a] -> Boolean

###indexOf :: a -> [a] -> Int

###init :: [a] -> [a]

###join :: [a] -> String

###keys :: Object -> [String]

###last :: [a] -> a

###length :: [a] -> Int

###map :: (a -> b) -> [a] -> [b]

###match

###nth :: Int -> [a] -> a

###prop :: String -> Object -> a

###props :: [String] -> Object -> [void 0 | a]

###range :: Int -> Int -> [Int]

###reduce :: (a -> b -> a) -> a -> [b] -> a

###reduceRight :: (a -> b -> a) -> a -> [b] -> a

###replace :: RegExp | String -> String -> String

###reverse :: [a] -> [a]

###search

###slice :: Int -> Int -> [a] -> [a]

###some :: 

###sort :: [a] -> [a]

###split :: String | regExp -> String -> [String]

###sum :: [Number] -> Number

###tail :: [a] -> [a]

###take :: Int -> [a] -> [a]

###takeLast :: Int -> [a] -> [a]

###test :: RegExp -> String -> Boolean

###toLowerCase :: String -> String

###toUpperCase :: String -> String

###trim :: String -> String

###values :: Object -> [a]

## 2.1Kb is too big!
basic.js is just 1.1KB. It contains all the native es5/es6 functions as well as curry and compose.

```js
const _ = require('barely-functional/basic')
```
