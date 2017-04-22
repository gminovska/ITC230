const resources = require('./resources.js');
//import Express dependency
const express = require('express');
const app = express();

/*From Express documentation: req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.*/

//mount the body-parser middleware function
app.use(require('body-parser').urlencoded({
    extended: true
}));

//Require templating engine handlebars. The default file extension is changed to .html
const handlebars = require("express-handlebars");
app.engine(".html", handlebars({
    extname: '.html'
}));
app.set("view engine", ".html");

//Routing the Express (high)way
app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/public/home.html`);
});
app.get('/about', function (req, res) {
    res.sendFile(`${__dirname}/public/about.html`);
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
//default(catch all) route
app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(process.env.PORT || 3000);

// /*This file creates a server that serves 
// static resources - HTML pages found in the public folder
// (Brown, p.15)
// */
// const http = require('http');
// const fs = require('fs');
// const qs = require('querystring');

// //my module
// const resources = require('./resources.js');

// //create a simple web server
// http.createServer(function(request,response) {
//     // normalize url by removing querystring, optional
//     // trailing slash, and making it lowercase
//     var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
//     console.log(path);
//    var querystring = request.url.split("?")[1];
//     var resource = qs.parse(querystring);
//     console.log(resource);
//     switch(path) {
//         //HW2: let's get modular cases
//         case '/get':
//             response.end(`<h3>Searching for "${resource.name}"</h3>
//             <p>Result: ${JSON.stringify(resources.getResource(resource.name))}</p>`);
//         break;
//         case '/delete':
//             var deleteItem = resources.deleteResource(resource.name);
//             response.end(`<h3>${deleteItem.message}</h3>
//             <p>There are ${deleteItem.remaining} items remaining</p>`);
//             break;
//         case '/add':
//             var myResources = resources.addResource(resource);
//             response.end(`<h3>Resource added.</h3><p>Current collection:${JSON.stringify(myResources)}</p>`);
//         break;
//         case '/list':
//         var allResources = resources.listResources();
//         response.end(JSON.stringify(resources.listResources()));
//         break;
//         //HW1: Up and running cases
//         case '':
//         serveStaticPage(response, '/public/home.html');
//         break;
//         case '/about':
//         serveStaticPage(response,'/public/about.html');
//         break;
//         default:
//         serveStaticPage(response,'/public/404.html', 404);
//         break;
//     }  
// }).listen(process.env.PORT || 3000);

// //Node has to read the file before sending it to the browser
// function serveStaticPage(response, path, statusCode = 200, contentType = 'text/html') {

//     //read the file. To avoid errors it is best to use the global variable __dirname
//     //that contains the name of the directory
//     fs.readFile(__dirname + path, function(err, data) {
//         if(err) {
//             response.writeHead(500, {'ContentType': 'text/plain'});
//             response.end('Internal error');
//         } else {
//             response.writeHead(statusCode, {'ContentType': contentType});
//             response.end(data);
//         }
//     });
// }