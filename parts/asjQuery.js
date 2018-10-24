import VSP_JS_HELPER from '../index';

/**
 * Returns Given String into A jQuery Object.
 * @param $elem
 * @returns {*}
 */
module.exports = ( $elem ) => {
	if( false === VSP_JS_HELPER.isjQuery( $elem ) ) {
		return jQuery( $elem );
	}
	return $elem;
};