import is_undefined from './is_undefined';

/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = ( $key ) => ( false === is_undefined( window[ $key ] ) );