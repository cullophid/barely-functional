const assert = require('assert')
const toLowerCase = require('../src/toLowerCase.js')
const bf = require('../src/index.js')

describe('toLowerCase', () => {

  it('should convert a string to all lower case', () => {
    assert.deepEqual(toLowerCase('ABCDE'), 'abcde')
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.toLowerCase('ABCDE'), 'abcde')
  })

})

