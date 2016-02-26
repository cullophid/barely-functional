const assert = require('assert')
const prop = require('../prop.js')
const bf = require('../index.js')

describe('prop', () => {

    it('should be curried', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.strictEqual(prop('a')(obj), 1)
    })

    it('should return the specified value from an object', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.strictEqual(prop('a', obj), 1)
    })

    it('should be exported from index', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.strictEqual(bf.prop('a', obj), 1)
    })

})
