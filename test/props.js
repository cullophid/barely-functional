const assert = require('assert')
const bf = require('../index.js')

describe('props', () => {

    it('should return the specified values from an object', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(bf.props(['a', 'b'], obj), [1, 2])
    })

})