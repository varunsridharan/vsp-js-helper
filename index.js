module.exports = {
	/**
	 * String
	 */
	sprintf: require( 'locutus/php/strings/sprintf' ),
	explode: require( 'locutus/php/strings/explode' ),
	base64_decode: require( 'locutus/php/url/base64_decode' ),
	base64_encode: require( 'locutus/php/url/base64_encode' ),

	/**
	 * Array & Object
	 */
	arrayToCSV: require( './parts/arrayToCSV' ),
	arrayToHTMLAttr: require( './parts/arrayToHTMLAttr' ),
	//arrayToString: require( './parts/arrayToString' ),
	arrayWithRange: require( './parts/arrayWithRange' ),
	arrayWithValue: require( './parts/arrayWithValue' ),
	arrayMerge: require( 'locutus/php/array/array_merge' ),
	arrayMergeDeep: require( 'locutus/php/array/array_merge_recursive' ),
	arrayToHTML: require( './parts/arrayToHTML' ),
	arrayToWindow: require( './parts/arrayToWindow' ),
	implode: require( 'locutus/php/strings/implode' ),
	chunk: require( './parts/chunk' ),
	difference: require( './parts/difference' ),
	groupBy: require( './parts/groupBy' ),
	first: require( './parts/first' ),
	last: require( './parts/last' ),
	filter: require( './parts/filter' ),
	join: require( './parts/join' ),
	castArray: require( './parts/castArray' ),
	okg: require( './parts/okg' ),
	oks: require( './parts/oks' ),
	plain_object: require( './parts/plain_object' ),
	cloneObject: require( './parts/cloneObject' ),

	/**
	 * Data Type
	 */
	is: require( './parts/is' ),
	isArrayLike: require( './parts/isArrayLike' ),
	isBoolean: require( './parts/isBoolean' ),
	isEmpty: require( './parts/isEmpty' ),
	isFunction: require( './parts/isFunction' ),
	isNil: require( './parts/isNil' ),
	isNull: require( './parts/isNull' ),
	isNumber: require( './parts/isNumber' ),
	isObject: require( './parts/isObject' ),
	isObjectLike: require( './parts/isObjectLike' ),
	isString: require( './parts/isString' ),
	isUndefined: require( './parts/isUndefined' ),
	isValidJSON: require( './parts/isValidJSON' ),
	isjQuery: require( './parts/isjQuery' ),
	function_exists: require( 'locutus/php/funchand/function_exists' ),

	/**
	 * File System
	 */
	basename: require( 'locutus/php/filesystem/basename' ),
	dirname: require( 'locutus/php/filesystem/dirname' ),
	pathinfo: require( 'locutus/php/filesystem/pathinfo' ),
	parse_url: require( 'locutus/php/url/parse_url' ),
	url_query_build: require( 'locutus/php/url/http_build_query' ),
	rawurldecode: require( 'locutus/php/url/rawurldecode' ),
	rawurlencode: require( 'locutus/php/url/rawurlencode' ),
	urldecode: require( 'locutus/php/url/urldecode' ),
	urlencode: require( 'locutus/php/url/urlencode' ),
	getURLParameters: require( './parts/getURLParameters' ),
	query_string: require( './parts/query_string' ),

	/**
	 * Date Function
	 */
	isAfterDate: require( './parts/isAfterDate' ),
	isBeforeDate: require( './parts/isBeforeDate' ),
	isSameDate: require( './parts/isSameDate' ),
	formatDuration: require( './parts/formatDuration' ),
	getDaysDiffBetweenDates: require( './parts/getDaysDiffBetweenDates' ),
	date: require( 'locutus/php/datetime/date' ),
	strtotime: require( 'locutus/php/datetime/strtotime' ),
	time: require( 'locutus/php/datetime/time' ),
	microtime: require( 'locutus/php/datetime/microtime' ),
	date_parse: require( 'locutus/php/datetime/date_parse' ),

	/**
	 * JSON
	 */
	JSONtoCSV: require( './parts/JSONtoCSV' ),
	json_last_error: require( 'locutus/php/json/json_last_error' ),
	json_encode: require( 'locutus/php/json/json_encode' ),
	json_decode: require( 'locutus/php/json/json_decode' ),

	/**
	 * INT / Number
	 */
	round: require( './parts/round' ),

	/**
	 * Browser Related / Debug / Window
	 */
	detectDeviceType: require( './parts/detectDeviceType' ),
	isDesktop: () => ( 'Desktop' === VSP_JS_Helper.detectDeviceType() ),
	isMobile: () => ( 'Mobile' === VSP_JS_Helper.detectDeviceType() ),
	isBrowserTabFocused: require( './parts/isBrowserTabFocused' ),
	scrollToTop: require( './parts/scrollToTop' ),
	UUIDGeneratorBrowser: require( './parts/UUIDGeneratorBrowser' ),
	debug: require( './parts/timeTaken' ),
	timeTaken: require( './parts/timeTaken' ),
	pipeLog: require( './parts/pipeLog' ),
	copyToClipboard: require( './parts/copyToClipboard' ),
	getScrollPosition: require( './parts/getScrollPosition' ),
	hasWindowArg: require( './parts/hasWindowArg' ),
	asWindowArg: require( './parts/asWindowArg' ),

	/**
	 * Others
	 */
	md5: require( 'locutus/php/strings/md5' ),
	rand_md5: require( './parts/rand_md5' ),
	counter: require( './parts/counter' ),
	uniqid: require( 'locutus/php/misc/uniqid' ),
	asjQuery: require( './parts/asjQuery' ),
	//prettyBytes: require( './parts/prettyBytes' ),
};
