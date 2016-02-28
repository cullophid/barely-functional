const assert = require('assert')
const some = require('../some.js')
const bf = require('../index.js')

describe('some', () => {

  const isEven = x => x % 2 === 0

  it('is curried', () => {
    assert.strictEqual(some(isEven)([1, 2, 3, 4, 5, 6]), true)
  })


  it('should test each element against the supplied predicate', () => {
    assert.strictEqual(some(isEven, [1, 3, 5]), false)
    assert.strictEqual(some(isEven, [1, 2, 3, 4, 5, 6]), true)
  })

  it('is exported from index', () => {
    assert.strictEqual(bf.some(isEven, [1, 2, 3, 4, 5, 6]), true)
  })

})
