/**
 * Returns true if the specified value is null or undefined, false otherwise.
 * Use the strict equality operator to check if the value and of val are equal to null or undefined.
 * @param val
 * @returns {boolean}
 */
module.exports = val => val === undefined || val === null;