module.exports = ( callback, title = 'TimeTaken' ) => {
	console.time( title );
	const r = callback();
	console.timeEnd( title );
	return r;
};