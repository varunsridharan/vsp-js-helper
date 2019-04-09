let $OKS       = ( properties, obj, defaultValue, delimiter = '/' ) => {
	properties   = ( typeof properties === 'string' ) ? properties.split( delimiter ) : [ properties ];
	let property = properties.shift();

	if( typeof obj[ property ] === 'undefined' ) {
		return defaultValue;
	}

	if( properties.length ) {
		properties = properties.join( delimiter );
		return $OKS( properties, obj[ property ], defaultValue, delimiter );
	} else {
		return obj[ property ];
	}
};
export default $OKS;