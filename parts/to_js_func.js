import is_object_like from './is_object_like';
import wrap_array from './wrap_array';
import validateJSFunc from './validateSingleJSFunc';


module.exports = ( $data ) => {
	if( true === is_object_like( $data ) ) {
		for( let $key in $data ) {
			$data[ $key ] = validateJSFunc( $data[ $key ] );
		}
	}
	return $data;
};
