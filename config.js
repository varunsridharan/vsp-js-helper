module.exports = {
	files: {
		'vsp-js-helper.js': {
			dist: '/',
			webpack: true,
			watch: [ './parts/*.js', './parts/*', './index.js' ],
			rename: 'vsp-js-helper.dist.js',
		}
	}
};