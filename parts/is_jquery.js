/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
export default ( $elem ) => ( false === _.isUndefined( $elem ) && false === _.isString( $elem ) && $elem.jQuery );