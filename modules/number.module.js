/*jshint esversion:6*/

// Aggregates all number related components into a single module
const dice = require('../components/number/dice.component');
const dollarbill = require('../components/number/dollarbill.component');
const loading = require('../components/number/loading.component');

exports.dice = (amount) => {
    return dice.single(fix(amount));
};

exports.randomDice = () => {
    return dice.random(fix(amount));
};

exports.loading = (percent) => {
    return loading.getAscii(fix(percent));
};

exports.dollarbill = (amount) => {
    return dollarbill.getAscii(fix(amount));
};


function fix(amount) {
    if (typeof amount == 'string') {
        return amount.trim();
    }
    return amount;
}
