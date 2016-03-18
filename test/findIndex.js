const assert = require('assert')
const Nothing = require('../Maybe').Nothing
const Just = require('../Maybe').Just
const findIndex = require('../findIndex.js')
const bf = require('../index.js')

describe('findIndex', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    const maybe = findIndex(isEven)([1, 2, 3, 4, 5, 6])
    assert(maybe.equals(Just(1)))
  })

  it('should find Just the index of the first element that satisfies the ' +
      'predicate', () => {
    assert(findIndex(isEven, [1, 2, 3, 4, 5, 6]).equals(Just(1)))
  })

  it('should return Nothing() if it does not find an element that satisfies' +
      ' the predicate', () => {
    assert(findIndex(isEven, [1, 3, 5]).equals(Nothing()))
  })

  it('is exported from index', () => {
    assert(bf.findIndex(isEven, [1, 2, 3, 4, 5, 6]).equals(Just(1)))
  })

})
