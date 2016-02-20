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
const nth = require('./nth')
const pluck = require('./pluck')
const range = require('./range')
const reverse = require('./reverse')
const sort = require('./sort')
const sortBy = require('./sortBy')
const sum = require('./sum')
const tail = require('./tail')
const take = require('./take')
const test = require('./test')
const merge = require('./merge')
const mergeAll = require('./mergeAll')
const has = require('./has')
const keys = require('./keys')
const values = require('./values')
const prop = require('./prop')
const props = require('./props')

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
ex.nth = nth
ex.pluck = pluck
ex.range = range
ex.reverse = reverse
ex.sort = sort
ex.sortBy = sortBy
ex.sum = sum
ex.tail = tail
ex.take = take
ex.test = test
ex.merge = merge
ex.mergeAll = mergeAll
ex.has = has
ex.keys = keys
ex.values = values
ex.prop = prop
ex.props = props
ex.compose = compose
ex.curry = curry

module.exports = ex
