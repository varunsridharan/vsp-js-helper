import is_object_like from './is_object_like';
import wrap_array from './wrap_array';
import validateJSFunc from './validateSingleJSFunc';


module.exports = ( $data ) => {
	let $_funcs = wrap_array( $data );
	if( true === is_object_like( $_funcs ) ) {
		for( let $key in $_funcs ) {
			$_funcs[ $key ] = validateJSFunc( $_funcs[ $key ] );
		}
	}
	return $_funcs;
};
