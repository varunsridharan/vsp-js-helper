import isUndefined from './isUndefined';

/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = ( $key ) => ( false === isUndefined( window[ $key ] ) );