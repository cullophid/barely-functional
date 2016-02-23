const assert = require('assert')
const concat = require('../concat.js')
const bf = require('../index.js')

describe('concat', () => {

  it('is curried', () => {
    assert.deepEqual(concat([1, 2, 3])([4, 5, 6]), [1, 2, 3, 4 , 5, 6])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3]
    const concated = concat(arr, [4, 5, 6])
    assert.notStrictEqual(arr, concated)
  })

  it('should concatenate two lists', () => {
    assert.deepEqual(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4 , 5, 6])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4 , 5, 6])
  })

})