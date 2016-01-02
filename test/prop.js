const assert = require('assert')
const bf = require('../index.js')

describe('prop', () => {

    it('should return the specified value from an object', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.strictEqual(bf.prop('a', obj), 1)
    })

})