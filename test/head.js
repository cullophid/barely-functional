const assert = require('assert')
const head = require('../head.js')

describe('head', () => {

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4]
    head(arr)
    assert.deepEqual(arr, [1, 2, 3, 4])
  })

  it('should retrieve first item in a list', () => {
    assert.deepEqual(head([1, 2, 3, 4, 5]), 1)
  })

})