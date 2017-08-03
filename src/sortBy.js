const curry = require('./curry')

module.exports = curry((f, xs) => [].concat(xs).sort(f))