// Module aggregates all text components into one module
const fliptext = require('../components/text/fliptext.component');
const fancytext = require('../components/text/fancytext.component');
const witchtext = require('../components/text/witchtext.component');
const fliptexttable = require('../components/text/fliptexttable.component');
const crazytext = require('../components/text/crazytext.component');
const bubbletext = require('../components/text/bubbletext.component');
const arcanetext = require('../components/text/arcanetext.component');

exports.toFliptext = (text) => {
    return fliptext.getAscii(text);
};

exports.toFancytext = (text) => {
    return fancytext.getAscii(text);
};

exports.toWitchtext = (text) => {
    return witchtext.getAscii(text);
};

exports.toFliptextTable = (text) => {
    return fliptexttable.getAscii(text);
};

exports.toCrazytext = (text) => {
    return crazytext.getAscii(text);
};

exports.toBubbletext = (text) => {
    return bubbletext.getAscii(text);
};

exports.toArcanetext = (text) => {
    return arcanetext.getAscii(text);
};
