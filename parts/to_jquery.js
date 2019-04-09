import is_jquery from './is_jquery';

/**
 * Returns Given String into A jQuery Object.
 * @param $elem
 * @returns {*}
 */
export default ( $elem ) => {
	if( false === is_jquery( $elem ) ) {
		return jQuery( $elem );
	}
	return $elem;
};