import VSP_JS_Helper from '../index';

module.exports = ( properties, value, obj, delimiter = '/' ) => {
	properties   = ( typeof properties === 'string' ) ? properties.split( delimiter ) : [ properties ];
	let property = properties.shift();

	if( properties.length ) {
		properties = properties.join( delimiter );

		if( typeof obj[ property ] === 'undefined' ) {
			obj[ property ] = {};
		} else if( typeof obj[ property ] !== 'object' ) {
			console.warn( 'Object property "' + property + '" already has non object value:', obj[ property ], 'It will be replaced with an empty object' );
			obj[ property ] = {};
		} else if( typeof obj[ property ] === 'object' && typeof obj[ property ].length !== 'undefined' ) {
			if( ( /^[0-9]+$/ ).test( property ) ) {
				property = parseInt( property );
			} else {
				console.warn( 'Try to set non numeric property "' + property + '" to array:', obj[ property ], 'The array will be be replaced with an empty object' );
				obj[ property ] = {};
			}
		}
		VSP_JS_Helper.oks( properties, value, obj[ property ], delimiter );
	} else {
		obj[ property ] = value;
	}
	return obj;
};