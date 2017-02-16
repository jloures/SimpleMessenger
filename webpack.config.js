const path = require('path');

module.exports = {
    entry: './app/main.js',
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
            test: /\.js$/,
            loader: 'babel'
        }]
    }
};