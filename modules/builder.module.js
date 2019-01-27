const lookup = require('../components/builder/lookup.component');
const parser = require('../components/builder/parsing.component');
const template = require('../components/builder/template.component');
const sequenceComp = require('../components/builder/sequence.component');
const textTemplate = require('../components/builder/text.template.component');
const table = require('../components/builder/table.component');

/**
 * Parses the text and assigns asciimoticons to values inside the defined
 * prefix and suffix. If options is null, the default prefix and suffix are
 * brackets.
 *
 * @param {*} text text which needs to be parsed
 * @param {*} options prefix and suffix. default value = {prefix: '(', suffix: ')'}
 * @param {*} template user defined mapping. assumes that it is the object returned by builder.template()
 */
exports.parse = (text, options, template) => {
    let data = null;
    if (template) {
        if (template.content == null) {
            throw new Error('Template needs to be the object returned by builder.template()');
        }
        data = lookup.build(template.content);
    } else {
        data = lookup.core();
    }
    if (options) {
        // check if proper syntax
        if (!options.suffix || !options.prefix) {
            throw new Error('Invalid options');
        }
    }
    return parser.parse(text, data, options);
};

/**
 * Given a sequence, it replaces all values inside the sequence with
 * the user defined template and then returns a string which contains
 * the custom made asciimoticon.
 *
 * @param {*} sequence sequence of keys to create the asciimoticon. Must be an array
 * @param {*} template user defined mapping. assumes that it is the object returned by builder.template()
 */
exports.build = (sequence, template) => {
    if (!sequence || !template) {
        return ''; //return empty string
    }
    if (template.content == null) {
        throw new Error('Template needs to be the object returned by builder.template()');
    }
    return sequenceComp.build(sequence, template.content);
};

/**
 * Creates a new template object
 */
exports.template = template.template;

/**
 * Creates a new text template
 */
exports.textTemplate = textTemplate.textTemplate;

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
exports.createReversedTable = (baseString = undefined) => {
    if(baseString && !baseString.match(/^[a-z0-9]+$/i)) {
        throw new Error('Argument is not alphanumeric.');
    }
    return table.reversed(baseString);
};

/**
 * Creates a table which maps the characters of the base string into its binary equivalent.
 * This function ensures that all values inside the base string are unique and then creates the mapping from
 * the unique characters. For example, if you pass aaaabbbbcccdddddeee, it first converts it to abcde and then
 * performs the character to binary mapping. The baseString must be alphanumeric.
 * @param {string} baseString
 * @return {object} text to binary table
 */
exports.createBinaryTable = (baseString) => {
    if(!baseString) {
       throw new Error('Argument is null.');
    }
    if(!baseString.match(/^[a-z0-9]+$/i)) {
        throw new Error('Argument is not alphanumeric.');
    }
    return table.binary(baseString);
};
