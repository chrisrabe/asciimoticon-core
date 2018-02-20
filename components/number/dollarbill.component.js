/*jshint esversion:6*/
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
    return amount == null ? null : '[̲̅$̲̅(̲' + service.transpose(amount, table) + '̅)̲̅$̲̅]'
};
