const assert = require('assert')
const bf = require('./')

describe('compose', () => {
  it('should run multiple functions in serial', () => {
    const plus1 = (e) => e + 1
    const actual = bf.compose(plus1, plus1, plus1, plus1)(1)
    assert.equal(actual, 5)
  });
})

describe('curry', () => {
  it('should curry the given function', () => {
    const add = bf.curry((a, b) => a + b)
    assert.equal(add(1)(2), add(1, 2))
  });
})
