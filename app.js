const http = require('http');
const router=require("./router.js");
http.createServer((req, res) => 
{
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // Route System
    router(req.url,res);
    // ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));