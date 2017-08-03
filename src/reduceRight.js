const curry = require('./curry')

module.exports = curry((f, init, xs) => xs.reduceRight(f, init))
