const assert = require('assert')
const trim = require('../src/trim.js')
const bf = require('../src/index.js')

describe('trim', () => {

  it('should remove whitespace from either side of a string', () => {
    assert.deepEqual(trim('  abcde  '), 'abcde')
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.trim('  abcde  '), 'abcde')
  })

})

