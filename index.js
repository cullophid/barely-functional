'use strict'

const append = require('./append')
const compose = require('./compose')
const concat = require('./concat')
const curry = require('./curry')
const drop = require('./drop')
const every = require('./every')
const filter = require('./filter')
const find = require('./find')
const findIndex = require('./findIndex')
const has = require('./has')
const head = require('./head')
const includes = require('./includes')
const indexOf = require('./indexOf')
const init = require('./init')
const join = require('./join')
const keys = require('./keys')
const last = require('./last')
const length = require('./length')
const map = require('./map')
const match = require('./match')
const merge = require('./merge')
const mergeAll = require('./mergeAll')
const nth = require('./nth')
const pluck = require('./pluck')
const prop = require('./prop')
const props = require('./props')
const range = require('./range')
const reduce = require('./reduce')
const reduceRight = require('./reduceRight')
const replace = require('./replace')
const reverse = require('./reverse')
const slice = require('./slice')
const some = require('./some')
const sort = require('./sort')
const sortBy = require('./sortBy')
const split = require('./split')
const sum = require('./sum')
const tail = require('./tail')
const take = require('./take')
const test = require('./test')
const toLowerCase = require('./toLowerCase')
const toMaybe = require('./toMaybe')
const fromMaybe = require('./fromMaybe')
const toUpperCase = require('./toUpperCase')
const trim = require('./trim')
const values = require('./values')

module.exports = {
  append: append,
  concat: concat,
  compose: compose,
  curry: curry,
  drop: drop,
  every: every,
  filter: filter,
  find: find,
  findIndex: findIndex,
  fromMaybe: fromMaybe,
  has: has,
  head: head,
  includes: includes,
  indexOf: indexOf,
  init: init,
  join: join,
  keys: keys,
  last: last,
  length: length,
  map: map,
  match: match,
  merge: merge,
  mergeAll: mergeAll,
  nth: nth,
  pluck: pluck,
  prop: prop,
  props: props,
  range: range,
  reduce: reduce,
  reduceRight: reduceRight,
  replace: replace,
  reverse: reverse,
  slice: slice,
  some: some,
  sort: sort,
  sortBy: sortBy,
  split: split,
  sum: sum,
  tail: tail,
  take: take,
  test: test,
  toLowerCase: toLowerCase,
  toMaybe: toMaybe,
  toUpperCase: toUpperCase,
  trim: trim,
  values: values
}
