let path = require('path');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: "dist/" // Путь для ресурсов браузера в режиме разработки
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-react-jsx',
                            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                            ['@babel/plugin-proposal-class-properties', { 'loose': true }]
                        ]
                    }
                }
            },
            {
                test: /\.module\.sass$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            {
                test: /^((?!\.module).)*sass$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            {
                test: /\.module\.css$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            }
                        }
                    },
                ],
            },
            {
                test: /^((?!\.module).)*css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ],
            },
        ]
    },

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~s': path.resolve(__dirname, 'src/store'),
            '~p': path.resolve(__dirname, 'src/pages'),
            '~c': path.resolve(__dirname, 'src/components'),
            '~h': path.resolve(__dirname, 'src/helpers'),
        }
    },

    devServer: {
        historyApiFallback: true
    },
};

module.exports = conf;