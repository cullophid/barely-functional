const assert = require('assert')
const init = require('../src/init.js')
const bf = require('../src/index.js')

describe('init', () => {

  it('does not mutate the original list', () => {
    const xs = [1, 2, 3, 4]
    const initxs = init(xs)
    assert.notStrictEqual(xs, initxs)
  })

  it('should remove the last item of the list', () => {
    assert.deepEqual(init([1, 2, 3, 4, 5]), [1, 2, 3, 4])
  })

  it('is exported from index', () => {
    assert.deepEqual(init([1, 2, 3, 4, 5]), [1, 2, 3, 4])
  })

})
