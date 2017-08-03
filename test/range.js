const assert = require('assert')
const range = require('../src/range.js')
const bf = require('../src/index.js')

describe('range', () => {

    it('is curried', () => {
        assert.deepEqual(range(1)(5), [1, 2, 3, 4])
    })

    it('should create a range from 1 to 5 exclusive', () => {
        assert.deepEqual(range(1, 5), [1, 2, 3, 4])
    })

    it('is exported from index', () => {
        assert.deepEqual(bf.range(1, 5), [1, 2, 3, 4])
    })

})
