const assert = require('assert')
const findIndex = require('../findIndex.js')
const bf = require('../index.js')

describe('findIndex', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    assert.strictEqual(findIndex(isEven)([1, 2, 3, 4, 5, 6]), 1)
  })


  it('should find the index of the first element that satisfies the predicate', () => {
    assert.strictEqual(findIndex(isEven, [1, 2, 3, 4, 5, 6]), 1)
  })

  it('should return -1 if it does not find an element that satisfies the predicate', () => {
    assert.strictEqual(findIndex(isEven, [1, 3, 5]), -1)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.findIndex(isEven, [1, 2, 3, 4, 5, 6]), 1)
  })

})