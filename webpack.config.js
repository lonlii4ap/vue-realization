const path = require('path')
// module.exports = {
//     mode: "development",
//     entry: path.resolve(__dirname,'./src/index.js'),
//     output: {
//         filename: 'lib.js',
//         path: path.resolve(__dirname,'lib')
//     }
// }
module.exports = (env)=>{
    console.log(`env:${env}`)
    return env
}
