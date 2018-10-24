import VSP_JS_HELPER from '../index';

/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = ( $key, $value ) => {
	if( VSP_JS_HELPER.isObject( $key ) ) {
		for( let $_k in $key ) {
			window[ $_k ] = $key[ $_k ];
		}
	}
	window[ $key ] = $value;
};