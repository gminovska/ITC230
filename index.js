const Resource = require('./models/resource');
const express = require('express');
const app = express();

// Un-comment the lines below to populate the database with resources
// const populateDatabase = require('./data');
// populateDatabase();

//mount the body-parser middleware function
app.use(require('body-parser').urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
//Require templating engine handlebars. The default file extension is changed to .html
const handlebars = require("express-handlebars")
    .create({
        defaultLayout: 'main',
        extname: '.html'
    });
app.engine("html", handlebars.engine);
app.set("view engine", ".html");

//=====================
//   ROUTES
//=====================
app.get('/', function (req, res) {
    var allResources = Resource.find({}, (err, data)=>{
        if(err) {
            console.log(err);
        } else {
            res.render('home',{resources: data});
        }
    });

});
app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/resource/:id', function(req, res){

    Resource.findById(req.params.id, (err, data)=>{
        if(err){
            console.log(err);
        } else {
            res.render('result', {resource: data});
        }
    });
});
app.post('/get', function (req, res) {
    const name = req.body.name;
    let result = resources.getResource(name);
    res.render('result', {
        name,
        result
    });
});
app.post('/delete', function (req, res) {
    const name = req.body.name;
    let result = resources.deleteResource(name);
    res.render('delete', {
        result
    });
});
app.get('/add', function (req, res) {
    res.render('add');
});
app.post('/add', function (req, res) {

    Resource.create(req.body.resource, (err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});
//default(catch all) route
app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is up and running");
});