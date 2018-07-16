const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	context: __dirname,
	devtool: 'cheap-eval-source-map',
	entry: {
		'app.js': './src/components/Index.jsx'
	},
	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							url: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'img/'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ title: 'Игра "Memory"', template: './src/index.html' }),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/static',
				to: path.resolve(__dirname, 'dist')
			}
		]),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'app',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessor: require('cssnano')
			})
		]
	},
	devServer: {
		contentBase: './dist/',
		hot: true,
		port: 3000
	}
};
