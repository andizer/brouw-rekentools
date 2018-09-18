const path = require( "path" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

module.exports = {
	entry: {
		app: "./js/app.js",
	},
	output: {
		path: path.resolve( __dirname, "build" ),
		filename: "[name].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	},
	devServer: {
		contentBase: path.resolve( __dirname, "build" ),
		port: 9000
	},
	plugins: [
		new CopyWebpackPlugin( [ {
			from: "static",
		} ] ),
	],
};
