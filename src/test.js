const curry = require('./curry')

module.exports = curry((regex, string) => string.search(regex) !== -1)