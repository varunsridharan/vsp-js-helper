/**
 * Returns an object containing the parameters of the current URL.
 * Use String.match() with an appropriate regular expression to get all key-value pairs,
 * Array.prototype.reduce() to map and combine them into a single object.
 * Pass location.search as the argument to apply to the current url.
 * @param url
 * @returns {T | {}}
 */
export default url =>
	( url.match( /([^?=&]+)(=([^&]*))/g ) || [] ).reduce(
		( a, v ) => ( ( a[ v.slice( 0, v.indexOf( '=' ) ) ] = v.slice( v.indexOf( '=' ) + 1 ) ), a ),
		{}
	);