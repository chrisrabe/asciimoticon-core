const lookup = require('../components/builder/lookup.component');
const parser = require('../components/builder/parsing.component');
const template = require('../components/builder/template.component');
const sequenceComp = require('../components/builder/sequence.component');

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
}

/**
 * Creates a new template object
 */
exports.template = () => {
    return template.template();
}
