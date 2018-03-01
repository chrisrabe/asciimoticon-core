const lookupBuilder = require('../components/builder/lookup.component');
const parser = require('../components/builder/parsing.component');

exports.parse = (text, options) => {
    const lookup = lookupBuilder.core();
    if (options) {
        // check if proper syntax
        if (!options.suffix || !options.prefix) {
            throw new Error('Invalid options');
        }
    }
    return parser.parse(text, lookup, options);
};
