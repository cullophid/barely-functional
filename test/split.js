const assert = require('assert')
const split = require('../split.js')
const bf = require('../index.js')

describe('split', () => {

  it('should be curried', () => {
    assert.deepEqual(split(/\d/)("I have 3 apples and 2 oranges"), ["I have ", " apples and ", " oranges"]);
  })

  it('should join a list with a delimiter into a string', () => {
    assert.deepEqual(split(/\d/, "I have 3 apples and 2 oranges"), ["I have ", " apples and ", " oranges"]);
    assert.deepEqual(split('-', "a-b-c-d"), ['a', 'b', 'c', 'd']);
  })

  it('should be exported from index', () => {
    assert.deepEqual(bf.split(/\d/, "I have 3 apples and 2 oranges"), ["I have ", " apples and ", " oranges"]);
  })

})
