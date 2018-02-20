/*jshint esversion:6*/

const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

var validate = (amount) => {
    if (amount < 1) return 1;
    if (amount > 6) return 6;
    return amount;
}

var getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.single = (amount) => {
    const index = validate(amount);
    return dice[index - 1];
};

exports.random = () => {
    return dice[getRandomInt(0, 5)];
};
