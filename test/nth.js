const assert = require('assert')
const Nothing = require('../src/Maybe').Nothing
const Just = require('../src/Maybe').Just
const nth = require('../src/nth.js')
const bf = require('../src/index.js')

describe('nth', () => {

  it('is curried', () => {
    const maybe = nth(2)([1, 2, 3, 4])
    assert(maybe.equals(Just(3)))
  })

  it('should retrieve Just the third item in a list', () => {
    assert(nth(2, [1, 2, 3, 4, 5]).equals(Just(3)))
  })

  it('should retrieve Just the third item in a list', () => {
    assert(nth(2, [1, 2, 3, 4, 5]).equals(Just(3)))
  })

  it('should return Nothing when list is shorter than requested index', () => {
    assert(nth(10, [1, 2, 3, 4, 5]).equals(Nothing()))
  })

  it('should be exported from index', () => {
    assert(bf.nth(2, [1, 2, 3, 4, 5]).equals(Just(3)))
  })

})
