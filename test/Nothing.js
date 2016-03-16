const assert = require('assert')
const Nothing = require('../Maybe').Nothing
const Just = require('../Maybe').Just
const laws = require('./common/laws')

describe('Nothing', () => {

    it('implements Monoid', function() {
        laws.monoid(Nothing())
    });

    it('implements Functor', function() {
        const a = Nothing();
        const f = x => x + 1;
        const g = x => x + 2;

        laws.functor(a, f, g)
    })

    it('implements Apply', () =>  {
        const a = Nothing();
        const b = Nothing();
        const c = Nothing();

        laws.apply(a, b, c)
    })

    it('implements Applicative', () => {
        const a = Nothing();
        const b = Nothing();
        const f = x => x + 1;
        const x = 7;

        laws.applicative(a, b, f, x)
    })

    it('implements Chain', () =>  {
        const a = Nothing();
        const f = xs => xs.length === 0 ? Nothing() : Just(xs[0]);
        const g = (n, xs) => xs.length >= 0 ? Nothing() : Just(xs[n]);

        laws.chain(a, f, g)
    })

    it('implements Monad', () =>  {
        const a = Nothing();
        const f = xs => xs.length === 0 ? Nothing() : Just(xs[0]);
        const x = [1, 2, 3];

        laws.monad(a, f, x)
    })
})
