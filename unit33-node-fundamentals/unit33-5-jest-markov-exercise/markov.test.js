const { MarkovMachine: markov } = require("./markov");

describe('Markov Instance Tests', () => {
    let mm;

    beforeEach(() => {
        mm = new markov(`
        The night is come,
        but not too soon; And sinking silently,
        All silently, the little.
        `);
    });

    test('Should create a MarkovMachine instance.', () => {
        expect(mm).toBeInstanceOf(markov);
    })

    test('mm should contain an array of individual words.', () => {
        expect(mm.words).toEqual([
            'The', 'night', 'is', 'come,', 'but', 'not',
            'too', 'soon;', 'And', 'sinking', 'silently,',
            'All', 'silently,', 'the', 'little.', 
        ]);
    });

    test('The instance Map, chains, should be defined.', () => {
        expect(mm.chains).toBeDefined();
    });

    test('makeText(), should be defined.', () => {
        expect(mm.makeText).toBeDefined();
    });

    test('The static function, randomwKey(), should be undefined.', () => {
        expect(mm.randomKey).toBeUndefined();
    });

    test('makeText() should generate text.', () => {
        expect(mm.makeText()).toEqual(expect.any(String));
    });
})