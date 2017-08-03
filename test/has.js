const assert = require('assert')
const has = require('../src/has.js')
const bf = require('../src/index.js')

describe('has', () => {

  it('should be curried', () => {
    const obj = {a: 1, b: 2, c: 3}
    assert.strictEqual(has('a')(obj), true)
  })

  it('should return if the specified key is in an object', () => {
    const obj = {a: 1, b: 2, c: 3}
    assert.strictEqual(has('a', obj), true)
  })

  it('should return if the specified key is in an object create with Object.create(null)', () => {
    const obj = Object.create(null)
    obj.a = 1
    assert.strictEqual(has('a', obj), true)
  })

  it('should be exported from index', () => {
    const obj = {a: 1, b: 2, c: 3}
    assert.strictEqual(bf.has('a', obj), true)
  })

})
