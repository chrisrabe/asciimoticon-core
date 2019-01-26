/**
 * Creates a new string from the table. If the backwards flag is true, it returns the new string backwards.
 * @param {string} str
 * @param {object} table
 * @param {boolean} backwards
 * @returns {string}
 */
exports.transpose = (str, table, backwards = undefined) => {
    function getChar(char) {
        const replacement = table[char];
        return replacement !== undefined ? replacement : char;
    }

    if(backwards && backwards === true) {
        return str.split('').reverse().map(char => getChar(char)).join('');
    } else {
        return str.split('').map(char => getChar(char)).join('');
    }
};
