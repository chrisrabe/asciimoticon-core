/**
 * Returns an ascii representation of a progress bar.
 * @param {number} percent
 * @returns {string| null}
 */
exports.getAscii = (percent) => {
    if (!percent || isNaN(percent)) {
        return null;
    }
    const filledBlocks = Math.round(percent / 10) <= 10 ? Math.round(percent / 10) : 10;
    let emptyBlocks = 10 - filledBlocks;
    let str = '';
    for (let i = 0; i < filledBlocks; i++) str += '█';
    for (let i = 0; i < emptyBlocks; i++) str += '▒';
    return str;
};
