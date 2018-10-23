/**
 * Rounds a number to a specified amount of digits.
 * Use Math.round() and template literals to round the number to the specified number of digits. Omit the second argument, decimals to round to an integer.
 * @param n
 * @param decimals
 * @returns {number}
 */
module.exports = ( n, decimals = 0 ) => Number( `${Math.round( `${n}e${decimals}` )}e-${decimals}` );