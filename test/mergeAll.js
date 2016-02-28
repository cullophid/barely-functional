const assert = require('assert')
const mergeAll = require('../mergeAll.js')
const bf = require('../index.js')

describe('mergeAll', () => {

    it('should not mutate the original objects', () => {
        const xs = [{a: 1}, {b: 2}, {c: 3}]
        mergeAll(xs)
        assert.deepEqual(xs[0], {a: 1})
        assert.deepEqual(xs[1], {b: 2})
        assert.deepEqual(xs[2], {c: 3})
    })

    it('should merge a list of objects', () => {
        const xs = [{a: 1}, {b: 2}, {c: 3}]
        assert.deepEqual(mergeAll(xs), {a: 1, b: 2, c: 3})
    })

    it('objects with the duplicate keys are resolved as last in wins', () => {
        const xs = [{a: 1}, {b: 2}, {b: 3}]
        assert.deepEqual(mergeAll(xs), {a: 1, b: 3})
    })

    it('should be exported from index', () => {
        const xs = [{a: 1}, {b: 2}, {c: 3}]
        assert.deepEqual(bf.mergeAll(xs), {a: 1, b: 2, c: 3})
    })

})
