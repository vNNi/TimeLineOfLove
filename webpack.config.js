const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = env => {

    let plugins = [];
    plugins.push(
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        })
    );

    env.NODE_ENV == 'prod' ? plugins.push(new CopyPlugin([
        {
            from: 'icons', to: 'icons',
        },
        {
            from: 'manifest.json', to: 'manifest.json'
        },
        {
            from: 'favicon.ico', to: 'favicon.ico'
        }
])) : null

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname,'/dist'),
            filename: 'index_bundle.js',
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
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                limit: false,
                                name: "song/[hash].[ext]"
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|JPE?G|PNG)$/i,
                    use:    [
                        {
                            loader: "url-loader",
                            options: {
                                limit: false,
                                name: "img/[hash].[ext]"
                            },
                        }
                    ]
                }
            ]
        },
        plugins: plugins,
    }
}