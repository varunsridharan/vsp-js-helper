import VSP_JS_HELPER from '../index';

/**
 * Checks if window has given variable.
 * @param $key
 * @returns {boolean}
 */
module.exports = ( $key ) => ( false === VSP_JS_HELPER.isUndefined( window[ $key ] ) );