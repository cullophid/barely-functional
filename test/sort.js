const assert = require('assert')
const bf = require('../index.js')

describe('sort', () => {

    it('should sort list by lexographic order', () => {
        const list = ['z', 'a', 'h', 'd']
        assert.deepEqual(bf.sort(list), ['a', 'd', 'h', 'z'])
    })

    it('should not mutate argument', () => {
        const list = ['z', 'a', 'h', 'd']
        assert.notEqual(bf.sort(list), list)
    })
})
