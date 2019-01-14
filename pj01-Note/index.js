var express = require("express");
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");
app.listen(4200);

var arrayDefault = ["Embedded","iOS","Android"];
var array = arrayDefault;

app.get("/", function(req, res){
  res.render("home");
});

app.post('/getNotes',function(req, res){
  res.send(arrayDefault);
});

app.post('/add', parser, function(req, res){
  var newNote=req.body.note;
  array.push(newNote);
  res.send(array);
});

app.post('/delete', parser, function(req, res){
  var id = req.body.idDelete;
  array.splice(id, 1);
  res.send(array);
});

app.post('/update', parser, function(req, res){
  var id = req.body.idEdit;
  array[id] = req.body.content;
  res.send(array);
});

app.post('/reset', function(req, res){
  res.send(arrayDefault);
});
