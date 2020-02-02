const http = require('http'); //const한번 값이 할당되면 값이 바뀌지 않음
 
const hostname = '127.0.0.1'; //이 컴퓨터의 ip라고 생각
const port = 1337;
 
http.createServer((req, res) => { //서버를 만든다
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => { //서버가 리스닝을 하게 만든다
 console.log(`Server running at http://${hostname}:${port}/`);
});
//웹서버가 되는 코드 