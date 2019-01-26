const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

/**
 * Ensures that the amount is within the boundaries
 * @param {number} amount
 * @returns {number|null}
 */
const validate = (amount) => {
    if (amount < 1) return null;
    if (amount > 6) return null;
    return amount;
};

/**
 * Retrieves a random integer within the max, min range
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns the die representing the amount. The amount must be within 1-6
 * @param {number} amount
 * @returns {string|null}
 */
exports.single = (amount) => {
    const index = validate(amount);
    const result = (!index) ? null : dice[index - 1];
    return result == null ? null : result;
};

/**
 * Retrieves a random die symbol between 1 - 6
 * @returns {string}
 */
exports.random = () => {
    return dice[getRandomInt(0, 5)];
};
