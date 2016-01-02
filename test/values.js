const assert = require('assert')
const bf = require('../index.js')

describe('values', () => {

    it('should returns a list of an object\'s values', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(bf.values(obj), [1, 2, 3])
    })

})