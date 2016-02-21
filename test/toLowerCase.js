const assert = require('assert')
const toLowerCase = require('../toLowerCase.js')
const bf = require('../index.js')

describe('toLowerCase', () => {

  it('should convert a string to all lower case', () => {
    assert.deepEqual(toLowerCase('ABCDE'), 'abcde')
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.toLowerCase('ABCDE'), 'abcde')
  })

})
