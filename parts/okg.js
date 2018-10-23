import VSP_JS_Helper from '../index';

module.exports = ( properties, obj, defaultValue, delimiter = '/' ) => {
	properties   = ( typeof properties === 'string' ) ? properties.split( delimiter ) : [ properties ];
	let property = properties.shift();

	if( typeof obj[ property ] === 'undefined' ) {
		return defaultValue;
	}

	if( properties.length ) {
		properties = properties.join( delimiter );
		return VSP_JS_Helper.okg( properties, obj[ property ], defaultValue, delimiter );
	} else {
		return obj[ property ];
	}
};