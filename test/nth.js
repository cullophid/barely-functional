const assert = require('assert')
const nth = require('../nth.js')
const bf = require('../index.js')

describe('nth', () => {

  it('is curried', () => {
    assert.strictEqual(nth(2)([1, 2, 3, 4]), 3);
  })

  it('should retrieve third item in a list', () => {
    assert.strictEqual(nth(2, [1, 2, 3, 4, 5]), 3)
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.nth(2, [1, 2, 3, 4, 5]), 3)
  })

})
