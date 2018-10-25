/**
 * Converts an array of objects to a comma-separated values (CSV) string that contains only the columns specified.
 * Use Array.prototype.join(delimiter) to combine all the names in columns to create the first row.
 * Use Array.prototype.map() and Array.prototype.reduce() to create a row for each object,
 * substituting non-existent values with empty strings and only mapping values in columns.
 * Use Array.prototype.join('\n') to combine all rows into a string. Omit the third argument, delimiter, to use a default delimiter of ,.
 * @param arr
 * @param columns
 * @param delimiter
 * @returns {string}
 * @constructor
 */
module.exports = ( arr, columns, delimiter = ',' ) => [ columns.join( delimiter ), ...arr.map( obj => columns.reduce( ( acc, key ) => `${acc}${!acc.length ? '' : delimiter}"${!obj[ key ] ? '' : obj[ key ]}"`, '' ) ) ].join( '\n' );