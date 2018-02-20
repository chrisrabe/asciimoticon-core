/*jshint esversion:6*/

exports.getAscii = (percent) => {
    if (percent == null || percent == '' || isNaN(percent)) {
        return null;
    }
    var filledBlocks = Math.round(percent / 10) <= 10 ? Math.round(percent / 10) : 10,
        emptyBlocks = 10 - filledBlocks,
        str = '',
        i;
    for (i = 0; i < filledBlocks; i++) str += '█';
    for (i = 0; i < emptyBlocks; i++) str += '▒';
    return str;
};
