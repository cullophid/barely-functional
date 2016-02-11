const assert = require('assert')
const length = require('../length.js')

describe('length', () => {

  it('should return the length of a list', () => {
    assert.strictEqual(length([1, 2, 3, 4, 5]), 5)
  })

})