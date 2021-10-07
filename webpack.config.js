module.exports = {
    entry: ['react-hot-loader/patch', './src'],//'./index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            { 
                test: /\.less$/,
                use: [ 
                  'style-loader',
                  'css-loader', 
                  'less-loader',
                ],
            },
        ]
    },
    devServer: {
        port: 3000
    },
    resolve: {
    extensions: ['.js', '.jsx'],
  }
};