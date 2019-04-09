/**
 * Creates A Clone of given value.
 * @param $data
 * @returns {any}
 */
export default ( $data ) => {
	let $return = {};
	if( typeof $data === 'object' ) {
		for( let $key in $data ) {
			$return[ $key ] = $data[ $key ];
		}
	}
	return $return;
};
