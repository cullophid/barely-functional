const assert = require('assert')
const pluck = require('../src/pluck.js')
const bf = require('../src/index.js')

describe('pluck', () => {

    it('is curried', () => {
        assert.deepEqual(pluck('a')([{a: 1}, {a: 2}, {a: 3}]), [1, 2, 3])
    })

    it('should pluck values from list of objects', () => {
        const list = [{a: 1}, {b: 2}, {a: 3}]
        assert.deepEqual(pluck('a', list), [1, 3])
    })

    it('is exported from the index file', () => {
        const list = [{a: 1}, {b: 2}, {a: 3}]
        assert.deepEqual(bf.pluck('a', list), [1, 3])
    })

})

