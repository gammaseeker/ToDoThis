var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo", {useNewUrlParser: true});
var url = "mongodb://localhost:27017/todo";
var app = express();

var Schema = mongoose.Schema;
var todoSchema = new mongoose.Schema({
    title: String    
});
var Todos = mongoose.model("Todos", todoSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

MongoClient.connect(url, {useNewUrlParser: true},function(err, db){
    if(err) throw err;
    console.log("Db created");
    db.close();
});

app.listen(8080, function(){
    console.log("Server is listening");
});
