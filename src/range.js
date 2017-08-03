const curry = require('./curry')

module.exports = curry((start, end) => Array(end - start).fill(1).map((e, i) => i + start))
