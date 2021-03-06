const expect = require('chai').expect;
const textModule = require('../app').text;

describe('fliptext tests', () => {
    it('should flip text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toFliptext(input);
        const expected = 'zʎxʍʌnʇsɹbdouɯןʞɾıɥƃɟǝpɔqɐ';
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
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toFancytext(input);
        const expected = 'αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz';
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

describe('fliptexttable tests', () => {
    it('should convert text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toFliptextTable(input);
        const expected = '(ノ ゜Д゜)ノ ︵  zʎxʍʌnʇsɹbdouɯןʞɾıɥƃɟǝpɔqɐ';
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

describe('witchtext tests', () => {
    it('should convert text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toWitchtext(input);
        const expected = 'Λß¢ÐΣŦGH|⅃ҠLMИӨþQЯ$†VVWXҰZ';
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

describe('arcanetext tests', () => {
    it('should convert text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toArcanetext(input);
        const expected = 'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬאץz';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toArcanetext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toArcanetext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});

describe('bubbletext tests', () => {
    it('should convert text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toBubbletext(input);
        const expected = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toBubbletext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toBubbletext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});

describe('crazytext tests', () => {
    it('should convert text successfully', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = textModule.toCrazytext(input);
        const expected = 'ﾑ乃ᄃD乇ｷGんﾉﾌズﾚﾶ刀ӨｱQ尺丂ｲЦ√Щﾒﾘ乙';
        expect(output).to.equal(expected);
    });

    it('should return null if null is passed', () => {
        const input = null;
        const output = textModule.toCrazytext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });

    it('should return null if a blank string is passed', () => {
        const input = '';
        const output = textModule.toCrazytext(input);
        const expected = null;
        expect(output).to.equal(expected);
    });
});
