const expect = require('chai').expect;
const helperModule = require('../app').helper;

describe('transpose tests', () => {
    const table = {
        a: 'first',
        b: 'second',
    };

    it('should replace values that are in the table', () => {
        const input = 'a b';
        const expected = 'first second';
        const output = helperModule.transpose(input, table);
        expect(output).to.not.equal(null);
        expect(output).to.equal(expected);
    });

    it('should return the same string if no table is passed', () => {
        const input = 'a b';
        const expected = 'a b';
        const output = helperModule.transpose(input, null);
        expect(output).to.not.equal(null);
        expect(output).to.equal(expected);
    });

    it('should return a backwards converted string if the backwards flag is true', () => {
       const input = 'a b'; // original string
       const input2 = true; // backwards
       const expected = 'second first';
       const output = helperModule.transpose(input, table, input2);
       expect(output).to.not.equal(null);
       expect(output).to.equal(expected);
    });
});

describe('find tests', () => {
    it('should return an array result with values', () => {
       const input = 'ac';
       const expectedSize = 8;
       const output = helperModule.find(input);
       expect(output).to.not.equal(null);
       expect(output).to.not.equal(undefined);
       expect(Array.isArray(output)).to.equal(true);
       expect(output.length).to.equal(expectedSize);
    });

    it('should return the correct results', () => {
        const input = 'acid';
        const expected = '⊂(◉‿◉)つ';
        const expectedSize = 1;
        const output = helperModule.find(input);
        expect(output).to.not.equal(null);
        expect(output).to.not.equal(undefined);
        expect(Array.isArray(output)).to.equal(true);
        expect(output.length).to.equal(expectedSize);
        expect(output[0]).to.equal(expected);
    });

    it('should return an empty array if null passed', () => {
        const input = null;
        const expectedSize = 0;
        const output = helperModule.find(input);
        expect(output).to.not.equal(null);
        expect(output).to.not.equal(undefined);
        expect(Array.isArray(output)).to.equal(true);
        expect(output.length).to.equal(expectedSize);
    });

    it('should return an empty array if empty string is passed', () => {
        const input = '';
        const expectedSize = 0;
        const output = helperModule.find(input);
        expect(output).to.not.equal(null);
        expect(output).to.not.equal(undefined);
        expect(Array.isArray(output)).to.equal(true);
        expect(output.length).to.equal(expectedSize);
    });

    it('should return an empty array if undefined is passed', () => {
        const input = '';
        const expectedSize = 0;
        const output = helperModule.find(input);
        expect(output).to.not.equal(null);
        expect(output).to.not.equal(undefined);
        expect(Array.isArray(output)).to.equal(true);
        expect(output.length).to.equal(expectedSize);
    });
});
