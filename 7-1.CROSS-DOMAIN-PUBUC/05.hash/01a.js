//使用nodejs中间件静态托管
let express=require('express');
let app=express();//执行express 拿到epxress返回的结果
app.use(express.static(__dirname));//以当前文件目录为静态托管
app.listen(3000);