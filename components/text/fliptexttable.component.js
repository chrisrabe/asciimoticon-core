const fliptext = require('./fliptext.component');

exports.getAscii = (text) => {
    return (text == null || text == '') ? null : `(ノ ゜Д゜)ノ ︵  ${fliptext.getAscii(text)}`;
};
