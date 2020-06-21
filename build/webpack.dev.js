const path = require('path')
module.exports = {
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname,'../lib'),
        compress: true,
        port: 3000
    }
}
