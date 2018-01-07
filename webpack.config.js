var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main/resources/static/js/app.jsx',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './target/classes/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react'],
                    plugins: 'transform-object-rest-spread'
                },                
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=/img/[name].[ext]',
                    }
                ]
            },
            {
            	test: /\.css$/,
            	use: [
            		{ loader: 'style-loader' },
            		{ loader: 'css-loader' }
            	]
            }
        ]
    },
    plugins: [
    	new webpack.LoaderOptionsPlugin({
    		debug: true
    	})
    ]
};