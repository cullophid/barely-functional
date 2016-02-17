const curry = require('./curry')

module.exports = curry((i, list) => list.slice(0, i))
