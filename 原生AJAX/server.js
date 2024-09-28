// 引入express
const express = require('express');

// 创建express实例
const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello linxz!');
})

// 可以接收任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，接收用户自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello AJAX POST');
})

// JSON响应
app.all('/json-server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头，接收用户自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
})

// 针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello IE-4!');
})

// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应');
    }, 3000);
})

// jsonp服务
app.get('/jsonp-server', (request, response) => {
    // response.send('console.log("Hello JSONP")');
    const data = {
        name: 'JSONP'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

// 检测用户是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
})

// cors服务
app.get('/cors-server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); //后面的参数指允许的url，*是通配符，表示所有的url都可以访问
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // 设置响头，允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应头，允许请求方法
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.send('Hello CORS');
})

// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听中');
    }
)