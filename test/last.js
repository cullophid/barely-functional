const assert = require('assert')
const last = require('../src/last.js')
const bf = require('../src/index.js')

describe('last', () => {

  it('should retrieve last item in a list', () => {
    assert.strictEqual(last([1, 2, 3, 4, 5]), 5)
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.last([1, 2, 3, 4, 5]), 5)
  })

})

