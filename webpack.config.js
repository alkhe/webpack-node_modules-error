var path = require('path'),
	w = require('webpack');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'client/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.js/,
			exclude: [/node_modules\//],
			loader: 'babel-loader'
		}]/*,
		noParse: [/node_modules\//] // Error when uncommented*/
	}
};
