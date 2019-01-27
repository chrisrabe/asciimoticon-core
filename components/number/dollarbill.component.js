const service = require('../helper/text.component');

const table = {
    0: 'ο̲̅',
    1: '̅ι',
    2: '2̅',
    3: '3̅',
    4: '4̅',
    5: '5̲̅',
    6: '6̅',
    7: '7̅',
    8: '8̅',
    9: '9̅',
};

/**
 * Returns the dollar representation of the amount
 * @param amount
 * @returns {string|null}
 */
exports.getAscii = (amount) => {
    if (isNaN(amount)) {
        return null;
    }
    return (!amount) ? null : '[̲̅$̲̅(̲' + service.transpose(amount.toString(), table) + '̅)̲̅$̲̅]'
};
