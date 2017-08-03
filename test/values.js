const assert = require('assert')
const values = require('../src/values.js')
const bf = require('../src/index.js')

describe('values', () => {

    it('should returns a list of an object\'s values', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(values(obj), [1, 2, 3])
    })

    it('should be exported from index', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(bf.values(obj), [1, 2, 3])
    })

})
