const assert = require('assert')
const length = require('../src/length.js')
const bf = require('../src/index.js')

describe('length', () => {

  it('should return the length of a list', () => {
    assert.strictEqual(length([1, 2, 3, 4, 5]), 5)
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.length([1, 2, 3, 4, 5]), 5)
  })

})

