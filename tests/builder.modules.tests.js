const expect = require('chai').expect;
const builderModule = require('../app').builder;

describe('build invalid input tests', () => {
    it('should not change the text if term does not exist in mapping', () => {
        const input = '(nonexistant)';
        const expected = '(nonexistant)';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should return a blank string if input is null', () => {
        const input = null;
        const expected = '';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });
});

describe('builder options tests', () => {
    it('should allow multiple prefixes and suffixes', () => {
        const options = {
            prefix: '--',
            suffix: '--'
        };
        const input = '--bear--';
        const expected = 'ʕ·͡ᴥ·ʔ﻿';
        const output = builderModule.parse(input, options);
        expect(output).to.equal(expected);
    });

    it('should allow multiple prefixes and suffixes using Regex special characters', () => {
        const special = ['*', '^', '\\', '$', '+', '?', '.', '(', ')', '[', ']', '{', '}', '|'];
        const doTest = (symbol) => {
            const options = {
                prefix: `${symbol}${symbol}`,
                suffix: `${symbol}${symbol}`
            };
            const input = `${symbol}${symbol}bear${symbol}${symbol}`;
            const expected = 'ʕ·͡ᴥ·ʔ﻿';
            const output = builderModule.parse(input, options);
            expect(output).to.equal(expected);
        };
        for(var item of special){
            doTest(item);
        }
    });

    it('should allow custom options', () => {
        const options = {
            prefix: ':',
            suffix: ':'
        };
        const input = ':bear:';
        const expected = 'ʕ·͡ᴥ·ʔ﻿';
        const output = builderModule.parse(input, options);
        expect(output).to.equal(expected);
    });

    it('should throw an error if the option has no prefix and suffix', () => {
        const options = {};
        const input = ':bear:';
        const expected = 'Invalid options';
        const output = builderModule.parse;
        expect(output.bind(output, input, options)).to.throw(expected);
    });

    it('should throw an error if the option has no prefix', () => {
        const options = {
            suffix: ')'
        };
        const input = ':bear:';
        const expected = 'Invalid options';
        const output = builderModule.parse;
        expect(output.bind(output, input, options)).to.throw(expected);
    });

    it('should throw an error if the option has no suffix', () => {
        const options = {
            prefix: '('
        };
        const input = ':bear:';
        const expected = 'Invalid options';
        const output = builderModule.parse;
        expect(output.bind(output, input, options)).to.throw(expected);
    });
});

describe('builder face module parsing test', () => {
    it('should replace words on the faces module with ascii', () => {
        const input = '(bear)';
        const expected = 'ʕ·͡ᴥ·ʔ﻿';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should only replace that are inside brackets', () => {
        const input = '(bear) I am bear!';
        const expected = 'ʕ·͡ᴥ·ʔ﻿ I am bear!';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });
});

describe('builder text module parsing test', () => {
    it('should parse witchtext tag and convert words to witchtext', () => {
        const input = '(witchtext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'Λß¢ÐΣŦGH|⅃ҠLMИӨþQЯ$†VVWXҰZ';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse fliptext tag and convert words to fliptext', () => {
        const input = '(fliptext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'zʎxʍʌnʇsɹbdouɯןʞɾıɥƃɟǝpɔqɐ';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse fancytext tag and convert words to fancytext', () => {
        const input = '(fancytext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse fliptexttable and convert words to fliptexttable', () => {
        const input = '(fliptabletext,abcdefghijklmnopqrstuvwxyz)';
        const expected = '(ノ ゜Д゜)ノ ︵  zʎxʍʌnʇsɹbdouɯןʞɾıɥƃɟǝpɔqɐ';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse arcanetext and convert words to arcanetext', () => {
        const input = '(arcanetext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬאץz';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse bubbletext and convert words to bubbletext', () => {
        const input = '(bubbletext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse crazytext and convert words to crazytext', () => {
        const input = '(crazytext,abcdefghijklmnopqrstuvwxyz)';
        const expected = 'ﾑ乃ᄃD乇ｷGんﾉﾌズﾚﾶ刀ӨｱQ尺丂ｲЦ√Щﾒﾘ乙';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });
});

describe('builder number module parsing test', () => {
    it('should parse the dice successfully', () => {
        const input = '(dice,1)';
        const expected = '⚀';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });

    it('should parse the dollarbill successfully', () => {
        const input = '(dollarbill,1)';
        const expected = '[̲̅$̲̅(̲̅ι̅)̲̅$̲̅]';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });
    it('should parse the loadingbar successfully', () => {
        const input = '(loadingbar,50)';
        const expected = '█████▒▒▒▒▒';
        const output = builderModule.parse(input);
        expect(output).to.equal(expected);
    });
});
