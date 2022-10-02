const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
                './public/index.html'
        }),
    ],
};