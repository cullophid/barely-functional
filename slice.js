const curry = require('./curry')

module.exports = curry((start, end, xs) => xs.slice(start, end))
