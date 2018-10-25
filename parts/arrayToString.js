import _isObject from './isObject';
//import _isObjectLike from './isObjectLike';

module.exports = ( data, sep = '' ) => {
	let return_html = '';
	for( let key in data ) {
		if( _isObject( data[ key ] ) ) {
			for( let K in data[ key ] ) {
				return_html += data[ key ][ K ] + sep;
			}
		} else {
			return_html += data[ key ] + sep;
		}
	}
	return return_html;
};