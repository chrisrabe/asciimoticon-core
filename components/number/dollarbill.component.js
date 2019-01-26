const service = require('../../services/text.service');

var table = {
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

exports.getAscii = (amount) => {
    if (isNaN(amount)) {
        return null;
    }
    return (amount == null || amount == '') ? null : '[̲̅$̲̅(̲' + service.transpose(amount.toString(), table) + '̅)̲̅$̲̅]'
};
