const url = require('url');
const http = require('http');
const https = require('https'); // cnode是https协议

const server = http.createServer((req, res) => {
    https.get('https://cnodejs.org', (resp) => {
        let data = "";
        resp.on('data', chunk => {
            data += chunk;
        });
        resp.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(data);
        });
    })      
}).listen(3000, '127.0.0.1');

console.log('监听 127.0.0.1:3000，服务已启动');