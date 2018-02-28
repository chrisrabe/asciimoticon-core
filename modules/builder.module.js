const faces = require('./faces.module');
const text = require('./text.module');
const number = require('./number.module');

const parser = require('../components/builder/parsing.component');

exports.parse = (text, options) => {
    const lookup = constructDictionary();
    return parser.parse(text, lookup, options);
};

function constructDictionary() {
    const result = {};
    addFaces(result);
    addTextFunctions(result);
    addNumberFunctions(result);
    return result;
}

function addFaces(dictionary) {
    for (const name in faces) {
        const words = faces[name].words;
        const ascii = faces[name].ascii;
        for (let i = 0; i < words.length; i++) dictionary[words[i]] = ascii;
    }
}

function addTextFunctions(dictionary) {
    dictionary['arcanetext'] = text.toArcanetext;
    dictionary['bubbletext'] = text.toBubbletext;
    dictionary['crazytext'] = text.toCrazytext;
    dictionary['fancytext'] = text.toFancytext;
    dictionary['fliptext'] = text.toFliptext;
    dictionary['fliptabletext'] = text.toFliptextTable;
    dictionary['witchtext'] = text.toWitchtext;
}

function addNumberFunctions(dictionary) {
    dictionary['dice'] = number.dice;
    dictionary['dollarbill'] = number.dollarbill;
    dictionary['loadingbar'] = number.loading;
}
