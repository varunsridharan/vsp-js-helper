export default ( $array ) => {
	for( let $key in $array ) {
		window[ $key ] = $array[ $key ];
	}
};