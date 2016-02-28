const assert = require('assert')
const sum = require('../sum.js')
const bf = require('../index.js')

describe('sort', () => {

  it('should add all the numbers in a litst together', () => {
    const list = [1, 2, 3 ,4, 5]
    assert.deepEqual(sum(list), 15)
  })

  it('should be exported from index', () => {
    const list = [1, 2, 3 ,4, 5]
    assert.deepEqual(bf.sum(list), 15)
  })

})
