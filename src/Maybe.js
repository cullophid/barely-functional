function Nothing() {
    return {
        chain: f => Nothing(),
        map: f => Nothing(),
        ap: f => Nothing(),
        concat: m => m,
        empty: () => Nothing(),
        isNothing: true,
        isJust: false,
        of: x => Just(x),
        toString: () => 'Nothing()',
        equals: m => m.isNothing === true
    }
}

function Just(x) {
    return {
        chain: f => f(x),
        map: f => Just(f(x)),
        ap: m => m.map(x),
        concat: m => m.isNothing === true ? Just(x) : Just(x.concat(m.value)),
        empty: () => Nothing(),
        isNothing: false,
        isJust: true,
        of: x => Just(x),
        value: x,
        toString: () => 'Just(' + x + ')',
        equals: m => m.isJust === true && m.value === x
    }
}

module.exports = {
    Nothing: Nothing,
    Just: Just
}
