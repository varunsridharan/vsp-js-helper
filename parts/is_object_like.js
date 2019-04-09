import is_object from 'locutus/php/var/is_object';
import is_array from 'locutus/php/var/is_array';

/**
 * Checks if a value is object-like.
 * Check if the provided value is not null and its typeof is equal to 'object'.
 * @param val
 * @returns {boolean}
 */
export default ( val ) => {
	return ( is_object( val ) || is_array( val ) );
};