'use strict'
const ex = {}
const arg0 = ['toLowerCase', 'toUpperCase', 'trim']
const arg1 = ['concat', 'every', 'filter', 'find', 'findIndex', 'indexOf', 'join', 'map', 'some', 'match', 'split']
const arg2 = ['reduce', 'reduceRight', 'replace', 'reduceRight', 'slice']

const compose = require('./compose')
const curry = require('./curry')
const append = require('./append')
const drop = require('./drop')
const head = require('./head')
const includes = require('./includes')
const init = require('./init')
const last = require('./last')
const length = require('./length')

const f2 = curry((name, arg, coll) => {
  return coll[name](arg)
})
const f3 = curry((name, arg1, arg2, coll) => coll[name](arg1, arg2))

arg0.forEach(name => ex[name] = f2(name, undefined))
arg1.forEach(name => ex[name] = f2(name))
arg2.forEach(name => ex[name] = f3(name))

// custom
ex.append = append
ex.drop = drop
ex.head = head
ex.includes = includes
ex.init = init
ex.last = last
ex.length = length
ex.nth = curry((i, list) => list[i])
ex.pluck = curry((key, list) => list.map(o => o[key]))
ex.range = curry((start, end) => Array(end - start).fill(1).map((e, i) => i + start))
ex.reverse = list => [].concat(list).reverse()
ex.sort = list => [].concat(list).sort()
ex.sortBy = curry((f, list) => [].concat(list).sort(f))
ex.sum = list => list.reduce((sum, e) => sum + e, 0)
ex.tail = list => list.slice(1)
ex.take = curry((i, list) => list.slice(0, i))
ex.test = curry((regex, string) => string.search(regex) !== -1)
ex.merge = curry((o, o1) => ex.mergeAll([o, o1]))
ex.mergeAll = list => Object.assign.apply(null, [{}].concat(list))
ex.has = curry((prop, o) => Object.prototype.hasOwnProperty.call(o, prop))
ex.keys = o => Object.keys(o)
ex.values = o => Object.keys(o).map((k) => o[k])
ex.prop = curry((prop, o) => o[prop])
ex.props = curry((props, o) => props.map(p => o[p]))
ex.compose = compose
ex.curry = curry

module.exports = ex
