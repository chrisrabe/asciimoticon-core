
exports.transpose = (str, table, backwards) => {
    var last,
        i,
        result = new Array(str.length);

    function getChar(i) {
        var o = str.charAt(i),
            n = table[o];
        return n !== undefined ? n : o;
    }

    if (backwards && backwards === true) {
        last = str.length - 1;
        for (i = last; i >= 0; --i) result[last - i] = getChar(i);
    } else {
        last = str.length;
        for (i = 0; i < last; i++) result[i] = getChar(i);
    }
    return result.join('');
};
