var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
app.listen(3000, function () {
    console.log('connected, 3000 port');
})
app.get(['/topic', '/topic/:id'], function (req, res) {
    fs.readdir('data', function (err, files) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if (id) { //id값이 있을 때
            fs.readFile('data/' + id, 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view', { title: id, topics: files, description: data });
            });
        }
        else { //id값이 없을때
            res.render('view', { topics: files, title:'Welcome', description:'Hello, Javascript for Server. ' });
        }
    })
});
app.get('/topic/new', function (req , res) {
    fs.readdir('data', function (err, files) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new' , {topics : files});
    })
})
app.post('/topic', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/' + title, description, function (err) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/' + title);
    });
})