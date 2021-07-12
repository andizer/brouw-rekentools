const path = require( "path" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

module.exports = {
	entry: {
		app: "./js/app.js",
	},
	output: {
		path: path.resolve( __dirname, "build" ),
		filename: "[name].js",
		chunkFilename:"[name].chunk.js",
		publicPath: "./",
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'eslint-loader' ],
      }
		]
	},
	devServer: {
		contentBase: path.resolve( __dirname, "build" ),
		port: 9000
	},
	plugins: [
		new CopyWebpackPlugin( {
			patterns: [
				{ from: "static" },
			]
		} ),
	],
};
