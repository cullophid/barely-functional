const curry = require('./curry')

module.exports = curry((regex, replacement, str) => str.replace(regex, replacement))
