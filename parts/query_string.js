/**
 * Return value from QueryString
 * @param name
 * @returns {string}
 */
module.exports = ( name ) => {
	name        = name.replace( /[\[]/, "\\[" ).replace( /[\]]/, "\\]" );
	var regex   = new RegExp( "[\\?&]" + name + "=([^&#]*)" ),
		results = regex.exec( location.search );
	return results == null ? "" : decodeURIComponent( results[ 1 ].replace( /\+/g, " " ) );
};