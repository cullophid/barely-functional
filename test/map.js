const assert = require('assert')
const map = require('../src/map.js')
const bf = require('../src/index.js')

describe('map', () => {

  const inc = x => x + 1

  it('is curried', () => {
    assert.deepEqual(map(inc)([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6, 7])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    assert.notStrictEqual(arr, map(inc, arr))
  })

  it('should map a function over an array', () => {
    assert.deepEqual(map(inc, [1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6, 7])
  })

  it('should only use only one argument when invoking the provided mapping function', () => {
    assert.deepEqual(map(parseInt, ['1', '2', '3', '4', '5']), [1, 2, 3, 4, 5])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.map(inc, [1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6, 7])
  })

})
