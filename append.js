const curry = require('./curry')

module.exports = curry((x, xs) => xs.concat([x]))
