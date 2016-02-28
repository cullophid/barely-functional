const assert = require('assert')
const compose = require('../compose.js')
const bf = require('../index.js')

describe('compose', () => {
    const inc = x => x + 1
    it('should run multiple functions in serial', () => {
        const actual = compose(inc, inc, inc, inc)(1)
        assert.equal(actual, 5)
    });

    it('is exported from index', () => {
        assert.deepEqual(bf.compose(inc, inc, inc, inc)(1), 5)
    })

})
