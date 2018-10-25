let $vsp_helper = {};

// String Functions.
$vsp_helper.sprintf       = require( 'locutus/php/strings/sprintf' );
$vsp_helper.explode       = require( 'locutus/php/strings/explode' );
$vsp_helper.base64_decode = require( 'locutus/php/url/base64_decode' );
$vsp_helper.base64_encode = require( 'locutus/php/url/base64_encode' );

// Array & Objects.
$vsp_helper.arrayToCSV      = require( './parts/arrayToCSV' );
$vsp_helper.arrayToHTMLAttr = require( './parts/arrayToHTMLAttr' );
$vsp_helper.arrayToString   = require( './parts/arrayToString' );
$vsp_helper.arrayWithRange  = require( './parts/arrayWithRange' );
$vsp_helper.arrayWithValue  = require( './parts/arrayWithValue' );
$vsp_helper.arrayMerge      = require( 'locutus/php/array/array_merge' );
$vsp_helper.arrayMergeDeep  = require( 'locutus/php/array/array_merge_recursive' );
$vsp_helper.arrayToHTML     = require( './parts/arrayToHTML' );
$vsp_helper.arrayToWindow   = require( './parts/arrayToWindow' );
$vsp_helper.implode         = require( 'locutus/php/strings/implode' );
$vsp_helper.chunk           = require( './parts/chunk' );
$vsp_helper.difference      = require( './parts/difference' );
$vsp_helper.groupBy         = require( './parts/groupBy' );
$vsp_helper.first           = require( './parts/first' );
$vsp_helper.last            = require( './parts/last' );
$vsp_helper.filter          = require( './parts/filter' );
$vsp_helper.join            = require( './parts/join' );
$vsp_helper.castArray       = require( './parts/castArray' );
$vsp_helper.okg             = require( './parts/okg' );
$vsp_helper.oks             = require( './parts/oks' );
$vsp_helper.plain_object    = require( './parts/plain_object' );
$vsp_helper.cloneObject     = require( './parts/cloneObject' );

// Data Types.
$vsp_helper.is              = require( './parts/is' );
$vsp_helper.isArrayLike     = require( './parts/isArrayLike' );
$vsp_helper.isBoolean       = require( './parts/isBoolean' );
$vsp_helper.isEmpty         = require( './parts/isEmpty' );
$vsp_helper.isFunction      = require( './parts/isFunction' );
$vsp_helper.isNil           = require( './parts/isNil' );
$vsp_helper.isNull          = require( './parts/isNull' );
$vsp_helper.isNumber        = require( './parts/isNumber' );
$vsp_helper.isObject        = require( './parts/isObject' );
$vsp_helper.isObjectLike    = require( './parts/isObjectLike' );
$vsp_helper.isString        = require( './parts/isString' );
$vsp_helper.isUndefined     = require( './parts/isUndefined' );
$vsp_helper.isValidJSON     = require( './parts/isValidJSON' );
$vsp_helper.isjQuery        = require( './parts/isjQuery' );
$vsp_helper.function_exists = require( 'locutus/php/funchand/function_exists' );

// Device Type
$vsp_helper.detectDeviceType = require( './parts/detectDeviceType' );
$vsp_helper.isDesktop        = () => ( 'Desktop' === $vsp_helper.detectDeviceType() );
$vsp_helper.isMobile         = () => ( 'Mobile' === $vsp_helper.detectDeviceType() );

// Browser
$vsp_helper.isBrowserTabFocused  = require( './parts/isBrowserTabFocused' );
$vsp_helper.scrollToTop          = require( './parts/scrollToTop' );
$vsp_helper.UUIDGeneratorBrowser = require( './parts/UUIDGeneratorBrowser' );
$vsp_helper.copyToClipboard      = require( './parts/copyToClipboard' );
$vsp_helper.getScrollPosition    = require( './parts/getScrollPosition' );
$vsp_helper.hasWindowArg         = require( './parts/hasWindowArg' );
$vsp_helper.asWindowArg          = require( './parts/asWindowArg' );

// Debug
$vsp_helper.debug     = require( './parts/timeTaken' );
$vsp_helper.timeTaken = require( './parts/timeTaken' );
$vsp_helper.pipeLog   = require( './parts/pipeLog' );

// File System
$vsp_helper.basename = require( 'locutus/php/filesystem/basename' );
$vsp_helper.dirname  = require( 'locutus/php/filesystem/dirname' );
$vsp_helper.pathinfo = require( 'locutus/php/filesystem/pathinfo' );

// URL
$vsp_helper.parse_url        = require( 'locutus/php/url/parse_url' );
$vsp_helper.url_query_build  = require( 'locutus/php/url/http_build_query' );
$vsp_helper.rawurldecode     = require( 'locutus/php/url/rawurldecode' );
$vsp_helper.rawurlencode     = require( 'locutus/php/url/rawurlencode' );
$vsp_helper.urldecode        = require( 'locutus/php/url/urldecode' );
$vsp_helper.urlencode        = require( 'locutus/php/url/urlencode' );
$vsp_helper.getURLParameters = require( './parts/getURLParameters' );
$vsp_helper.query_string     = require( './parts/query_string' );

//JSON
$vsp_helper.JSONtoCSV       = require( './parts/JSONtoCSV' );
$vsp_helper.json_last_error = require( 'locutus/php/json/json_last_error' );
$vsp_helper.json_encode     = require( 'locutus/php/json/json_encode' );
$vsp_helper.json_decode     = require( 'locutus/php/json/json_decode' );

// Date
$vsp_helper.isAfterDate             = require( './parts/isAfterDate' );
$vsp_helper.isBeforeDate            = require( './parts/isBeforeDate' );
$vsp_helper.isSameDate              = require( './parts/isSameDate' );
$vsp_helper.formatDuration          = require( './parts/formatDuration' );
$vsp_helper.getDaysDiffBetweenDates = require( './parts/getDaysDiffBetweenDates' );
$vsp_helper.date                    = require( 'locutus/php/datetime/date' );
$vsp_helper.strtotime               = require( 'locutus/php/datetime/strtotime' );
$vsp_helper.time                    = require( 'locutus/php/datetime/time' );
$vsp_helper.microtime               = require( 'locutus/php/datetime/microtime' );
$vsp_helper.date_parse              = require( 'locutus/php/datetime/date_parse' );

// Function Handler.
$vsp_helper.call_user_func       = require( 'locutus/php/funchand/call_user_func' );
$vsp_helper.call_user_func_array = require( 'locutus/php/funchand/call_user_func_array' );
$vsp_helper.call_func            = $vsp_helper.call_user_func;
$vsp_helper.call_func_array      = $vsp_helper.call_user_func_array;

// Others.
$vsp_helper.md5      = require( 'locutus/php/strings/md5' );
$vsp_helper.rand_md5 = require( './parts/rand_md5' );
$vsp_helper.counter  = require( './parts/counter' );
$vsp_helper.uniqid   = require( 'locutus/php/misc/uniqid' );
$vsp_helper.asjQuery = require( './parts/asjQuery' );
$vsp_helper.round    = require( './parts/round' );

module.exports       = $vsp_helper;