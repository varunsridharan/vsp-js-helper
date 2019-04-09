let $content                      = {};
// Array & Object Related Functions
$content.parse_args         = require( 'js-parse-args' );
$content.array_to_html_attr = require( './parts/array_to_html_attr' );
$content.array_to_html      = require( './parts/array_to_html' );
$content.array_to_window    = require( './parts/array_to_window' );
$content.plain_object       = require( './parts/plain_object' );

// Date & Time Related Functions
$content.microtime       = require( 'locutus/php/datetime/microtime' );
$content.is_after_date   = require( './parts/is_after_date' );
$content.is_before_date  = require( './parts/is_before_date' );
$content.is_same_date    = require( './parts/is_same_date' );
$content.format_duration = require( './parts/format_duration' );
$content.diff_days       = require( './parts/diff_days' );
$content.time_taken      = require( './parts/time_taken' );

// Data Type Validation
$content.is_url = require( './parts/is_url.js' );

// Run Time Function Relateds.
$content.call_user_func       = require( 'locutus/php/funchand/call_user_func' );
$content.call_user_func_array = require( 'locutus/php/funchand/call_user_func_array' );
$content.function_exists      = require( 'locutus/php/funchand/function_exists' );
$content.create_function      = require( 'locutus/php/funchand/create_function' );
$content.is_callable          = require( 'locutus/php/var/is_callable' );

// Browser Related
$content.is_tab_focused = require( './parts/is_tab_focused' );
$content.is_window_arg  = require( './parts/is_window_arg' );
$content.scroll_to_top  = require( './parts/scroll_to_top' );
$content.copy_to_clip   = require( './parts/copy_to_clip' );
$content.scroll_pos     = require( './parts/scroll_pos' );
$content.window_arg     = require( './parts/window_arg' );
$content.device_type    = require( './parts/device_type' );
$content.pipe_log       = require( './parts/pipe_log' );

// jQuery Related.
$content.to_jquery = require( './parts/to_jquery' );
$content.is_jquery = require( './parts/is_jquery' );

// Others
$content.to_js_func = require( './parts/to_js_func' );
$content.md5        = require( 'locutus/php/strings/md5' );
$content.counter    = require( './parts/counter' );
$content.rand_md5   = require( './parts/rand_md5' );
$content.css_units  = require( './parts/css_units' );

// URL Related Functions.
$content.url_params    = require( './parts/url_params' );
$content.query_string  = require( './parts/query_string' );
$content.parse_str     = require( 'locutus/php/strings/parse_str' );
$content.base64_encode = require( 'locutus/php/url/base64_encode' );
$content.base64_decode = require( 'locutus/php/url/base64_decode' );
$content.rawurldecode  = require( 'locutus/php/url/rawurldecode' );
$content.rawurlencode  = require( 'locutus/php/url/rawurlencode' );
$content.urldecode     = require( 'locutus/php/url/urldecode' );
$content.urlencode     = require( 'locutus/php/url/urlencode' );
$content.parse_url     = require( 'locutus/php/url/parse_url' );

export default $content;