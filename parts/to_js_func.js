import validateJSFunc from './validateSingleJSFunc';

/**
 * Checks Each Value Of a JS Object And Converts Into JS Callable Function.
 * @param $data
 * @param $args_key
 * @param $contents_key
 * @returns {*}
 */
module.exports = ( $data, $args_key = 'js_args', $contents_key = 'js_contents' ) => {
	if( true === _.isObject( $data ) ) {
		for( let $key in $data ) {
			if( !_.isEmpty( $data[ $key ] ) ) {
				$data[ $key ] = validateJSFunc( $data[ $key ], $args_key, $contents_key );
			}
		}
	}
	return $data;
};
