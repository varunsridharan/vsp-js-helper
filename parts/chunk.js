/**
 * Chunks an array into smaller arrays of a specified size.
 * Use Array.from() to create a new array, that fits the number of chunks that will be produced.
 * Use Array.prototype.slice() to map each element of the new array to a chunk the length of size.
 * If the original array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param arr
 * @param size
 * @returns {any[]}
 */
module.exports = ( arr, size ) => Array.from( { length: Math.ceil( arr.length / size ) }, ( v, i ) => arr.slice( i * size, i * size + size ) );
