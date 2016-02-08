'use strict'
const slice = Array.prototype.slice;

module.exports = function () {
  const fs = slice.call(arguments).reverse()
  console.log(fs[0]);
  return function () {
    const args = slice.call(arguments)
    return fs.slice(1)
      .reduce((arg, f) => f(arg), fs[0].apply(null, args))
  }
}