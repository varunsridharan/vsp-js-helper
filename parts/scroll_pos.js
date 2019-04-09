/**
 * Returns the scroll position of the current page.
 * Use pageXOffset and pageYOffset if they are defined, otherwise scrollLeft and scrollTop. You can omit el to use a default value of window.
 * @param el
 * @returns {{x: number, y: number}}
 */
export default ( el = window ) => ( {
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
} );