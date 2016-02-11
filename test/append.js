const assert = require('assert')
const append = require('../append.js')

describe('append', () => {

  it('is curried', () => {
    assert.deepEqual(append(5)([1, 2, 3, 4]), [1, 2, 3, 4 ,5])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4]
    const appended = append(5, arr)
    assert.notStrictEqual(arr, appended)
  })

  it('should append the item to a list', () => {
    assert.deepEqual(append(5, [1, 2, 3, 4]), [1, 2, 3, 4 ,5])
  })

})