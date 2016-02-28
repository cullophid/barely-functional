const assert = require('assert')
const reduce = require('../reduce.js')
const bf = require('../index.js')

describe('reduce', () => {

  const add = (a, b) => a + b

  it('is curried', () => {
    assert.strictEqual(reduce(add, 10)([1, 2, 3]), 16)
    assert.strictEqual(reduce(add)(10)([1, 2, 3]), 16)
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    assert.notStrictEqual(arr, reduce(add, 10, [1, 2, 3]))
  })

  it('should a reduce list down to a single value', () => {
    assert.strictEqual(reduce(add, 10, [1, 2, 3]), 16)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.reduce(add, 10, [1, 2, 3]), 16)
  })

})

