const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.mp3$/,
                include: path.join(__dirname,'/src/Assets'),
                use: ["file-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|JPE?G|PNG)$/i,
                use:    [
                    {
                        loader: "url-loader",
                        options: {
                            limit: false,
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        })
    ]
}