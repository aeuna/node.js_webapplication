var fs = require('fs');
//sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);
//async
console.log(2);
fs.readFile('data.txt',{encoding:'utf8'},function(err,data){
    console.log(3);
    console.log(data);
})
console.log(4);
//7번줄 실행되고 8번이 실행되는 와중에(background에 던졌다고 생각하기) 12번이 실행되고 8번에 readFile의 콜백함수가 실행되면서 redFile이 실행이 끝난다.