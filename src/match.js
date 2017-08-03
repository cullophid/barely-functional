const curry = require('./curry')

module.exports = curry((regex, str) => str.match(regex))
