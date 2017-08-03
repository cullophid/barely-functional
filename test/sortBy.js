const assert = require('assert')
const sortBy = require('../src/sortBy.js')
const bf = require('../src/index.js')

describe('sortBy', () => {

    it('should be curried', () => {
        const list = [6, 9, 1, 21, 11]
        assert.deepEqual(sortBy((a, b) => a - b)(list), [1, 6, 9, 11, 21])
    })

    it('should not mutate original list', () => {
        const list = [6, 9, 1, 21, 11]
        assert.notEqual(sortBy((a, b) => a - b, list), list)
    })

    it('should sort list using a customer comparator', () => {
        const list = [6, 9, 1, 21, 11]
        assert.deepEqual(sortBy((a, b) => a - b, list), [1, 6, 9, 11, 21])
    })

    it('should be exported from index', () => {
        const list = [6, 9, 1, 21, 11]
        assert.notEqual(bf.sortBy((a, b) => a - b, list), list)
    })

})
