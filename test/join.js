const assert = require('assert')
const join = require('../join.js')
const bf = require('../index.js')

describe('join', () => {

  it('should be curried', () => {
    assert.strictEqual(join("")(['a', 'b', 'c']), 'abc');
  })

  it('should join a list with a delimiter into a string', () => {
    assert.strictEqual(join("", ['a', 'b', 'c']), 'abc');
    assert.strictEqual(join("-", ['a', 'b', 'c']), 'a-b-c');
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.join("", ['a', 'b', 'c']), 'abc');
  })

})
