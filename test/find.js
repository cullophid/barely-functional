const assert = require('assert')
const find = require('../find.js')
const bf = require('../index.js')

describe('find', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    assert.strictEqual(find(isEven)([1, 2, 3, 4, 5, 6]), 2)
  })

  it('should find first element that satisfies the predicate', () => {
    assert.strictEqual(find(isEven, [1, 2, 3, 4, 5, 6]), 2)
  })

  it('should return undefined if it does not find an element that satisfies the predicate', () => {
    assert.strictEqual(find(isEven, [1, 3, 5]), void 0)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.find(isEven, [1, 2, 3, 4, 5, 6]), 2)
  })

})
