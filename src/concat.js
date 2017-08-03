const curry = require('./curry')

module.exports = curry((xs, xss) => xs.concat(xss))
