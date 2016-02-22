const curry = require('./curry')

module.exports = curry((x, xs) => xs.indexOf(x))
