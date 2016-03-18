const assert = require('assert')
const Nothing = require('../Maybe').Nothing
const Just = require('../Maybe').Just
const indexOf = require('../indexOf.js')
const bf = require('../index.js')

describe('indexOf', () => {

  it('is curried', () => {
    const maybe = indexOf(5)([1, 3, 5, 7, 9])
    assert(maybe.equals(Just(2)))
  })


  it('should find the index of the first element that satisfies the predicate', () => {
    assert(indexOf(9, [1, 3, 5, 7, 9]).equals(Just(4)))
  })

  it('should return -1 if it does not find an element that satisfies the predicate', () => {
    assert(indexOf(6, [1, 3, 5]).equals(Nothing()))
  })

  it('is exported from index', () => {
    assert(bf.indexOf(5, [1, 3, 5, 7, 9]).equals(Just(2)))
  })

})
