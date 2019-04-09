export default val => {
	var s = val;
	if( _.isNumber( val ) ) {
		return val + 'px';
	} else if( val.indexOf( 'px' ) > -1 || val.indexOf( '%' ) > -1 || val.indexOf( 'em' ) > -1 ) {
		let checkPx  = s.replace( 'px', '' );
		let checkPct = s.replace( '%', '' );
		let checkEm  = s.replace( 'em', '' );
		if( _.isNumber( checkPx ) || _.isNumber( checkPct ) || _.isNumber( checkEm ) ) {
			return val;
		} else {
			return '0px';
		}
	} else {
		return '0px';
	}
};