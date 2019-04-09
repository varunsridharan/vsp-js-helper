// Array & Object Related Functions
export const parse_args         = require( 'js-parse-args' ).default;
export const array_to_html_attr = require( './parts/array_to_html_attr' ).default;
export const array_to_html      = require( './parts/array_to_html' ).default;
export const array_to_window    = require( './parts/array_to_window' ).default;
export const plain_object       = require( './parts/plain_object' ).default;

// Date & Time Related Functions
export const microtime       = require( 'locutus/php/datetime/microtime' );
export const is_after_date   = require( './parts/is_after_date' ).default;
export const is_before_date  = require( './parts/is_before_date' ).default;
export const is_same_date    = require( './parts/is_same_date' ).default;
export const format_duration = require( './parts/format_duration' ).default;
export const diff_days       = require( './parts/diff_days' ).default;
export const time_taken      = require( './parts/time_taken' ).default;

// Data Type Validation
export const is_url = require( './parts/is_url.js' ).default;

// Run Time Function Relateds.
export const call_user_func       = require( 'locutus/php/funchand/call_user_func' );
export const call_user_func_array = require( 'locutus/php/funchand/call_user_func_array' );
export const function_exists      = require( 'locutus/php/funchand/function_exists' );
export const create_function      = require( 'locutus/php/funchand/create_function' );
export const is_callable          = require( 'locutus/php/var/is_callable' );

// Browser Related
export const is_tab_focused = require( './parts/is_tab_focused' ).default;
export const is_window_arg  = require( './parts/is_window_arg' ).default;
export const scroll_to_top  = require( './parts/scroll_to_top' ).default;
export const copy_to_clip   = require( './parts/copy_to_clip' ).default;
export const scroll_pos     = require( './parts/scroll_pos' ).default;
export const window_arg     = require( './parts/window_arg' ).default;
export const device_type    = require( './parts/device_type' ).default;
export const pipe_log       = require( './parts/pipe_log' ).default;

// jQuery Related.
export const to_jquery = require( './parts/to_jquery' ).default;
export const is_jquery = require( './parts/is_jquery' ).default;

// Others
export const to_js_func = require( './parts/to_js_func' ).default;
export const md5        = require( 'locutus/php/strings/md5' );
export const counter    = require( './parts/counter' ).default;
export const rand_md5   = require( './parts/rand_md5' ).default;
export const css_units  = require( './parts/css_units' ).default;

// URL Related Functions.
export const url_params    = require( './parts/url_params' ).default;
export const query_string  = require( './parts/query_string' ).default;
export const parse_str     = require( 'locutus/php/strings/parse_str' );
export const base64_encode = require( 'locutus/php/url/base64_encode' );
export const base64_decode = require( 'locutus/php/url/base64_decode' );
export const rawurldecode  = require( 'locutus/php/url/rawurldecode' );
export const rawurlencode  = require( 'locutus/php/url/rawurlencode' );
export const urldecode     = require( 'locutus/php/url/urldecode' );
export const urlencode     = require( 'locutus/php/url/urlencode' );
export const parse_url     = require( 'locutus/php/url/parse_url' );


export default {
	parse_args: parse_args,
	array_to_html_attr: array_to_html_attr,
	array_to_html: array_to_html,
	array_to_window: array_to_window,
	plain_object: plain_object,
	microtime: microtime,
	is_after_date: is_after_date,
	is_before_date: is_before_date,
	is_same_date: is_same_date,
	format_duration: format_duration,
	diff_days: diff_days,
	time_taken: time_taken,
	is_url: is_url,
	call_user_func: call_user_func,
	call_user_func_array: call_user_func_array,
	function_exists: function_exists,
	create_function: create_function,
	is_callable: is_callable,
	is_tab_focused: is_tab_focused,
	is_window_arg: is_window_arg,
	scroll_to_top: scroll_to_top,
	copy_to_clip: copy_to_clip,
	scroll_pos: scroll_pos,
	window_arg: window_arg,
	device_type: device_type,
	pipe_log: pipe_log,
	to_jquery: to_jquery,
	is_jquery: is_jquery,
	to_js_func: to_js_func,
	md5: md5,
	counter: counter,
	rand_md5: rand_md5,
	css_units: css_units,
	url_params: url_params,
	query_string: query_string,
	parse_str: parse_str,
	base64_encode: base64_encode,
	base64_decode: base64_decode,
	rawurldecode: rawurldecode,
	rawurlencode: rawurlencode,
	urldecode: urldecode,
	urlencode: urlencode,
	parse_url: parse_url,
};
