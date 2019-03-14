const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

////////////////////////////////////////////
// look into extracting css to built file
////////////////////////////////////////////

module.exports = {
    entry: './src/main.js',
    output: {
        path: distPath,
        // publicPath: distPath,
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.vue$/,
                include: srcPath,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                include: srcPath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                { "modules": false }
                            ],
                        ],
                        plugins: [
                            "@babel/plugin-syntax-import-meta",
                            ["@babel/plugin-proposal-class-properties", { "loose": false }],
                        ],
                        comments: true,
                    }
                }
            },
            // {
            //     test: /\.[s]?css$/,
            //     include: srcPath,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader',
            //     ],
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // updates index.phtml w/ hashed files
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'),
        }),
        // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
        //     analyzerMode: 'static',
        //     // generateStatsFile: true, // [adam]: upload stats.json to Webpack Visualizer
        //     // Wepback Visualizer (https://chrisbateman.github.io/webpack-visualizer/); tried plugin; didn't work
        // }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {
            name: 'manifest', // separate so if it changes, our other files aren't affected
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]);
}
