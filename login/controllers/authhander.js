var bodyParser = require('body-parser');
var mysql = require('mysql');
var data =[{item: 'get milk'},{item: 'walk dog'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

module.exports = function(app)
{
    var bodyParser = require('body-parser');

    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE if not exists student (name VARCHAR(255), mail VARCHAR(255),pass VARCHAR(255))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });

     app.post('/authhander', urlencodedParser, function (req, res)
        {
        var sql = 'SELECT * FROM student where name= '+ mysql.escape(req.body.name) + 'AND pass=' + mysql.escape(req.body.pass)  ;

        con.query(sql, function (err, result) {
        console.log(result);
        if(result.length >0)
        {

               res.render('home');
        }
        else
        {
             res.render('index');

            }
        });

        });
}