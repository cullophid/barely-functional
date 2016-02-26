const assert = require('assert')
const reduceRight = require('../reduceRight.js')
const bf = require('../index.js')

describe('reduceRight', () => {

  const concat = (xs, x) => xs.concat(x)

  it('is curried', () => {
    assert.deepEqual(reduceRight(concat, [])([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
    assert.deepEqual(reduceRight(concat)([])([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  })

  it('does not mutate the original list', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    assert.notStrictEqual(arr, reduceRight(concat, [], [1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  })

  it('should a fill the initial accumlator from right to left', () => {
    assert.deepEqual(reduceRight(concat, [], [1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  })

  it('is exported from index', () => {
    assert.deepEqual(bf.reduceRight(concat, [], [1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  })

})

