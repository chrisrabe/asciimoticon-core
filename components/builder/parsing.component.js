/*jshint esversion:6*/

/**
 * Replaces text with the values in the lookup parameter.
 *
 * @param {*} text the text which is needed to be parsed
 * @param {*} lookup a dictionary which maps text to asciimoticons
 * @param {*} options Options for custom {prefix, suffix} objects
 */
exports.parse = (text, lookup, options) => {
    "use strict";

    const o = options || {
        prefix: '(',
        suffix: ')'
    };

    // regular expression to replace string surrounded by prefix and suffix
    const regex = new RegExp("[" + o.prefix + "]([^" + o.suffix + "]*)[" + o.suffix + "]", "gim");
    return text.replace(regex, (delimitedTerm, term) => {
        var params = null;
        if (term.indexOf(',') !== -1) {
            var temp = term.split(',');
            term = temp.shift();
            params = temp;
        }

        var dictItem = lookup[term.toLowerCase()];

        if (dictItem) {
            if (typeof dictItem == 'function') return dictItem.apply(null, params);
            else return dictItem;
        } else return termWithDelimiters;
    });
};
