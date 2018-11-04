var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function (req, res) {
    res.render('contact');

});
app.get('/profile/:name', function (req, res) {
    res.render('profile',{person: req.params.name})
});
app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.listen(3000);

