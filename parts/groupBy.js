/**
 * Groups the elements of an array based on the given function.
 * Use Array.prototype.map() to map the values of an array to a function or property name.
 * Use Array.prototype.reduce() to create an object, where the keys are produced from the mapped results.
 * @param arr
 * @param fn
 * @returns {*}
 */
module.exports = ( arr, fn ) =>
	arr.map( typeof fn === 'function' ? fn : val => val[ fn ] ).reduce( ( acc, val, i ) => {
		acc[ val ] = ( acc[ val ] || [] ).concat( arr[ i ] );
		return acc;
	}, {} );