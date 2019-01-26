const expect = require('chai').expect;
const numberModule = require('../app').number;

describe('dice component tests', () => {
    it('should create a die with 1 square if input is 1', () => {
        const input = 1;
        const expected = '⚀';
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is null', () => {
        const input = null;
        const expected = null;
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is a blank string', () => {
        const input = '';
        const expected = null;
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is not a number', () => {
        const input = 'text';
        const expected = null;
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \' 1\' as a valid number', () => {
        const input = ' 1';
        const expected = '⚀';
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \'1 \' as a valid number', () => {
        const input = '1 ';
        const expected = '⚀';
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \' 1\' as a valid number', () => {
        const input = ' 1 ';
        const expected = '⚀';
        const output = numberModule.dice(input);
        expect(output).to.equal(expected);
    });
});


describe('dollar bill component tests', () => {
    it('should create a dollar bill with $1 value if input is 1', () => {
        const input = 1;
        const expected = '[̲̅$̲̅(̲̅ι̅)̲̅$̲̅]';
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is null', () => {
        const input = null;
        const expected = null;
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is a blank string', () => {
        const input = '';
        const expected = null;
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is not a number', () => {
        const input = 'text';
        const expected = null;
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \' 1\' as a valid number', () => {
        const input = ' 1';
        const expected = '[̲̅$̲̅(̲̅ι̅)̲̅$̲̅]';
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \'1 \' as a valid number', () => {
        const input = '1 ';
        const expected = '[̲̅$̲̅(̲̅ι̅)̲̅$̲̅]';
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \' 1\' as a valid number', () => {
        const input = ' 1 ';
        const expected = '[̲̅$̲̅(̲̅ι̅)̲̅$̲̅]';
        const output = numberModule.dollarbill(input);
        expect(output).to.equal(expected);
    });
});

describe('loading component tests', () => {
    it('should create a half shaded loading bar if input is 50', () => {
        const input = 50;
        const expected = '█████▒▒▒▒▒';
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is null', () => {
        const input = null;
        const expected = null;
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is a blank string', () => {
        const input = '';
        const expected = null;
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });

    it('should return null if input is not a number', () => {
        const input = 'text';
        const expected = null;
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });
    it('should consider the text \' 50\' as a valid number', () => {
        const input = ' 50';
        const expected = '█████▒▒▒▒▒';
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \'50 \' as a valid number', () => {
        const input = '50 ';
        const expected = '█████▒▒▒▒▒';
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });

    it('should consider the text \' 50 \' as a valid number', () => {
        const input = ' 50 ';
        const expected = '█████▒▒▒▒▒';
        const output = numberModule.loading(input);
        expect(output).to.equal(expected);
    });
});
