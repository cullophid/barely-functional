const assert = require('assert')
const bf = require('../index.js')

describe('sortBy', () => {

    it('should sort list using a customer comparator', () => {
        const list = [6, 9, 1, 21, 11]
        assert.deepEqual(bf.sortBy((a, b) => a - b, list), [1, 6, 9, 11, 21])
    })

    it('should not mutate argument', () => {
        const list = [6, 9, 1, 21, 11]
        assert.notEqual(bf.sortBy((a, b) => a - b, list), list)
    })
})