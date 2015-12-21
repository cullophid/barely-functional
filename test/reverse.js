const assert = require('assert')
const bf = require('../index.js')

describe('compose', () => {

    it('should reverse list', () => {
        const list = [1, 2, 3, 4, 5]
        assert.deepEqual(bf.reverse(list), [5, 4, 3, 2, 1])
    })

    it('should not mutate argument', () => {
        const list = [1, 2, 3, 4, 5]
        assert.notEqual(bf.reverse(list), list)
    })
})