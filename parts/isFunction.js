/**
 * Checks if the given argument is a function.
 * Use typeof to check if a value is classified as a function primitive.
 * @param val
 * @returns {boolean}
 */
module.exports = val => typeof val === 'function';