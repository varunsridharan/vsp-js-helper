/**
 * Converts the given array elements into <li> tags and appends them to the list of the given id.
 * Use Array.prototype.map(), document.querySelector(), and an anonymous inner closure to create a list of html tags.
 * @param arr
 * @param listID
 * @returns {*}
 */
module.exports = ( arr, listID ) => ( el => ( ( el = document.querySelector( '#' + listID ) ), ( el.innerHTML += arr.map( item => `<li>${item}</li>` )
																													.join( '' ) ) ) )();