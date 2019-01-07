/**
 * Converts JS String Into Callable Function.
 * @param $string
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */
module.exports = ( $string, $args_key = 'js_args', $contents_key = 'js_contents' ) => {
	if( true === _.isObject( $string ) && false === _.isUndefined( $string[ $args_key ] ) || false === _.isUndefined( $string[ $contents_key ] ) ) {
		let $args     = ( $string[ $args_key ] === false ) ? false : $string[ $args_key ];
		let $contents = ( $string[ $contents_key ] === false ) ? false : $string[ $contents_key ];
		if( $args === false && $contents !== false ) {
			return new Function( $contents );
		} else if( $args !== false && $contents !== false ) {
			return new Function( $args, $contents );
		} else {
			return $string;
		}
	}
	return $string;
};
