const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: './app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },

    resolve: {
        alias: {
            
        }
    },

    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
		historyApiFallback: {
            disableDotRule: true,
            index: 'app.html',
			rewrites: [
                { from: /./, to: 'app.html' }
			]
		},
		noInfo: false
    },
    
    devtool: "source-map"
}