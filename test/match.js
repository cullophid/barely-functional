const assert = require('assert')
const match = require('../src/match.js')
const bf = require('../src/index.js')

describe('match', () => {

  it('should be curried', () => {
    assert.deepEqual(match(/a./g)('falafel'), ['al', 'af']);
  })

  it('should join a list with a delimiter into a string', () => {
    assert.deepEqual(match(/a./g, 'falafel'), ['al', 'af']);
    assert.deepEqual(match(/a./, 'hummus'), null);
  })

  it('should be exported from index', () => {
    assert.deepEqual(bf.match(/a./g, 'falafel'), ['al', 'af']);
  })

})

