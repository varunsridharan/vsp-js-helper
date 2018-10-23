module.exports = {
	project_name: "VSP JS Helper",
	scss: false,
	js: {
		"vsp-js-helper.js": {
			dist: "./",
			webpack: true,
			watch: [ './parts/*.js', './parts/*' ],
			combine_files: false,
			concat: "vsp-js-helper.dist.js",
		},
	},
	default_config: {
		combine_files: { append: 'gulp-append', prepend: 'gulp-prepend', inline: 'gulp-inline', },
		minify_css: { args: {}, callback: false },
		concat: {},
		scss: { outputStyle: "expanded" },
		sourcemap: "../maps",
		autoprefixer: {
			browsers: [ "last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4" ],
			cascade: false
		},
		webpack: {
			mode: "production",
			output: { filename: '[name].js', },
			module: { rules: [ { test: /\.js$/, loader: 'babel-loader', options: { presets: [ 'es2015' ] } } ] },
		},
		parcel: false,
	},
};
