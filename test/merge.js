const assert = require('assert')
const bf = require('../index.js')

describe('merge', () => {

    it('should merge two objects', () => {
        const obj = {a: 1}
        const obj1 = {b: 2}
        assert.deepEqual(bf.merge(obj, obj1), {a: 1, b: 2})
    })

    it('merges objects and duplicate keys are resolved as last in wins', () => {
        const obj = {a: 1, b:1}
        const obj1 = {b: 2}
        assert.deepEqual(bf.merge(obj, obj1), {a: 1, b: 2})
    })

})