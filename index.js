// Array & Object Related Functions
module.exports.parse_args         = require( 'js-parse-args' );
module.exports.array_to_html_attr = require( './parts/array_to_html_attr' );
module.exports.array_to_html      = require( './parts/array_to_html' );
module.exports.array_to_window    = require( './parts/array_to_window' );
module.exports.plain_object       = require( './parts/plain_object' );

// Date & Time Related Functions
module.exports.microtime       = require( 'locutus/php/datetime/microtime' );
module.exports.is_after_date   = require( './parts/is_after_date' );
module.exports.is_before_date  = require( './parts/is_before_date' );
module.exports.is_same_date    = require( './parts/is_same_date' );
module.exports.format_duration = require( './parts/format_duration' );
module.exports.diff_days       = require( './parts/diff_days' );
module.exports.time_taken      = require( './parts/time_taken' );

// Data Type Validation
module.exports.is_url = require( './parts/is_url.js' );

// Run Time Function Relateds.
module.exports.call_user_func       = require( 'locutus/php/funchand/call_user_func' );
module.exports.call_user_func_array = require( 'locutus/php/funchand/call_user_func_array' );
module.exports.function_exists      = require( 'locutus/php/funchand/function_exists' );
module.exports.create_function      = require( 'locutus/php/funchand/create_function' );
module.exports.is_callable          = require( 'locutus/php/var/is_callable' );

// Browser Related
module.exports.is_tab_focused = require( './parts/is_tab_focused' );
module.exports.is_window_arg  = require( './parts/is_window_arg' );
module.exports.scroll_to_top  = require( './parts/scroll_to_top' );
module.exports.copy_to_clip   = require( './parts/copy_to_clip' );
module.exports.scroll_pos     = require( './parts/scroll_pos' );
module.exports.window_arg     = require( './parts/window_arg' );
module.exports.device_type    = require( './parts/device_type' );
module.exports.pipe_log       = require( './parts/pipe_log' );

// jQuery Related.
module.exports.to_jquery = require( './parts/to_jquery' );
module.exports.is_jquery = require( './parts/is_jquery' );

// Others
module.exports.to_js_func = require( './parts/to_js_func' );
module.exports.md5        = require( 'locutus/php/strings/md5' );
module.exports.counter    = require( './parts/counter' );
module.exports.rand_md5   = require( './parts/rand_md5' );
module.exports.css_units  = require( './parts/css_units' );

// URL Related Functions.
module.exports.url_params    = require( './parts/url_params' );
module.exports.query_string  = require( './parts/query_string' );
module.exports.parse_str     = require( 'locutus/php/strings/parse_str' );
module.exports.base64_encode = require( 'locutus/php/url/base64_encode' );
module.exports.base64_decode = require( 'locutus/php/url/base64_decode' );
module.exports.rawurldecode  = require( 'locutus/php/url/rawurldecode' );
module.exports.rawurlencode  = require( 'locutus/php/url/rawurlencode' );
module.exports.urldecode     = require( 'locutus/php/url/urldecode' );
module.exports.urlencode     = require( 'locutus/php/url/urlencode' );
module.exports.parse_url        = require( 'locutus/php/url/parse_url' );
