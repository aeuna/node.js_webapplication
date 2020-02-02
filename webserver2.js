const http = require('http'); //const한번 값이 할당되면 값이 바뀌지 않음
 
const hostname = '127.0.0.1'; //이 컴퓨터의 ip라고 생각
const port = 1337;
 
var server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');    
});
server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);    
});