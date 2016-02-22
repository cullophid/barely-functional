const curry = require('./curry')

module.exports = curry((pred, xs) => xs.findIndex(pred))
