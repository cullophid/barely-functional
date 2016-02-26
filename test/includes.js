const assert = require('assert')
const includes = require('../includes.js')
const bf = require('../index.js')

describe('includes', () => {

  it('is curried', () => {
    assert.strictEqual(includes(1)([1, 2, 3, 4]), true)
  })

  it('should indicate if the element is in the list', () => {
    assert.strictEqual(includes(1, [1, 2, 3, 4]), true)
  })

  it('should indicate if the element is not in the list', () => {
    assert.strictEqual(includes(5, [1, 2, 3, 4]), false)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.includes(5, [1, 2, 3, 4]), false)
  })

})
