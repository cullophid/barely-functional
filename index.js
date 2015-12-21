'use strict'
const ex = {}
const arg0 = ['toLowerCase', 'toUpperCase', 'trim']
const arg1 = ['concat', 'every', 'filter', 'find', 'findIndex', 'indexOf', 'join', 'map', 'join', 'some', 'sort', 'match', 'split']
const arg2 = ['reduce', 'reduceRight', 'replace', 'reduceRight', 'slice']

const curry = ex.curry = (f) => function () {
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

// custom
ex.append = curry((e, list) => list.concat([e]))
ex.drop = curry((i, list) => list.slice(i))
ex.dropLast = curry((i, list) => list.slice(0, list.length - i))
ex.head = list => list[0]
ex.includes = curry((e, list) => list.indexOf(e) !== -1)
ex.init = list => list.slice(0, list.length - 1)
ex.last = list => list[list.length -1]
ex.length = list => list.length
ex.nth = curry((i, list) => list[i])
ex.range = curry((start, end) => Array(end - start).fill(1).map((e, i) => i + start))
ex.reverse = curry(list => [].concat(list).reverse())
ex.sum = list => list.reduce((sum, e) => sum + e, 0)
ex.tail = list => list.slice(1)
ex.take = curry((i, list) => list.slice(0, i))
ex.takeLast = curry((i, list) => list.slice(list.length - (i), list.length))
ex.test = curry((regex, string) => string.search(regex) !== -1)
ex.has = curry((prop, obj) => obj.hasOwnProperty(prop))
ex.keys = obj => Object.keys(object)
ex.values = object => Object.keys(object).map((k) => object[k])
ex.prop = curry((prop, object) => object[prop])
ex.props = curry((props, object) => props.map((p) => object[p]))
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
