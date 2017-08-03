const assert = require('assert')
const reverse = require('../src/reverse.js')
const bf = require('../src/index.js')

describe('reverse', () => {

    it('should not mutate the list', () => {
        const list = [1, 2, 3, 4, 5]
        assert.notEqual(reverse(list), list)
    })

    it('should reverse the list', () => {
        const list = [1, 2, 3, 4, 5]
        assert.deepEqual(reverse(list), [5, 4, 3, 2, 1])
    })

    it('should be exported from index', () => {
        const list = [1, 2, 3, 4, 5]
        assert.deepEqual(bf.reverse(list), [5, 4, 3, 2, 1])
    })
})
