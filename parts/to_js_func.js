import is_object_like from './is_object_like';
import validateJSFunc from './validateSingleJSFunc';

module.exports = ( $data, $args_key = 'js_args', $contents_key = 'js_contents' ) => {
	if( true === is_object_like( $data ) ) {
		for( let $key in $data ) {
			$data[ $key ] = validateJSFunc( $data[ $key ], $args_key, $contents_key );
		}
	}
	return $data;
};
