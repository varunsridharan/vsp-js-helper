import _isObject from './isObject';

/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = ( $key, $value ) => {
	if( _isObject( $key ) ) {
		for( let $_k in $key ) {
			window[ $_k ] = $key[ $_k ];
		}
	}
	window[ $key ] = $value;
};