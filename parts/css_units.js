const isNumberic = require( 'locutus/php/var/is_numeric' );

module.export = ( ( val ) => {
	var s = val;
	if( isNumberic( val ) ) {
		return val + 'px';
	} else if( val.indexOf( 'px' ) > -1 || val.indexOf( '%' ) > -1 || val.indexOf( 'em' ) > -1 ) {
		let checkPx  = s.replace( 'px', '' );
		let checkPct = s.replace( '%', '' );
		let checkEm  = s.replace( 'em', '' );
		if( isNumberic( checkPx ) || isNumberic( checkPct ) || isNumberic( checkEm ) ) {
			return val;
		} else {
			return '0px';
		}
	} else {
		return '0px';
	}
} );