const curry = require('./curry')

module.exports = curry((f, init, xs) => xs.reduce(f, init))
