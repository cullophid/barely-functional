const assert = require('assert')
const toUpperCase = require('../src/toUpperCase.js')
const bf = require('../src/index.js')

describe('toUpperCase', () => {

  it('should convert a string to all upper case', () => {
    assert.deepEqual(toUpperCase('abcde'), 'ABCDE')
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.toUpperCase('abcde'), 'ABCDE')
  })

})

