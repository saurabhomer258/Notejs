var express = require('express');
var app=express();
var bodyParser = require('body-parser');
var authhander = require('./controllers/authhander');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.use(express.static('./'));


function Cdatabase() {




    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE login", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });

}


function Ctable() {


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE customers (name VARCHAR(255), pass VARCHAR(255),email VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });


}
function create()
{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO customers VALUES ('saurabh', 'saurabh','saurabhomer258@gmail.com')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

app.get('/',function(req,res)
{
    res.render('index');



});
 authhander(app);

app.listen(4400);