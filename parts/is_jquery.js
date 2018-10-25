import is_undefined from './is_undefined';
import is_string from 'locutus/php/var/is_string';

/**
 * Check if given Object / Value is a jQuery Instance.
 * @param $elem
 * @returns {boolean|*}
 */
module.exports = ( $elem ) => ( false === is_undefined( $elem ) && false === is_string( $elem ) && $elem.jQuery );