const path = require('path');
module.exports = {
    // 入口
    entry:'./src/app.js',
    // 出口
    output:{
        path: path.join(__dirname,'dist'),
        filename:'[name].js'
    }
}