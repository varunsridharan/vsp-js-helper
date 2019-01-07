/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = ( $key ) => ( false === _.isUndefined( window[ $key ] ) );