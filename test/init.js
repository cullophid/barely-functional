const assert = require('assert')
const init = require('../init.js')

describe('init', () => {

  it('does not mutate the original list', () => {
    const xs = [1, 2, 3, 4]
    const initxs = init(xs)
    assert.notStrictEqual(xs, initxs)
  })

  it('should remove the last item of the list', () => {
    assert.deepEqual(init([1, 2, 3, 4, 5]), [1, 2, 3, 4])
  })

})