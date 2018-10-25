import isjQuery from './isjQuery';

/**
 * Returns Given String into A jQuery Object.
 * @param $elem
 * @returns {*}
 */
module.exports = ( $elem ) => {
	if( false === isjQuery( $elem ) ) {
		return jQuery( $elem );
	}
	return $elem;
};