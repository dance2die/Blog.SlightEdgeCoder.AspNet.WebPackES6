const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['./Scripts/es6/main.js'],
	output: {
		path: path.resolve(__dirname, './Scripts/build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
	//, plugins: [
	//	new webpack.ProvidePlugin({
	//		Promise: 'es6-promise-promise'
	//	})
	//]
}