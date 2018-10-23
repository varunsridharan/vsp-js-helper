# VSP JS Helper
> Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.

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
<script>
console.log(VSP_JS_Helper.rand_md5());
</script>
```

## Built in Functions
* [`arrayToCSV`](#arrayToCSV)
* [`JSONtoCSV`](#JSONtoCSV)
* [`chunk`](#chunk)
* [`filter`](#filter)
* [`difference`](#difference)
* [`groupBy`](#groupBy)
* [`first`](#first)
* [`last`](#last)
* [`arrayWithRange`](#arrayWithRange)
* [`arrayWithValue`](#arrayWithValue)
* [`join`](#join)
* [`arrayToliHTML`](#arrayToliHTML)
* [`copyToClipboard`](#copyToClipboard)
* [`counter`](#counter)
* [`detectDeviceType`](#detectDeviceType)
* [`isDesktop`](#isDesktop)
* [`isMobile`](#isMobile)
* [`getScrollPosition`](#getScrollPosition)
* [`isBrowserTabFocused`](#isBrowserTabFocused)
* [`scrollToTop`](#scrollToTop)
* [`UUIDGeneratorBrowser`](#UUIDGeneratorBrowser)
* [`formatDuration`](#formatDuration)
* [`getDaysDiffBetweenDates`](#getDaysDiffBetweenDates)
* [`isAfterDate`](#isAfterDate)
* [`isBeforeDate`](#isBeforeDate)
* [`isSameDate`](#isSameDate)
* [`round`](#round)
* [`is`](#is)
* [`isArrayLike`](#isArrayLike)
* [`isBoolean`](#isBoolean)
* [`isEmpty`](#isEmpty)
* [`isFunction`](#isFunction)
* [`isNil`](#isNil)
* [`isNull`](#isNull)
* [`isNumber`](#isNumber)
* [`isObject`](#isObject)
* [`isObjectLike`](#isObjectLike)
* [`isString`](#isString)
* [`isUndefined`](#isUndefined)
* [`isValidJSON`](#isValidJSON)
* [`castArray`](#castArray)
* [`getURLParameters`](#getURLParameters)
* [`prettyBytes`](#prettyBytes)
* [`debug`](#debug)
* [`timeTaken`](#timeTaken)
* [`pipeLog`](#pipeLog)
* [`arrayToWindow`](#arrayToWindow)
* [`md5`](#md5)
* [`rand_md5`](#rand_md5)
* [`query_string`](#query_string)
* [`okg`](#okg)
* [`oks`](#oks)

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

console.log(VSP_JS_Helper.okg('foo/bar/value',$object)); // Logs Value as " Value Here "
console.log(VSP_JS_Helper.okg('hello|world',$object,'|')); // Logs Value as " Hi There "

/**
 * @param {String} properties 'a/b/c'
 * @param {Object} obj
 * @param {String} [delimiter] Default '/'
 */
var $value = VSP_JS_Helper.oks('hello|world',$object,'|');
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

console.log(VSP_JS_Helper.oks('foo/bar/value','changed',$object)); // Changes value from "Value Here" to "changed"
console.log(VSP_JS_Helper.oks('hello|world',"Hello World",$object,'|')); // Changes Value from " Hi There " To " Hello World "

/**
 * @param {String} properties 'a/b/c'
 * @param {*} value
 * @param {Object} obj
 * @param {String} [delimiter] Default '/'
 */
$object = VSP_JS_Helper.oks('hello|world',"Hello World",$object,'|');
```

<br>[⬆ Back to top](#manual)



---
## Thanks To
[![30-seconds-of-code](https://raw.githubusercontent.com/30-seconds/30-seconds-of-code/master/logo.png)](https://github.com/30-seconds/30-seconds-of-code)
## Sponsored By
[![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue.png)](https://s.svarun.in/Ef)