const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack_loaders.js');

const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const prodConfig = env => {
    return merge(
        [
            {
                mode: 'production',
                entry: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],
                output: {
                    path: path.resolve(__dirname, '../static'),
                    publicPath: '',
                    filename: '[name].bundle.js',
                    chunkFilename: '[name].bundle.js',
                },

                performance: {
                    hints: false
                },

                optimization: {
                    minimizer: [new UglifyJsPlugin()],

                    //Код ниже разделяет все либы на отдельные чанки
                    //https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
                    runtimeChunk: 'single',
                    splitChunks: {
                        chunks: 'all',
                        maxInitialRequests: Infinity,
                        minSize: 0,
                        cacheGroups: {
                            vendor: {
                                test: /[\\/]node_modules[\\/]/,
                                name(module) {
                                    // get the name. E.g. node_modules/packageName/not/this/part.js
                                    // or node_modules/packageName
                                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                                    // npm package names are URL-safe, but some servers don't like @ symbols
                                    return `npm.${packageName.replace('@', '')}`;
                                },
                            },
                        },
                    },
                },

                plugins: [
                    new webpack.NoEmitOnErrorsPlugin(),
                    new MiniCssExtractPlugin({
                        filename: 'css/styles.css',
                    }),
                    new OptimizeCssAssetsPlugin(),
                    new CompressionPlugin({
                        test: /\.js$/,
                        algorithm: 'gzip',
                    }),

                    new HtmlWebpackPlugin({
                        hash: true,
                        template: './static_template.html',
                        filename: 'index.html',
                    }),

                    // Simple copy files by paths
                    // new CopyWebpackPlugin([
                    //     {from: path.resolve(__dirname, "../../formatter/js/formatter.js"), to: path.resolve(__dirname, "../../static/cp_vue/js")},
                    //     {from: path.resolve(__dirname, "../../formatter/css/demo.css"), to: path.resolve(__dirname, "../../static/cp_vue/css/formatter")},
                    //     {from: path.resolve(__dirname, "../../v-settings/src/css/formatter_content.css"), to: path.resolve(__dirname, "../../static/cp_vue/css/formatter")},
                    //     {from: path.resolve(__dirname, "../../formatter/images/icons/"), to: path.resolve(__dirname, "../../static/cp_vue/css/images/icons")},
                    // ])

                    //uncomment to enable bundle analyzer graphic
                    // new BundleAnalyzerPlugin()
                ]
            }
        ]
    )
};

module.exports = env => {
    return merge(baseConfig(env), prodConfig(env))
};