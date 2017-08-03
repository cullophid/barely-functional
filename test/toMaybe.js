const assert = require('assert')
const Nothing = require('../src/Maybe').Nothing
const Just = require('../src/Maybe').Just
const toMaybe = require('../src/toMaybe.js')
const bf = require('../src/index.js')

describe('toMaybe', () => {

    it('should convert a null value to a Nothing()', () => {
        assert(toMaybe(null).equals(Nothing()))
        assert(toMaybe(void 0).equals(Nothing()))
    })

    it('should convert a non-null value to a Just', () => {
        assert(toMaybe(1).equals(Just(1)))
    })

    it('is exported from index', () => {
        assert(bf.toMaybe(1).equals(Just(1)))
        assert(bf.toMaybe(null).equals(Nothing()))
    })

})
