/**
 * Replaces text with the values in the lookup parameter.
 *
 * @param {string} text the text which is needed to be parsed
 * @param {object} lookup a dictionary which maps text to asciimoticons
 * @param {object} options Options for custom {prefix, suffix} objects
 */
exports.parse = (text, lookup, options) => {
    if (!text) {
        return ''; // nothing
    }
    "use strict";

    const o = options || {
        prefix: '(',
        suffix: ')'
    };

    o.prefix = escape(o.prefix);
    o.suffix = escape(o.suffix);

    // regular expression to replace string surrounded by prefix and suffix
    const regex = new RegExp(o.prefix + "([^" + o.suffix + "]*)" + o.suffix, "gim");
    
    return text.replace(regex, (delimitedTerm, term) => {
        let params = null;
        if (term.indexOf(',') !== -1) {
            let temp = term.split(',');
            term = temp.shift();
            params = temp;
        }

        const dictItem = lookup[term.toLowerCase()];

        if (dictItem) {
            if (typeof dictItem == 'function') return dictItem.apply(null, params);
            else return dictItem;
        } else return delimitedTerm;
    });
};

/**
 *  Escapes special characters for Regular Expressions
 * 
 * @param {string} text
 */
function escape(text){
    const invalid = ['*', '^', '\\', '$', '+', '?', '.', '(', ')', '[', ']', '{', '}', '|'];
    const chars = [];
    for(let i = 0; i < text.length; i++){
        const c = text.charAt(i);
        if(invalid.includes(c)){
            chars.push(`\\${c}`);
        } else {
            chars.push(c);
        }
    }
    return chars.join('');
}
