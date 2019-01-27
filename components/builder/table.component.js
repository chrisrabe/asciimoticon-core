
/**
 * Maps the characters of the string to the items at the opposite end.
 * The callback takes a key, value argument.
 * @param {string} str
 * @param {function(string, string)} callback
 */
function mapToOpposite(str, callback) {
    if(!str) {
        throw new Error('String argument is null.')
    }
    if(!callback) {
        throw new Error('Callback argument is null.');
    }
    for(let i = 0; i < str.length; i++) {
        const opposite = str.length - 1 - i;
        callback(str.charAt(i), str.charAt(opposite));
    }
}

/**
 *  Creates a table that maps the alphabet to its reversed equivalent by default. If a
 *  parameter is passed, it ensures that all its inside the string are unique and then
 *  maps the value to the character at the opposite end of the string. For example, if
 *  the baseString is aaaaabbbbbccccddddeee, it converts it to abcde and then maps a to e,
 *  b to d, c to itself (since it is the middle value), and so on. This function is case sensitive,
 *  therefore A and a are both not equal in value. This function only works with alphanumeric characters.
 *  @param {string} baseString
 *  @return {object} reversedTable
 */
function reversed(baseString = undefined) {
    const result = {};
    if (baseString) {
        const unique = xs => [...new Set(xs)];
        const dedupe = str => unique(str).join('');
        const newString = dedupe(baseString);
        mapToOpposite(newString, (key, value) => {
           result[key] = value;
           result[key.toUpperCase()] = value.toUpperCase();
        });
    } else {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        mapToOpposite(alphabet, (key, value) => {
            result[key] = value;
            result[key.toUpperCase()] = value.toUpperCase();
        });
        mapToOpposite(numbers, (key, value) => {
            result[key] = value;
        });
    }
    return result;
}

/**
 * Creates a table which maps the characters of the base string into its binary equivalent.
 * This function ensures that all values inside the base string are unique and then creates the mapping from
 * the unique characters. For example, if you pass aaaabbbbcccdddddeee, it first converts it to abcde and then
 * performs the character to binary mapping. The baseString must be alphanumeric.
 * @param {string} baseString
 * @return {object} text to binary table
 */
function binary(baseString) {
    const result = {};
    const unique = xs => [... new Set(xs)];
    const dedupe = str => unique(str).join('');
    const base = dedupe(baseString);
    base.split('').forEach(char => {
       result[char] = char.charCodeAt(0).toString(2);
       result[char.toUpperCase()] = char.toUpperCase().charCodeAt(0).toString(2);
    });
    return result;
}

module.exports = {
    reversed,
    binary,
};
