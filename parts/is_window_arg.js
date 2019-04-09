/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
export default ( $key ) => ( false === _.isUndefined( window[ $key ] ) );