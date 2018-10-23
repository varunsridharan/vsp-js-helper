/**
 * Checks if the provided argument is a valid JSON.
 * Use JSON.parse() and a try... catch block to check if the provided argument is a valid JSON.
 * @param obj
 * @returns {boolean}
 */
module.exports = obj => {
	try {
		JSON.parse( obj );
		return true;
	} catch( e ) {
		return false;
	}
};