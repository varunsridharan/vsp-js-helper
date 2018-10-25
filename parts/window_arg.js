import is_object from 'locutus/php/var/is_object';

/**
 * Sets JS Object Into Window Args.
 * @param $key
 * @param $value
 */
module.exports = ( $key, $value ) => {
	if( is_object( $key ) ) {
		for( let $_k in $key ) {
			window[ $_k ] = $key[ $_k ];
		}
	}
	window[ $key ] = $value;
};