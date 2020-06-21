const path = require('path')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = {
    entry: {
        jquery: ['jquery'],
        index: path.resolve(__dirname,'../src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'../lib')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../src/index.html'),
            hash: true,
            minify:{
                removeAttributeQuotes: true
            }
        })
    ]
}
module.exports = (env) => {
    console.log(JSON.stringify(env))
    if(env.development){
        return merge(base,dev)
    }else{
        return merge(base,prod)
    }
}
