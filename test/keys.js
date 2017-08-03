const assert = require('assert')
const keys = require('../src/keys.js')
const bf = require('../src/index.js')

describe('keys', () => {

    it('should returns a list of an object\'s keys', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(keys(obj), ['a', 'b', 'c'])
    })

    it('should be exported from index', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(bf.keys(obj), ['a', 'b', 'c'])
    })

})
