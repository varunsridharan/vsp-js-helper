//module.exports.json_to_csv        = require( './parts/json_to_csv' );
//module.exports.array_to_csv       = require( './parts/array_to_csv' );

// Array & Object Related Functions
module.exports.array_merge           = require( 'locutus/php/array/array_merge' );
module.exports.array_merge_recursive = require( 'locutus/php/array/array_merge_recursive' );
module.exports.array_values          = require( 'locutus/php/array/array_values' );
module.exports.in_array              = require( 'locutus/php/array/in_array' );
module.exports.count                 = require( 'locutus/php/array/count' );
module.exports.explode               = require( 'locutus/php/strings/explode' );
module.exports.implode               = require( 'locutus/php/strings/implode' );
module.exports.parse_args            = require( 'js-parse-args' );
module.exports.array_to_html_attr    = require( './parts/array_to_html_attr' );
module.exports.array_to_html         = require( './parts/array_to_html' );
module.exports.array_to_window       = require( './parts/array_to_window' );
module.exports.wrap_array            = require( './parts/wrap_array' );
module.exports.okg                   = require( './parts/okg' );
module.exports.oks                   = require( './parts/oks' );
module.exports.plain_object          = require( './parts/plain_object' );
module.exports.clone_object          = require( './parts/clone_object' );

// Date & Time Related Functions
module.exports.microtime       = require( 'locutus/php/datetime/microtime' );
module.exports.time            = require( 'locutus/php/datetime/time' );
module.exports.is_after_date   = require( './parts/is_after_date' );
module.exports.is_before_date  = require( './parts/is_before_date' );
module.exports.is_same_date    = require( './parts/is_same_date' );
module.exports.format_duration = require( './parts/format_duration' );
module.exports.diff_days       = require( './parts/diff_days' );
module.exports.time_taken      = require( './parts/time_taken' );

// Data Type Validation
module.exports.gettype        = require( 'locutus/php/var/gettype' );
module.exports.boolval        = require( 'locutus/php/var/boolval' );
module.exports.empty          = require( 'locutus/php/var/empty' );
module.exports.floatval       = require( 'locutus/php/var/floatval' );
module.exports.intval         = require( 'locutus/php/var/intval' );
module.exports.isset          = require( 'locutus/php/var/isset' );
module.exports.is_bool        = require( 'locutus/php/var/is_bool' );
module.exports.is_callable    = require( 'locutus/php/var/is_callable' );
module.exports.is_float       = require( 'locutus/php/var/is_float' );
module.exports.is_int         = require( 'locutus/php/var/is_int' );
module.exports.is_null        = require( 'locutus/php/var/is_null' );
module.exports.is_numeric     = require( 'locutus/php/var/is_numeric' );
module.exports.is_scalar      = require( 'locutus/php/var/is_scalar' );
module.exports.is_string      = require( 'locutus/php/var/is_string' );
module.exports.is_array       = require( 'locutus/php/var/is_array' );
module.exports.is_object      = require( 'locutus/php/var/is_object' );
module.exports.is_double      = require( 'locutus/php/var/is_double' );
module.exports.is_integer     = require( 'locutus/php/var/is_integer' );
module.exports.is_long        = require( 'locutus/php/var/is_long' );
module.exports.is_real        = require( 'locutus/php/var/is_real' );
module.exports.is_unicode     = require( 'locutus/php/var/is_unicode' );
module.exports.is_buffer      = require( 'locutus/php/var/is_buffer' );
module.exports.is_undefined   = require( './parts/is_undefined' );
module.exports.is_url         = require( './parts/is_url.js' );
module.exports.is_object_like = require( './parts/is_object_like' );
module.exports.is_array_like  = require( './parts/is_object_like' );

// Run Time Function Relateds.
module.exports.call_user_func       = require( 'locutus/php/funchand/call_user_func' );
module.exports.call_user_func_array = require( 'locutus/php/funchand/call_user_func_array' );
module.exports.function_exists      = require( 'locutus/php/funchand/function_exists' );
module.exports.create_function      = require( 'locutus/php/funchand/create_function' );

// String Related
module.exports.str_replace = require( 'locutus/php/strings/str_replace' );
module.exports.strtolower  = require( 'locutus/php/strings/strtolower' );
module.exports.strtoupper  = require( 'locutus/php/strings/strtoupper' );

// Browser Related
module.exports.is_tab_focused = require( './parts/is_tab_focused' );
module.exports.is_window_arg  = require( './parts/is_window_arg' );
module.exports.scroll_to_top  = require( './parts/scroll_to_top' );
module.exports.copy_to_clip   = require( './parts/copy_to_clip' );
module.exports.scroll_pos     = require( './parts/scroll_pos' );
module.exports.window_arg     = require( './parts/window_arg' );
module.exports.device_type    = require( './parts/device_type' );
module.exports.debug          = require( './parts/time_taken' );
module.exports.pipe_log       = require( './parts/pipe_log' );

// jQuery Related.
module.exports.to_jquery = require( './parts/to_jquery' );
module.exports.is_jquery = require( './parts/is_jquery' );

// Others
module.exports.to_js_func    = require( './parts/to_js_func' );
module.exports.md5           = require( 'locutus/php/strings/md5' );
module.exports.base64_decode = require( 'locutus/php/url/base64_decode' );
module.exports.base64_encode = require( 'locutus/php/url/base64_encode' );
module.exports.counter       = require( './parts/counter' );
module.exports.rand_md5      = require( './parts/rand_md5' );
module.exports.css_units     = require( './parts/css_units' );

// URL Related Functions.
module.exports.url_params       = require( './parts/url_params' );
module.exports.query_string     = require( './parts/query_string' );
module.exports.http_build_query = require( 'locutus/php/url/http_build_query' );
module.exports.parse_str        = require( 'locutus/php/strings/parse_str' );
module.exports.parse_url        = require( 'locutus/php/url/parse_url' );
module.exports.rawurldecode     = require( 'locutus/php/url/rawurldecode' );
module.exports.rawurlencode     = require( 'locutus/php/url/rawurlencode' );
module.exports.urldecode        = require( 'locutus/php/url/urldecode' );
module.exports.urlencode        = require( 'locutus/php/url/urlencode' );
