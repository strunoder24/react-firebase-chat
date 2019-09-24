const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack_loaders.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = env => {
    return merge(
        [
            {
                mode: 'development',
                entry: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],
                output: {
                    path: path.resolve(__dirname, '../dist/'),
                    publicPath: 'dist/',
                    filename: 'build.js'
                },
                devServer: {
                    historyApiFallback: true,
                },
                performance: {
                    hints: false
                },
                devtool: 'inline-source-map',

                plugins: [
                    // new BundleAnalyzerPlugin()
                ]
            }
        ]
    )
};

module.exports = env => {
    return merge(baseConfig(env), devConfig(env))
};