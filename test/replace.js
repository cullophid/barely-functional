const assert = require('assert')
const replace = require('../replace.js')
const bf = require('../index.js')

describe('replace', () => {

  it('should be curried', () => {
    assert.strictEqual(replace(/\d/g, 5, '1, 2, 3, 4'), '5, 5, 5, 5');
  })

  it('should replace a matching regex with the provided replacement', () => {
    assert.strictEqual(replace(/\d/g, 5, '1, 2, 3, 4'), '5, 5, 5, 5');
  })

  it('should replace the first instance of the matching string with the provided replacement', () => {
    assert.strictEqual(replace('a', 'b', 'aaabbb'), 'baabbb');
  })

  it('should be exported from index', () => {
    assert.strictEqual(bf.replace(/\d/g, 5, '1, 2, 3, 4'), '5, 5, 5, 5');
  })

})
