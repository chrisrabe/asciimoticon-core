/*jshint esversion:6*/

// Module aggregates all text components into one module
const fliptext = require('../components/text/fliptext.component');
const fancytext = require('../components/text/fancytext.component');
const witchtext = require('../components/text/witchtext.component');
const fliptexttable = require('../components/text/fliptexttable.component');

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
