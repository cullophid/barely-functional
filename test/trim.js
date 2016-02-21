const assert = require('assert')
const trim = require('../trim.js')
const bf = require('../index.js')

describe('trim', () => {

  it('should remove whitespace from either side of a string', () => {
    assert.deepEqual(trim('  abcde  '), 'abcde')
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.trim('  abcde  '), 'abcde')
  })

})
