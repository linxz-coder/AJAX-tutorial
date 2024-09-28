const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/index.html'); //绝对路径
}
)

app.get('/data', (request, response) => {
    response.send('用户数据');
}
)

app.listen(9000, () => {
    console.log('服务已启动，9000端口监听中...');
});