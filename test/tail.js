const assert = require('assert')
const tail = require('../src/tail.js')
const bf = require('../src/index.js')

describe('tail', () => {

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4]
    assert.notStrictEqual(arr, tail(arr))
  })

  it('should retrieve the cons of the list', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  })

  it('should be exported from index', () => {
    assert.deepEqual(bf.tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  })

})
