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
    var data =[{item: 'get milk'},{item: 'walk dog'}];
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

     app.post('/authhander', urlencodedParser, function (req, res)
        {
        var sql = 'SELECT * FROM customers WHERE name = ' + mysql.escape(req.body.name);
        con.query(sql, function (err, result) {
        if(result.length >0)
        {

                console.log("yes");
        }
        else
        {
            console.log("No");
            }
        });

        });
}