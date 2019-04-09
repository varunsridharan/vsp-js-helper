export default ( $data ) => {
	let return_html = '';
	for( let I in $data ) {
		if( _.isObject( $data[ I ] ) ) {
			return_html += ' ' + I + '="';
			for( let K in $data[ I ] ) {
				let $value = ( _.isObject( $data[ I ][ K ] ) ) ? JSON.stringify( $data[ I ][ K ] ) : $data[ I ][ K ];
				return_html += $value + ' ';
			}
			return_html += '"';
		} else {
			let $value = ( _.isObject( $data[ I ] ) ) ? JSON.stringify( $data[ I ] ) : $data[ I ];
			return_html += ' ' + I + '="' + $value + '" ';
		}
	}
	return return_html;
};
