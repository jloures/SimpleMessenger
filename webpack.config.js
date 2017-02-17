const path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            exclude: /node_modules/,
            test: /\.ts$/,
            loader: 'ts-loader'
        },
        {
            test: /\.html$/,
            loader: 'raw-loader',
        }, 
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader"
        }]
    },
    devServer: {
        host: 'localhost',
        port: 8100,
    },
    resolve: {
        extensions: ['.ts','.js']
    },    
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};