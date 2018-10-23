/**
 * Initializes and fills an array with the specified values.
 * Use Array(n) to create an array of the desired length, fill(v) to fill it with the desired values. You can omit val to use a default value of 0.
 * @param n
 * @param val
 * @returns {any[]}
 */
module.exports = ( n, val = 0 ) => Array( n ).fill( val );