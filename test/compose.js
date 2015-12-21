const assert = require('assert')
const bf = require('../index.js')

describe('compose', () => {
    it('should run multiple functions in serial', () => {
        const plus1 = (e) => e + 1
        const actual = bf.compose(plus1, plus1, plus1, plus1)(1)
        assert.equal(actual, 5)
    });
})