const curry = require('./curry')

module.exports = curry((delimiter, xs) => xs.join(delimiter))
