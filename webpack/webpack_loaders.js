const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

module.exports = env => {
    const { NODE_ENV } = env;
    const isDevelopment = NODE_ENV === 'development';

    return merge([
        {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        }
                    },
                    {
                        test: /\.module\.s(a|c)ss$/,
                        loader: [
                            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: {
                                        localIdentName: '[local]__[sha1:hash:hex:7]'
                                    },
                                    sourceMap: isDevelopment
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: isDevelopment,
                                }
                            }
                        ]
                    },
                    {
                        test: /\.s(a|c)ss$/,
                        exclude: /\.module.(s(a|c)ss)$/,
                        loader: [
                            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: isDevelopment,
                                }
                            }
                        ]
                    },
                    {
                        test: /\.module\.css$/,
                        exclude: '/node_modules/',
                        use: [
                            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: isDevelopment,
                                    importLoaders: 1,
                                    modules: {
                                        localIdentName: '[local]__[sha1:hash:hex:7]'
                                    }
                                }
                            },
                        ],
                    },
                    {
                        test: /\.css$/,
                        exclude: /\.module.css$/,
                        use: [
                            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: isDevelopment
                                }
                            },
                        ],
                    },
                    {
                        test: /\.(gif|png|jpe?g|ico|svg)$/i,       /*Лоадер картинок*/
                        loaders: isDevelopment ? [
                            {
                                loader: 'file-loader',
                                options: {
                                    // Exclude static fonts folder
                                    // exclude: path.resolve(__dirname, ""),
                                    name: 'images/[name].[ext]'
                                }
                            }
                        ] : [
                            {
                                loader: 'file-loader',
                                options: {
                                    // Exclude static fonts folder
                                    // exclude: path.resolve(__dirname, ""),
                                    name: 'images/[name].[ext]'
                                }
                            },
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    mozjpeg: {
                                        progressive: true,
                                        quality: 65
                                    },
                                    optipng: {
                                        optimizationLevel: 7,
                                    },
                                    pngquant: {
                                        quality: [0.65, 0.90],
                                        speed: 4
                                    },
                                    gifsicle: {
                                        interlaced: false,
                                    },
                                    webp: {
                                        quality: 75
                                    }
                                }
                            },
                        ]
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|svg)$/,     /*Лоадер-шрифтов*/
                        exclude: [
                            /node_modules/,
                            //Exclude static images folder
                            // path.resolve(__dirname, ""),
                        ],
                        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
                    },
                ],
            },

            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
                }),
            ],

            resolve: {
                alias: {
                    '~':  path.resolve(__dirname, '../src'),
                    '~c': path.resolve(__dirname, '../src/components'),
                    '~h': path.resolve(__dirname, '../src/helpers'),
                    '~p': path.resolve(__dirname, '../src/pages'),
                    '~s': path.resolve(__dirname, '../src/store'),
                }
            },
        }
    ])
};