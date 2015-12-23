const assert = require('assert')
const bf = require('../index.js')

describe('assign', () => {

    it('should merge a list of objects', () => {
        const list = [{a: 1}, {b: 2}, {c: 3}]
        assert.deepEqual(bf.assign(list), {a: 1, b: 2, c: 3})
    })

    it('objects with the duplicate keys are resolved as last in wins', () => {
        const list = [{a: 1}, {b: 2}, {b: 3}]
        assert.deepEqual(bf.assign(list), {a: 1, b: 3})
    })

})