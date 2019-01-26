const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

var validate = (amount) => {
    if (amount < 1) return null;
    if (amount > 6) return null;
    return amount;
}

var getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.single = (amount) => {
    const index = validate(amount);
    const result = (index == null || index == '') ? null : dice[index - 1];
    return result == null ? null : result;
};

exports.random = () => {
    return dice[getRandomInt(0, 5)];
};
