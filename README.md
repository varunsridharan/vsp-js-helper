# VSP JS Helper
> Curated collection of useful JavaScript snippets.

## Install
### NPM
You can install this via NPM using below cmd
> `npm install vsp-js-helper` OR `npm install vsp-js-helper --save-dev`

```javascript
let $js_helper = require('vsp-js-helper');
console.log($js_helper.rand_md5());
```

### Manual 
```html
<script src="dist/vsp-js-helper.js"></script>
```
```javascript
console.log(vsp_js_helper.rand_md5());
```

## Built in Functions
* [`array_combine`](#array_combine)
* [`array_count_values`](#array_count_values)
* [`array_fill`](#array_fill)
* [`array_fill_keys`](#array_fill_keys)
* [`array_filter`](#array_filter)
* [`array_flip`](#array_flip)
* [`array_key_exists`](#array_key_exists)
* [`array_keys`](#array_keys)
* [`array_map`](#array_map)
* [`array_merge`](#array_merge)
* [`array_merge_recursive`](#array_merge_recursive)
* [`array_reverse`](#array_reverse)
* [`array_search`](#array_search)
* [`array_sum`](#array_sum)
* [`array_unique`](#array_unique)
* [`array_values`](#array_values)
* [`array_walk`](#array_walk)
* [`array_walk_recursive`](#array_walk_recursive)
* [`count`](#count)
* [`current`](#current)
* [`end`](#end)
* [`in_array`](#in_array)
* [`key`](#key)
* [`next`](#next)
* [`pos`](#pos)
* [`prev`](#prev)
* [`range`](#range)
* [`reset`](#reset)
* [`sizeof`](#sizeof)
* [`array_to_csv`](#array_to_csv)
* [`array_to_html_attr`](#array_to_html_attr)
* [`array_to_html`](#array_to_html)
* [`array_to_window`](#array_to_window)
* [`wrap_array`](#wrap_array)
* [`okg`](#okg)
* [`oks`](#oks)
* [`plain_object`](#plain_object)
* [`clone_object`](#clone_object)
* [`date`](#date)
* [`date_parse`](#date_parse)
* [`getdate`](#getdate)
* [`microtime`](#microtime)
* [`strtotime`](#strtotime)
* [`time`](#time)
* [`is_after_date`](#is_after_date)
* [`is_before_date`](#is_before_date)
* [`is_same_date`](#is_same_date)
* [`format_duration`](#format_duration)
* [`diff_days`](#diff_days)
* [`basename`](#basename)
* [`dirname`](#dirname)
* [`pathinfo`](#pathinfo)
* [`call_user_func`](#call_user_func)
* [`call_user_func_array`](#call_user_func_array)
* [`function_exists`](#function_exists)
* [`version_compare`](#version_compare)
* [`json_to_csv`](#json_to_csv)
* [`uniqid`](#uniqid)
* [`count_chars`](#count_chars)
* [`explode`](#explode)
* [`implode`](#implode)
* [`ltrim`](#ltrim)
* [`md5`](#md5)
* [`nl2br`](#nl2br)
* [`number_format`](#number_format)
* [`parse_str`](#parse_str)
* [`printf`](#printf)
* [`rtrim`](#rtrim)
* [`split`](#split)
* [`sprintf`](#sprintf)
* [`str_ireplace`](#str_ireplace)
* [`str_pad`](#str_pad)
* [`str_repeat`](#str_repeat)
* [`str_replace`](#str_replace)
* [`str_shuffle`](#str_shuffle)
* [`str_split`](#str_split)
* [`str_word_count`](#str_word_count)
* [`strip_tags`](#strip_tags)
* [`stripslashes`](#stripslashes)
* [`strlen`](#strlen)
* [`strstr`](#strstr)
* [`strtolower`](#strtolower)
* [`strtoupper`](#strtoupper)
* [`strtr`](#strtr)
* [`trim`](#trim)
* [`vprintf`](#vprintf)
* [`vsprintf`](#vsprintf)
* [`wordwrap`](#wordwrap)
* [`to_jquery`](#to_jquery)
* [`to_js_func`](#to_js_func)
* [`rand_md5`](#rand_md5)
* [`base64_decode`](#base64_decode)
* [`base64_encode`](#base64_encode)
* [`http_build_query`](#http_build_query)
* [`parse_url`](#parse_url)
* [`rawurldecode`](#rawurldecode)
* [`rawurlencode`](#rawurlencode)
* [`urldecode`](#urldecode)
* [`urlencode`](#urlencode)
* [`url_params`](#url_params)
* [`query_string`](#query_string)
* [`boolval`](#boolval)
* [`doubleval`](#doubleval)
* [`empty`](#empty)
* [`floatval`](#floatval)
* [`gettype`](#gettype)
* [`intval`](#intval)
* [`is_array`](#is_array)
* [`is_jquery`](#is_jquery)
* [`is_bool`](#is_bool)
* [`is_buffer`](#is_buffer)
* [`is_callable`](#is_callable)
* [`is_double`](#is_double)
* [`is_float`](#is_float)
* [`is_int`](#is_int)
* [`is_integer`](#is_integer)
* [`is_long`](#is_long)
* [`is_null`](#is_null)
* [`is_numeric`](#is_numeric)
* [`is_object`](#is_object)
* [`is_real`](#is_real)
* [`is_scalar`](#is_scalar)
* [`is_string`](#is_string)
* [`is_unicode`](#is_unicode)
* [`is_undefined`](#is_undefined)
* [`isset`](#isset)
* [`print_r`](#print_r)
* [`serialize`](#serialize)
* [`unserialize`](#unserialize)
* [`var_export`](#var_export)
* [`is_tab_focused`](#is_tab_focused)
* [`scroll_to_top`](#scroll_to_top)
* [`copy_to_clip`](#copy_to_clip)
* [`scroll_pos`](#scroll_pos)
* [`is_window_arg`](#is_window_arg)
* [`window_arg`](#window_arg)
* [`device_type`](#device_type)
* [`debug`](#debug)
* [`time_taken`](#time_taken)
* [`pipe_log`](#pipe_log)

<br>[⬆ Back to top](#manual)

## Detailed List
### `okg`
```javascript
var $object = {
	foo:{
		bar:{
			value:"Value Here",
		}
	},
	hello:{
		world:"Hi There",
	}
	
}

console.log(vsp_js_helper.okg('foo/bar/value',$object)); // Logs Value as " Value Here "
console.log(vsp_js_helper.okg('hello|world',$object,'|')); // Logs Value as " Hi There "

/**
 * @param {String} properties 'a/b/c'
 * @param {Object} obj
 * @param {String} [delimiter] Default '/'
 */
var $value = vsp_js_helper.oks('hello|world',$object,'|');
```

### `oks`
```javascript
var $object = {
	foo:{
		bar:{
			value:"Value Here",
		}
	},
	hello:{
		world:"Hi There",
	}
	
}

console.log(vsp_js_helper.oks('foo/bar/value','changed',$object)); // Changes value from "Value Here" to "changed"
console.log(vsp_js_helper.oks('hello|world',"Hello World",$object,'|')); // Changes Value from " Hi There " To " Hello World "

/**
 * @param {String} properties 'a/b/c'
 * @param {*} value
 * @param {Object} obj
 * @param {String} [delimiter] Default '/'
 */
$object = vsp_js_helper.oks('hello|world',"Hello World",$object,'|');
```

<br>[⬆ Back to top](#manual)



---
## Sponsored By
[![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue.png)](https://s.svarun.in/Ef)