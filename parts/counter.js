/**
 * Creates a counter with the specified range, step and duration for the specified selector.
 * Check if step has the proper sign and change it accordingly.
 * Use setInterval() in combination with Math.abs() and Math.floor() to calculate the time between each new text draw.
 * Use document.querySelector().innerHTML to update the value of the selected element.
 * Omit the fourth parameter, step, to use a default step of 1. Omit the fifth parameter, duration, to use a default duration of 2000ms.
 * @param selector
 * @param start
 * @param end
 * @param step
 * @param duration
 * @returns {number}
 */
module.exports = ( selector, start, end, step = 1, duration = 2000 ) => {
	let current = start,
		_step   = ( end - start ) * step < 0 ? -step : step,
		timer   = setInterval( () => {
			current += _step;
			document.querySelector( selector ).innerHTML = current;
			if( current >= end ) document.querySelector( selector ).innerHTML = end;
			if( current >= end ) clearInterval( timer );
		}, Math.abs( Math.floor( duration / ( end - start ) ) ) );
	return timer;
};