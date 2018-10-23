const VSP_JS_Helper = {
	arrayToCSV: require( './parts/arrayToCSV' ),
	JSONtoCSV: require( './parts/JSONtoCSV' ),
	chunk: require( './parts/chunk' ),
	filter: require( './parts/filter' ),
	difference: require( './parts/difference' ),
	groupBy: require( './parts/groupBy' ),
	first: require( './parts/first' ),
	last: require( './parts/last' ),
	arrayWithRange: require( './parts/arrayWithRange' ),
	arrayWithValue: require( './parts/arrayWithValue' ),
	join: require( './parts/join' ),
	arrayToliHTML: require( './parts/arrayToliHTML' ),
	copyToClipboard: require( './parts/copyToClipboard' ),
	counter: require( './parts/counter' ),
	detectDeviceType: require( './parts/detectDeviceType' ),
	isDesktop: () => ( 'Desktop' === VSP_JS_Helper.detectDeviceType() ),
	isMobile: () => ( 'Mobile' === VSP_JS_Helper.detectDeviceType() ),
	getScrollPosition: require( './parts/getScrollPosition' ),
	isBrowserTabFocused: require( './parts/isBrowserTabFocused' ),
	scrollToTop: require( './parts/scrollToTop' ),
	UUIDGeneratorBrowser: require( './parts/UUIDGeneratorBrowser' ),
	formatDuration: require( './parts/formatDuration' ),
	getDaysDiffBetweenDates: require( './parts/getDaysDiffBetweenDates' ),
	isAfterDate: require( './parts/isAfterDate' ),
	isBeforeDate: require( './parts/isBeforeDate' ),
	isSameDate: require( './parts/isSameDate' ),
	round: require( './parts/round' ),
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
	castArray: require( './parts/castArray' ),
	getURLParameters: require( './parts/getURLParameters' ),
	prettyBytes: require( './parts/prettyBytes' ),
	debug: require( './parts/timeTaken' ),
	timeTaken: require( './parts/timeTaken' ),
	pipeLog: require( './parts/pipeLog' ),
	arrayToWindow: require( './parts/arrayToWindow' ),
	md5: require( 'blueimp-md5' ),
	rand_md5: require( './parts/rand_md5' ),
	query_string: require( './parts/query_string' ),
	okg: require( './parts/okg' ),
	oks: require( './parts/oks' ),

};

module.exports = VSP_JS_Helper;

