const path = require('path')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = (env) => {
    const isDev = env.development
    const base = {
        entry: {
            jquery: ['jquery'],
            index: path.resolve(__dirname,'../src/index.js')
        },
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname,'../lib')
        },
        module:{
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        !isDev && MiniCssExtractPlugin.loader,
                        isDev && 'style-loader',
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1 // 引入的文件需要调用sass-loader来处理
                            }
                        },
                        "sass-loader",
                       ].filter(Boolean)
                },
                {
                    test: /.\scss$/,
                    use: [
                        !isDev && MiniCssExtractPlugin.loader,
                        isDev && 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ].filter(Boolean)
                }
            ]
        },
        plugins:[
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname,'../src/index.html'),
                hash: true,
                minify:{
                    removeAttributeQuotes: true
                }
            })
        ].filter(Boolean)
    }
    if(isDev){
        return merge(base,dev)
    }else{
        return merge(base,prod)
    }
}
