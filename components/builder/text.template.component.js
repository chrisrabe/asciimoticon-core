const helperModule = require('../../modules/helper.module');
const templateComponent = require('./template.component');

/**
 * Creates a template used for replacing characters using the custom key-value table mapping.
 * @param {string} keyword word that is used for conversion
 * @param {object} table table used for substitution
 * @param {boolean} backwards optional flag for converting text backwards
 */
exports.textTemplate = (keyword, table, backwards = false) => {
    const template = templateComponent.template();
    template.map(keyword, (text) => {
       return helperModule.transpose(text, table, backwards);
    });
    return template;
};
