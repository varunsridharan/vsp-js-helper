/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = ( $key, $value ) => {
	if( _.isObject( $key ) ) {
		for( let $_k in $key ) {
			window[ $_k ] = $key[ $_k ];
		}
	} else {
		window[ $key ] = $value;
	}
};