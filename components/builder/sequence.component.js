/**
 * Given a sequence, it replaces all values inside the sequence with
 * the user defined template and then returns a string which contains
 * the custom made asciimoticon.
 *
 * @param {*} sequence
 * @param {*} template
 */
exports.build = (sequence, template) => {
    const result = [];
    for (let key of sequence) {
        let value = template[key];
        if (value == null) {
            value = ''; // don't show
        }
        result.push(value);
    }
    return result.join(''); // combine all
};
