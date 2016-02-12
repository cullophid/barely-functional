const assert = require('assert')
const last = require('../last.js')

describe('last', () => {

  it('should retrieve last item in a list', () => {
    assert.strictEqual(last([1, 2, 3, 4, 5]), 5)
  })

})