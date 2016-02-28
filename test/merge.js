const assert = require('assert')
const merge = require('../merge.js')
const bf = require('../index.js')

describe('merge', () => {

    it('should merge be curried', () => {
        const obj = {a: 1}
        const obj1 = {b: 2}
        assert.deepEqual(merge(obj)(obj1), {a: 1, b: 2})
    })

    it('should not mutate the original objects', () => {
        const obj = {a: 1}
        const obj1 = {b: 2}
        merge(obj, obj1)
        assert.deepEqual(obj, {a: 1})
        assert.deepEqual(obj1, {b: 2})
    })

    it('should merge two objects', () => {
        const obj = {a: 1}
        const obj1 = {b: 2}
        assert.deepEqual(merge(obj, obj1), {a: 1, b: 2})
    })

    it('merges objects and duplicate keys are resolved as last in wins', () => {
        const obj = {a: 1, b:1}
        const obj1 = {b: 2}
        assert.deepEqual(merge(obj, obj1), {a: 1, b: 2})
    })

    it('should be exported from index', () => {
        const obj = {a: 1, b:1}
        const obj1 = {b: 2}
        assert.deepEqual(bf.merge(obj, obj1), {a: 1, b: 2})
    })

})
