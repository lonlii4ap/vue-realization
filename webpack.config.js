/*
 * @Author       : lilognfei3@xdf.cn
 * @Date         : 2020-06-04 08:49:44
 * @LastEditors  : lilognfei3@xdf.cn
 * @LastEditTime : 2020-06-04 08:57:06
 * @Description  : 描述信息
 */ 
const path = require('path')
module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}