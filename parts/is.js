/**
 * Checks if the provided value is of the specified type.
 * Ensure the value is not undefined or null using Array.prototype.includes(), and compare the constructor property on the value with type to check if the provided value is of the specified type.
 * @param type
 * @param val
 * @returns {boolean}
 */
module.exports = ( type, val ) => ![ , null ].includes( val ) && val.constructor === type;