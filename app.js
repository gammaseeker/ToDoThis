var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/todo";
var app = express();

mongoose.connect("mongodb://localhost:27017/todo", {useNewUrlParser: true});
var Schema = mongoose.Schema;
var todoSchema = new mongoose.Schema({
    title: String,
    strike: Boolean,
    isSmart: Boolean,
    specific: String,
    measurable: String,
    achievable: String,
    realistic: String,
    timeline: String
});
var Todos = mongoose.model("Todos", todoSchema);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    //day, month date, year
    var currentDate ="";
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();
    var day = d.getDay();
    currentDate += days[day] + ", " + months[month] + " " + date + ", " + year;

    Todos.find(function(err, todos, count){
        res.render("index", {
            todos: todos,
            currentDate: currentDate
        });
    });
});

app.post("/submit", function(req, res){
    Todos.create({
        title: req.body.todo,
        strike: false,
        isSmart: false
    }, function(err){
        if(err){
            console.log("error");
            } else{
                console.log("Saved");
                res.redirect("/");
            }
        }
    );
});

/*app.put("/update/:id", function(req, res){
    var id = req.params.id;
    Todos.findOne({_id:id}, function(err, foundObject){
        if(err){
            console.log(err);
            res.status(500).send();
        }else{
            if(!foundObject){
                res.status(404).send();
            }else{
                foundObject.strike = !foundObject.strike;
                foundObject.save(function(err, updatedObject){
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    }else{
                        res.send(updatedObject);    
                        res.redirect("/");
                    }
                });
            }
        }
    });
});*/

app.get("/destroy/:id", function(req, res){
    Todos.findById(req.params.id, function(err, todo){
        todo.remove(function(err, todo){
            res.redirect('/');
        });
    });
});

app.get("/stretch", function(req, res){
    res.render("stretch");
});

app.post("/stretch-post", function(req, res){
    Todos.create({
        title: req.body.stretch,
        strike: false,
        isSmart: true,
        specific: req.body.specific,
        measurable: req.body.measurable,
        achievable: req.body.achievable,
        realistic: req.body.realistic,
        timeline: req.body.timeline
    }, function(err){
        if(err){
            console.log("error");
            } else{
                console.log("Saved stretch goal");
                res.redirect("/");
            }
        }
    );
});

MongoClient.connect(url, {useNewUrlParser: true},function(err, db){
    if(err) throw err;
    console.log("Db created");
    db.close();
});

app.listen(8080, function(){
    console.log("Server is listening");
});
