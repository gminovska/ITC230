const resources = require('./resources.js');
//import Express dependency
const express = require('express');
const app = express();

/*From Express documentation: req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.*/

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

//Routing the Express (high)way
app.get('/', function (req, res) {
    var allResources = resources.listResources;
    res.render('home',{resources: allResources});
    // res.sendFile(`${__dirname}/public/home.html`);
});
app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/get', function(req, res){
    const name = req.query.name;
    let result = resources.getResource(name);
    res.render('result', {
        name,
        result
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
    resources.addResource(req.body);
    var allResources = resources.listResources();
    res.render('list', {
        allResources
    });
    console.log(resources.listResources());

});
//default(catch all) route
app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is up and running");
});