const path = require('path');

module.exports = {
	entry: ['./Scripts/es6/main.js'],
	output: {
		path: path.resolve(__dirname, './Scripts/build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}