'use strict'
const ex = {}
const arg2 = ['reduce', 'reduceRight', 'reduceRight', 'slice']

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
const toLowerCase = require('./toLowerCase')
const toUpperCase = require('./toUpperCase')
const trim = require('./trim')
const concat = require('./concat')
const every = require('./every')
const filter = require('./filter')
const find = require('./find')
const findIndex = require('./findIndex')
const indexOf = require('./indexOf')
const some = require('./some')
const map = require('./map')
const join = require('./join')
const match = require('./match')
const split = require('./split')
const replace = require('./replace')

const f3 = curry((name, arg1, arg2, coll) => coll[name](arg1, arg2))

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
ex.toLowerCase = toLowerCase
ex.toUpperCase = toUpperCase
ex.trim = trim
ex.concat = concat
ex.every = every
ex.filter = filter
ex.find = find
ex.findIndex = findIndex
ex.indexOf = indexOf
ex.some = some
ex.map = map
ex.join = join
ex.match = match
ex.split = split
ex.replace = replace

module.exports = ex
