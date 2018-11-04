var express = require('express');
var todoController = require('./controllers/todocontrollers');
var app = express();
//var app= express();
app.set('view engine','ejs');
app.use(express.static('./'));
todoController(app);
app.listen(4000);
