
/**
 * Created by Alex on 16/6/29.
 */
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: {
		vendor:['vue','vuex','vue-router'],
		home:path.join(__dirname,'./src/index.js')
	},
	// where to place the compiled bundle
	output: {
		path: './public/assets/',
		publicPath:'/sign/',
		filename: 'js/[name].mozi.bundle.js',
		chunkFilename:'js/[chunkhash:8].mozi.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity //Infinity
		}),
		new ExtractTextPlugin('style/[name].mozi.css', { allChunks: true }),
		new HtmlWebpackPlugin({
			title: "打卡",
			template: path.join(__dirname,'./index.html'),
			filename: '../views/index.html',
			inject: true,
			hash: true,
			files: {
				css: ['vux.css'],
				js: ['jweixin-1.0.0.js'],

				chunks: {
					head: {
						entry: "assets/head_bundle.js",
						css: [ "main.css" ]
					},
					main: {
						entry: "assets/main_bundle.js",
						css: []
					}
				}
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{test: /\.json$/,loader: 'json'},
			{
				test: /\.js$/,
				loaders:[ 'babel'],
				exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/
			},
			{ test: /\.(css|scss|less)$/, loader: ExtractTextPlugin.extract('style','css!sass!less') },
			{test: /\.(jpg|png)$/, loader: "url?limit=8192"}//不大于8K的图片打包成base64,
		]
	},
	babel:{
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	vue: {
		loaders: {
			js:'babel',
			css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader','less-loader'),
			exclude: /node_modules/
		}
	},
	watch: true
}