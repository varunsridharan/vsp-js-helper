/**
 * Returns a boolean determining if the passed value is an object or not.
 * Uses the Object constructor to create an object wrapper for the given value.
 * If the value is null or undefined, create and return an empty object. Οtherwise,
 * return an object of a type that corresponds to the given value.
 * @param obj
 * @returns {boolean}
 */
module.exports = obj => obj === Object(obj);