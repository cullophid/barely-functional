const assert = require('assert')
const slice = require('../src/slice.js')
const bf = require('../src/index.js')

describe('slice', () => {

  it('is curried', () => {
    assert.deepEqual(slice(1, 4)([1, 2, 3, 4, 5]), [2, 3, 4])
    assert.deepEqual(slice(1)(4)([1, 2, 3, 4, 5]), [2, 3, 4])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    assert.notStrictEqual(arr, slice(1, 4, [1, 2, 3, 4, 5]), [2, 3, 4])
  })

  it('should return a subset of the array from the provided indices', () => {
    assert.deepEqual(slice(1, 4, [1, 2, 3, 4, 5]), [2, 3, 4])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.slice(1, 4, [1, 2, 3, 4, 5]), [2, 3, 4])
  })

})

