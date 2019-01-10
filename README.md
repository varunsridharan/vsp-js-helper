# VSP JS Helper
> Curated collection of useful JavaScript snippets.

## Install
### NPM
You can install this via NPM using below cmd
> `npm install vsp-js-helper` 

> --- OR --

> `npm install vsp-js-helper --save-dev`

```javascript
let $js_helper = require('vsp-js-helper');
console.log($js_helper.rand_md5());
```

### Manual 
```html
<script src="vsp-js-helper.dist.js"></script>
```
```javascript
console.log(vsp_js_helper.rand_md5());
```

## Built in Functions
### Array & Object
* [`parse_args`](#parse_args)
* [`array_to_html_attr`](#array_to_html_attr)
* [`array_to_html`](#array_to_html)
* [`array_to_window`](#array_to_window)
* [`plain_object`](#plain_object)

### Date & Time 
* [`microtime`](#microtime)
* [`is_after_date`](#is_after_date)
* [`is_before_date`](#is_before_date)
* [`is_same_date`](#is_same_date)
* [`format_duration`](#format_duration)
* [`diff_days`](#diff_days)
* [`time_taken`](#time_taken)

### Data Type Validation
* [`is_url`](#is_url)

### Run Time.
* [`call_user_func`](#call_user_func)
* [`call_user_func_array`](#call_user_func_array)
* [`function_exists`](#function_exists)
* [`create_function`](#create_function)
* [`is_callable`](#is_callable)

### Browser
* [`is_tab_focused`](#is_tab_focused)
* [`is_window_arg`](#is_window_arg)
* [`scroll_to_top`](#scroll_to_top)
* [`copy_to_clip`](#copy_to_clip)
* [`scroll_pos`](#scroll_pos)
* [`window_arg`](#window_arg)
* [`device_type`](#device_type)
* [`pipe_log`](#pipe_log)

### jQuery
* [`to_jquery`](#to_jquery)
* [`is_jquery`](#is_jquery)

### Others
* [`to_js_func`](#to_js_func)
* [`md5`](#md5)
* [`counter`](#counter)
* [`rand_md5`](#rand_md5)
* [`css_units`](#css_units)

### URL.
* [`url_params`](#url_params)
* [`query_string`](#query_string)
* [`parse_str`](#parse_str)
* [`base64_encode`](#base64_encode)
* [`base64_decode`](#base64_decode)
* [`rawurldecode`](#rawurldecode)
* [`rawurlencode`](#rawurlencode)
* [`urldecode`](#urldecode)
* [`urlencode`](#urlencode)
* [`parse_url`](#parse_url)


<br>[⬆ Back to top](#manual)

---
## Sponsored By
[![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue.png)](https://s.svarun.in/Ef)