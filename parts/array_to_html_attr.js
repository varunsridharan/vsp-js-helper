import is_object from 'locutus/php/var/is_object';
import is_object_like from './is_object_like';

module.exports = ( $data ) => {
	let return_html = '';
	for( let I in $data ) {
		if( is_object( $data[ I ] ) ) {
			return_html += ' ' + I + '="';
			for( let K in $data[ I ] ) {
				let $value = ( is_object_like( $data[ I ][ K ] ) ) ? JSON.stringify( $data[ I ][ K ] ) : $data[ I ][ K ];
				return_html += $value + ' ';
			}
			return_html += '"';
		} else {
			let $value = ( is_object_like( $data[ I ] ) ) ? JSON.stringify( $data[ I ] ) : $data[ I ];
			return_html += ' ' + I + '="' + $value + '" ';
		}
	}
	return return_html;
};