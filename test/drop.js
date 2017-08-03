const assert = require('assert')
const drop = require('../src/drop.js')
const bf = require('../src/index.js')

describe('drop', () => {

  it('is curried', () => {
    assert.deepEqual(drop(2)([1, 2, 3, 4, 5]), [3, 4 ,5])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5]
    const dropped = drop(2, arr)
    assert.notStrictEqual(arr, dropped)
  })

  it('should drop the first two items from a list', () => {
    assert.deepEqual(drop(2, [1, 2, 3, 4, 5]), [3, 4 ,5])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.drop(2, [1, 2, 3, 4, 5]), [3, 4 ,5])
  })

})
