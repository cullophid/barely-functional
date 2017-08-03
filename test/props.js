const assert = require('assert')
const props = require('../src/props.js')
const bf = require('../src/index.js')

describe('props', () => {

    it('should be curried', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(props(['a', 'b'])(obj), [1, 2])
    })

    it('should return the specified values from an object', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(props(['a', 'b'], obj), [1, 2])
    })

    it('should be exported from index', () => {
        const obj = {a: 1, b: 2, c: 3}
        assert.deepEqual(bf.props(['a', 'b'], obj), [1, 2])
    })

})
