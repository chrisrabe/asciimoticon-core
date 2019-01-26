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
