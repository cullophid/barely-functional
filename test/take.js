const assert = require('assert')
const take = require('../take.js')
const bf = require('../index.js')

describe('take', () => {

  it('should be curried', () => {
    assert.deepEqual(take(2)([1, 2, 3, 4, 5]), [1, 2])
  })

  it('does not mutate the original list', () => {
    const xs = [1, 2, 3, 4]
    assert.notStrictEqual(xs, take(2, xs))
  })

  it('should remove the first two items of the list', () => {
    assert.deepEqual(take(2, [1, 2, 3, 4, 5]), [1, 2])
  })

  it('should be exported from index', () => {
    assert.deepEqual(bf.take(2, [1, 2, 3, 4, 5]), [1, 2])
  })

})