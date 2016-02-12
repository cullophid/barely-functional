const curry = require('./curry')

module.exports = curry((key, xs) => xs.map(o => o[key]).filter(x => x != null))
