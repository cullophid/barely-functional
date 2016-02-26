const assert = require('assert')
const sort = require('../sort.js')
const bf = require('../index.js')

describe('sort', () => {

    it('should not mutate original list', () => {
        const list = ['z', 'a', 'h', 'd']
        assert.notEqual(sort(list), list)
    })

    it('should sort list by lexographic order', () => {
        const list = ['z', 'a', 'h', 'd']
        assert.deepEqual(sort(list), ['a', 'd', 'h', 'z'])
    })

    it('should be exported from index', () => {
        const list = ['z', 'a', 'h', 'd']
        assert.deepEqual(bf.sort(list), ['a', 'd', 'h', 'z'])
    })

})

