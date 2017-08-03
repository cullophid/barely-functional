const curry = require('./curry')

module.exports = curry((e, xs) => xs.indexOf(e) !== -1)
