const assert = require('assert')
const curry = require('../curry.js')
const bf = require('../index.js')

describe('curry', () => {

    it('should curry the given function', () => {
        const add = curry((a, b) => a + b)
        assert.equal(add(1)(2), add(1, 2))
    })

    it('is exported from index', () => {
        const add = bf.curry((a, b) => a + b)
        assert.equal(add(1)(2), add(1, 2))
    })

})
