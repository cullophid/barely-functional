const assert = require('assert')

const monoid = (a) => {
    assert(a.empty().concat(a).equals(a));
    assert(a.concat(a.empty()).equals(a));
}

const functor = (a, f, g) => {
    assert(a.map(a => a).equals(a));
    assert(a.map(x => f(g(x))).equals(a.map(g).map(f)));
}

const apply = (a, b, c) => {
    assert(a.map(function(f) {
        return function(g) {
            return function(x) {
                return f(g(x));
            };
        };
    }).ap(b).ap(c).equals(a.ap(b.ap(c))));
}

const applicative = (a, b, f, x) => {
    assert(a.of(a => a).ap(b).equals(b));
    assert(a.of(f).ap(a.of(x)).equals(a.of(f(x))));
    assert(a.of(f => f(x)).ap(b).equals(b.ap(a.of(x))));
}

const chain = (a, f, g) => {
    assert(a.chain(f).chain(g)
        .equals(a.chain(x => f(x).chain(g))));
}

const monad = (a, f, x) => {
    assert(a.of(x).chain(f).equals(f(x)));
    assert(a.chain(a.of).equals(a));
}

module.exports = {
    monoid: monoid,
    functor: functor,
    apply: apply,
    applicative: applicative,
    chain: chain,
    monad: monad
}
