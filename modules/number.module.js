/*jshint esversion:6*/

// Aggregates all number related components into a single module
const dice = require('../components/number/dice.component');
const dollarbill = require('../components/number/dollarbill.component');
const loading = require('../components/number/loading.component');

exports.dice = (amount) => {
    return dice.single(amount);
};

exports.randomDice = () => {
    return dice.random();
};

exports.loading = (percent) => {
    return loading.getAscii(percent);
};

exports.dollarbill = (amount) => {
    return dollarbill.getAscii(amount);
};
