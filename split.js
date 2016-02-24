const curry = require('./curry')

module.exports = curry((regex, str) => str.split(regex))
