/**
 * Returns the difference between two arrays.
 * Create a Set from b, then use Array.prototype.filter() on a to only keep values not contained in b.
 * @param a
 * @param b
 * @returns {*}
 */
module.exports = ( a, b ) => {
	const s = new Set( b );
	return a.filter( x => !s.has( x ) );
};