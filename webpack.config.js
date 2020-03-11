const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'build')
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		index: 'index.html',
		port: 3000
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hello World'
		})
	]
}
