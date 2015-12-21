const assert = require('assert')
const bf = require('../index.js')

describe('curry', () => {
    it('should curry the given function', () => {
        const add = bf.curry((a, b) => a + b)
        assert.equal(add(1)(2), add(1, 2))
    });
})