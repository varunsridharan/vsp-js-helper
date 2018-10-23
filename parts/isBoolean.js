/**
 * Checks if the given argument is a native boolean element.
 * Use typeof to check if a value is classified as a boolean primitive.
 * @param val
 * @returns {boolean}
 */
module.exports = val => typeof val === 'boolean';