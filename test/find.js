const assert = require('assert')
const find = require('../find.js')
const Nothing = require('../Maybe').Nothing
const Just = require('../Maybe').Just
const bf = require('../index.js')

describe('find', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    const maybe = find(isEven)([1, 2, 3, 4, 5, 6]);
    assert(maybe.equals(Just(2)))
  })

  it('should find Just the first element that satisfies the predicate', () => {
    assert(find(isEven, [1, 2, 3, 4, 5, 6]).equals(Just(2)))
  })

  it('should return Nothing if it does not find an element that satisfies' +
      ' the predicate', () => {
    assert(find(isEven, [1, 3, 5]).equals(Nothing()))
  })

  it('is exported from index', () => {
    assert(bf.find(isEven, [1, 2, 3, 4, 5, 6]).equals(Just(2)))
  })

})
