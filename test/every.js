const assert = require('assert')
const every = require('../src/every.js')
const bf = require('../src/index.js')

describe('every', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    assert.strictEqual(every(isEven)([2, 4, 6]), true)
  })


  it('should test each element against the supplied predicate', () => {
    assert.strictEqual(every(isEven, [2, 4, 6]), true)
    assert.strictEqual(every(isEven, [1, 2, 3, 4, 5, 6]), false)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.every(isEven, [1, 2, 3, 4, 5, 6]), false)
  })

})
