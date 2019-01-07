/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = ( $elem ) => ( false === _.isUndefined( $elem ) && false === _.isString( $elem ) && $elem.jQuery );