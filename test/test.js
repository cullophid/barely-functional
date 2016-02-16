const assert = require('assert')
const test = require('../test.js')
const bf = require('../index.js')

describe('test', () => {

  it('should be curried', () => {
    assert.strictEqual(test(/abc/)('abcdef'), true)
  })

  it('should determine if string satisfies the regex', () => {
    assert.strictEqual(test(/abc/, 'abcdef'), true)
    assert.strictEqual(test(/abc/, 'defghi'), false)
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.test(/abc/, 'abcdef'), true)
  })

})