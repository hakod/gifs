var path = require('path')
var webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname,'./client/client.js')
    ],
    output: {
        path: path.resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['@babel/preset-react','@babel/preset-env']
                }
            },
            {
                test: /.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ] 
            }
        ]
    }
}