/**
 * Returns the difference (in days) between two dates.
 * Calculate the difference (in days) between two Date objects.
 * @param dateInitial
 * @param dateFinal
 * @returns {number}
 */
module.exports = ( dateInitial, dateFinal ) => ( dateFinal - dateInitial ) / ( 1000 * 3600 * 24 );