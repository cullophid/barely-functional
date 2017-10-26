const curry = (f, args=[]) => {
  function curried() {
    const nextArgs = args.concat(Array.prototype.slice.call(arguments))
    return (nextArgs.length === f.length) 
      ? f.apply(null, nextArgs)
      : curry(f, nextArgs)
  }

  return curried
}

module.exports = curry
