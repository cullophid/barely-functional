# Barely Functional
**A Tiny functional programming library **

barely-functional is a tiny (2.1Kb without minification) library for doing functional programming. It includes `curry` and `compose`, and wraps several native es5 methods including `.map()` `.reduce()` and `.filter()` and several es6 methods such as `.every()` and `.find()`. The library also contains several non native functions inspired (READ: stolen) from [ramdajs](http://ramdajs.com/).


## installing

`npm i barely-functional`

## using
```js
const _ = require('barely-functional')

 const sumOfEven = _.compose(_.sum, _.filter((e) => e % 2 === 0))
```

*Barely functional is written in es6. It will run on node.js v4.0 and up. If you wish to use it in the browser you need to use babel and (webpack/browserify)*


## But ramda is way better...
 Yes it is, but it is also allot bigger. If you a writing a small module, you might not want to include all of ramda.

## functions
  *I wont be describing the api here. All functions follow the ramdajs api.*
- append
- compose
- concat
- curry
- drop
- dropLast
- every
- filter
- find
- findIndex
- has
- head
- includes
- indexOf
- init
- join
- keys
- last
- length
- map
- match
- nth
- prop
- props
- range
- reduce
- reduceRight
- replace
- reverse
- search
- slice
- some
- sort
- split
- sum
- tail
- take
- takeLast
- test
- toLowerCase
- toUpperCase
- trim
- values

## 2.1Kb is too big!
basic.js is just 1.1KB. It contains all the native es5/es6 functions as well as curry and compose.

```js
const _ = require('barely-functional/basic')
```
