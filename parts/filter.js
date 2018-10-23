/**
 * Removes falsey values from an array.
 * Use Array.prototype.filter() to filter out falsey values (false, null, 0, "", undefined, and NaN).
 * @param arr
 * @returns {*}
 */
module.exports = arr => arr.filter( Boolean );