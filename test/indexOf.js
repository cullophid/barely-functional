const assert = require('assert')
const indexOf = require('../indexOf.js')
const bf = require('../index.js')

describe('indexOf', () => {

  it('is curried', () => {
    assert.strictEqual(indexOf(5)([1, 3, 5, 7, 9]), 2)
  })


  it('should find the index of the first element that satisfies the predicate', () => {
    assert.strictEqual(indexOf(9, [1, 3, 5, 7, 9]), 4)
  })

  it('should return -1 if it does not find an element that satisfies the predicate', () => {
    assert.strictEqual(indexOf(6, [1, 3, 5]), -1)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.indexOf(5, [1, 3, 5, 7, 9]), 2)
  })

})