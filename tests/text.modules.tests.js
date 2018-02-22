const expect = require('chai').expect;
const textModule = require('../app').text;

describe('fliptext tests', () => {
    it('should flip text successfully', () => {
        const input = 'test';
        const output = textModule.toFliptext(input);
        const expected = 'ʇsǝʇ';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toFliptext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toFliptext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});

describe('fancytext tests', () => {
    it('should convert text successfully', () => {
        const input = 'test';
        const output = textModule.toFancytext(input);
        const expected = 'тєѕт';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toFancytext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toFancytext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});

describe('witchtext tests', () => {
    it('should convert text successfully', () => {
        const input = 'test';
        const output = textModule.toWitchtext(input);
        const expected = '†Σ$†';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toWitchtext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toWitchtext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});

describe('fliptexttable tests', () => {
    it('should convert text successfully', () => {
        const input = 'test';
        const output = textModule.toFliptextTable(input);
        const expected = '(ノ ゜Д゜)ノ ︵  ʇsǝʇ';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toFliptextTable(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toFliptextTable(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});
