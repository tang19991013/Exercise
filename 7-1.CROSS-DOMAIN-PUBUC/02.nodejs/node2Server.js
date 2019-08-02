//使用nodejs中间件静态托管
let express=require('express');
let app=express();//执行express 拿到epxress返回的结果
//设置白名单
let whitList=['http://localhost:3000']
app.use(function(req,res,next){
    //判断 1取出请求源头
    let origin=req.headers.origin;
    if(whitList.includes(origin)){//whitList.includes ES6语法是否包含origin origin
        //设置那个源可以访问我     origin写个 "*" 是不能和携带cook凭证一起使用的
        res.setHeader('Access-Control-Allow-Origin',origin)
        //允许携带那个头访问我
        //xhr.setRequestHeader('uname',第二参数传值) 设置允许接受参数方法
        res.setHeader('Access-Control-Allow-Headers','uname,aaa,bbb,ccc')//第二参数设置,允许一次设置传入多个
        //允许那个方法访问我
        res.setHeader('Access-Control-Allow-Methods','PUT')//设置允许put方法
        //设置允许携带cook凭证
        res.setHeader('Access-Control-Allow-Credentials','true')
        //允许返回的头
        //告诉浏览器这个头很安全 客户端才能·拿到
        res.setHeader('Access-Control-Expose-Headers','name')//多个依然name,aaa,bbb
        //预检的存活时间
        //隔6秒之后才会再发送
        res.setHeader('Access-Control-Max-Age',6);
        //解决put请求每次发送俩个请求 第一个去预警 
        if(req.method==='OPTIONS'){
            res.end();//OPTIONS请求不做任何处理 OPTIONS时试探性单位
        }
    }
    next();
})
app.get('/getData',(req,res)=>{
    console.log(req.headers)//打印请求头设置 查看请求源头配置信息
    //如果未配置头 origin 服务器返回的结果会被浏览器屏蔽掉
    res.setHeader('name','cc')
    res.end('我不爱你');
})
app.listen(4000);//3000端口访问4000端口号就是跨域了