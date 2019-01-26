const faces = require('../../modules/faces.module');
const symbols = require('../../modules/symbols.module');

/**
 * Finds all the faces from the partial string.
 * @param {string} partial
 */
exports.find = (partial) => {
    if(!partial) {
        return [];
    }
    const facesArray = findFromModule(faces, partial);
    const symbolsArray = findFromModule(symbols, partial);
    return facesArray.concat(symbolsArray);
};

/**
 * Finds the faces that has the partial string from a specific module.
 * @param {object} module
 * @param {string} partial
 * @return {array}
 */
function findFromModule(module, partial) {
    const result = [];
    for(const key in module) {
        const value = module[key];
        if(key.includes(partial)) {
            result.push(value.ascii);
            continue;
        }
        // search if keywords contain the partial
        const words = value.words;
        for(const word of words) {
            if(word.includes(partial)) {
                result.push(value.ascii);
                break;
            }
        }
    }
    return result;
}
