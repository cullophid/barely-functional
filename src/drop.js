const curry = require('./curry')

module.exports = curry((i, xs) => xs.slice(i))