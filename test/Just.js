const assert = require('assert')
const Nothing = require('../src/Maybe').Nothing
const Just = require('../src/Maybe').Just
const laws = require('./common/laws')

describe('Just', () => {

    it('implements Monoid', function() {
        laws.monoid(Just(1))
    })

    it('implements Functor', function() {
        const a = Just(2);
        const f = x => x + 1;
        const g = x => x + 2;

        laws.functor(a, f, g)
    })

    it('implements Apply', () =>  {
        const a = Just(x => x + 1);
        const b = Just(x => x + 2);
        const c = Just(3);

        laws.apply(a, b, c)
    })

    it('implements Applicative', () => {
        const a = Just(4);
        const b = Just(x => x + 1);
        const f = x => x + 1;
        const x = 7;

        laws.applicative(a, b, f, x)
    })

    it('implements Chain', () =>  {
        const a = Just([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        const f = xs => xs.length === 0 ? Nothing() : Just(xs[0]);
        const g = xs => xs.length === 0 ? Nothing() : Just(xs[xs.length - 1]);

        laws.chain(a, f, g)
    })

    it('implements Monad', () =>  {
        const a = Just(5);
        const f = xs => xs.length === 0 ? Nothing() : Just(xs[0]);
        const x = [1, 2, 3];

        laws.monad(a, f, x)
    })
})
