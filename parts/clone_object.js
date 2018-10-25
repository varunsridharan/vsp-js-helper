/**
 * Creates A Clone of given value.
 * @param $data
 * @returns {any}
 */
module.exports = ( $data ) => JSON.parse( JSON.stringify( $data ) );