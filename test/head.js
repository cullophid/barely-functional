const assert = require('assert')
const head = require('../head.js')
const bf = require('../index.js')

describe('head', () => {

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4]
    head(arr)
    assert.deepEqual(arr, [1, 2, 3, 4])
  })

  it('should retrieve first item in a list', () => {
    assert.deepEqual(head([1, 2, 3, 4, 5]), 1)
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.head([1, 2, 3, 4, 5]), 1)
  })

})