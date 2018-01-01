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
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react'],
                    plugins: 'transform-object-rest-spread'
                },                
            }
        ]
    },
    plugins: [
    	new webpack.LoaderOptionsPlugin({
    		debug: true
    	})
    ]
};