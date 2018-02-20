/*jshint esversion:6*/
const fliptext = require('./fliptext.component');

exports.getAscii = (text) => {
    return text == null ? null : `(ノ ゜Д゜)ノ ︵  ${fliptext.getAscii(text)}`;
};
