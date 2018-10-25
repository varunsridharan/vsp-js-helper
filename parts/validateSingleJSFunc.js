import is_object from "locutus/php/var/is_object";
import is_undefined from "./is_undefined";

module.exports = ( $string, $args_key = 'js_args', $contents_key = 'js_contents' ) => {
	if( true === is_object( $string ) && false === is_undefined( $string[ $args_key ] ) || false === is_undefined( $string[ $contents_key ] ) ) {
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
