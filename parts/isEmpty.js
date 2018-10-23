/**
 * Returns true if the a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.
 * Check if the provided value is null or if its length is equal to 0.
 * @param val
 * @returns {boolean}
 */
module.exports = val => val == null || !( Object.keys( val ) || val ).length;