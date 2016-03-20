const curry = require('./curry')

module.exports = curry((f, xs) => xs.map(x => f(x)))
