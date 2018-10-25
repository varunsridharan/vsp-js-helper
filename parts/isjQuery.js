import isUndefined from './isUndefined';
import isString from './isString';

/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = ( $elem ) => ( false === isUndefined( $elem ) && false === isString( $elem ) && $elem.jQuery );