const assert = require('assert')
const bf = require('../index.js')

describe('pluck', () => {

    it('should pluck values from list of objects', () => {
        const list = [{a: 1}, {a: 2}, {a: 3}]
        assert.deepEqual(bf.pluck('a', list), [1, 2, 3])
    })

})