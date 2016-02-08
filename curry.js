'use strict'

module.exports = (f) => function () {
  let args = []
  const curried = function () {
    args = args.concat(Array.prototype.slice.call(arguments))
    return (args.length >= f.length) ? f.apply(null, args) : curried
  }
  return curried.apply(null, arguments)
}