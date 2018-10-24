import VSP_JS_HELPER from '../index';

/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = ( $elem ) => ( false === VSP_JS_HELPER.isUndefined( $elem ) && false === VSP_JS_HELPER.isString( $elem ) && $elem.jQuery );