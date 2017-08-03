const assert = require('assert')
const filter = require('../src/filter.js')
const bf = require('../src/index.js')

describe('filter', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    assert.deepEqual(filter(isEven)([1, 2, 3, 4, 5, 6]), [2, 4, 6])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    assert.notStrictEqual(arr, filter(isEven, arr))
  })

  it('should remove any elements that do not satisfy the predicate', () => {
    assert.deepEqual(filter(isEven, [1, 2, 3, 4, 5, 6]), [2, 4, 6])
    assert.deepEqual(filter(isEven, [1, 3, 5]), [])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.filter(isEven, [1, 2, 3, 4, 5, 6]), [2, 4, 6])
  })

})
