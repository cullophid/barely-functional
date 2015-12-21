'use strict'
const ex = {}
const arg0 = ['reverse', 'toLowerCase', 'toUpperCase', 'trim']
const arg1 = ['concat', 'every', 'filter', 'find', 'findIndex', 'indexOf', 'join', 'map', 'join', 'some', 'sort', 'match', 'split', 'search']
const arg2 = ['reduce', 'reduceRight', 'replace', 'reduceRight', 'slice']

const curry = ex.curry = f => function () {
  let args = []
  const curried = function () {
    args = args.concat(Array.prototype.slice.call(arguments))
    return (args.length >= f.length) ? f.apply(null, args) : curried
  }
  return curried.apply(null, arguments)
}
const f2 = curry((name, arg, coll) => {
  return coll[name](arg)
})
const f3 = curry((name, arg1, arg2, coll) => coll[name](arg1, arg2))

arg0.forEach(name => ex[name] = f2(name, undefined))
arg1.forEach(name => ex[name] = f2(name))
arg2.forEach(name => ex[name] = f3(name))
ex.head = list => list[0]
ex.tail = list => list.slice(1)
ex.compose = function () {
  const fs = Array.prototype.slice.call(arguments).reverse()
  return function () {
    const args = Array.prototype.slice.call(arguments)
    return ex
      .tail(fs)
      .reduce((arg, f) => f(arg), ex.head(fs).apply(null, args))
  }
}
module.exports = ex
