/**
 * Checks if the given argument is a string. Only works for string primitives.
 * Use typeof to check if a value is classified as a string primitive.
 * @param val
 * @returns {boolean}
 */
module.exports = val => typeof val === 'string';