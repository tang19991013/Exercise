// 上传github时会把nodeModules删除 下载后使用服务器，请自行安装模块
let express=require('express');
let app=express();//执行express 拿到epxress返回的结果
app.get('/say',(req,res)=>{
    let cb=req.query.cb;//回调函数
    let {wb,csor}=req.query;
    console.log(wb,csor,'-----',cb)
    res.end(`${cb}('我不爱你')`);
})
app.listen(3000);