const assert = require('assert')
const Nothing = require('../src/Maybe').Nothing
const Just = require('../src/Maybe').Just
const fromMaybe = require('../src/fromMaybe.js')
const bf = require('../src/index.js')

describe('fromMaybe', () => {

    it('should be curried', () => {
        const val = fromMaybe(5)(Just(1))
        assert.strictEqual(val, 1)
    })

    it('should return default when given a Nothing()', () => {
        assert.strictEqual(fromMaybe(5, Nothing()), 5)
    })

    it('should unwrap Just', () => {
        assert.strictEqual(fromMaybe(5, Just(1)), 1)
    })

    it('is exported from index', () => {
        assert.strictEqual(bf.fromMaybe(5, Just(1)), 1)
    })

})
