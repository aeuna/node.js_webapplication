var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.locals.pretty = true;
app.set('view engine','jade'); //view engine 사용할 템플릿 엔진
app.set('views','./views'); //views 템플릿이 있는 디렉토리
app.use(express.static('public')); //정적파일이 위치할 디렉토리
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/form',function(req,res){
    res.render('form');
});
app.get('/form_receiver',function(req,res){
    var title= req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});
app.post('/form_receiver', function(req,res){
    var title= req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});
app.get('/template', function(req,res){
    res.render('temp', {time: Date(), _title:'Jade'}); //temp파일을 웹페이지로 렌더링해서 전송한다, jade안에서 사용된 time값 전달하기(객체를 정의해서 property 값으로 전달함)
});
app.get('/topic/:id', function(req,res){
    var topics =[
        'javascript is ...',
        'Node js is ...',
        'express is ...'
    ];
    var output = `
        <a href="topic?id=0">Javascript</a><br>
        <a href="topic?id=1">Nodejs</a><br>
        <a href="topic?id=2">Express</a><br>
        ${topics[req.params.id]}
    `
    res.send(output);
});
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id +',' + req.params.mode);
})
app.get('/', function (req, res) { //routing (길을 찾는다.)  요청이 들어왔을때 길을 찾을수 있도록 연결해주는게 route
    res.send('Hello welcome');
});
app.get('/buy', function (req, res) {
    res.send('Hello buy, <img src="/buy.png">');
});
app.get('/login', function (req, res) {
    res.send('<h1>Hello login page</h1>');
});
app.get('/dynamic', function (req, res) {
    var time = Date();
    var lis = '';
    for (var i = 1; i < 4; i++) {
        lis += '<li>coding</li>';
    }
    var output = `
   <!DOCTYPE html>
    <html>
    <head>  
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
});
app.listen(3000, function () {
    console.log('connected 3000 port');
});