/*This file creates a server that serves 
static resources - HTML pages found in the public folder
(Brown, p.15)
*/
const http = require('http');
const fs = require('fs');
const qs = require('querystring');

//my module
const resources = require('./resources.js');

//create a simple web server
http.createServer(function(request,response) {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase
    var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    console.log(path);
   var querystring = request.url.split("?")[1];
    var resource = qs.parse(querystring);
    // console.log(resource);
    switch(path) {
        //HW2: let's get modular cases
        case '/get':
            // response.writeHead(200, {'ContentType':'{text/plain}'});
            // response.end(``);
            response.end(`Searching for "${resource.name}"<br>
            Result: ${JSON.stringify(resources.getResource(resource.name))}`);
        break;
        case '/delete':
            var deleteItem = resources.deleteResource(resource.name);
            response.end(`${deleteItem.message}<br>
            There are ${deleteItem.remaining} items remaining`);
            break;
            
        //HW1: Up and running cases
        case '':
        serveStaticPage(response, '/public/home.html');
        break;
        case '/about':
        serveStaticPage(response,'/public/about.html');
        break;
        default:
        serveStaticPage(response,'/public/404.html', 404);
        break;
    }  
}).listen(process.env.PORT || 3000);

//Node has to read the file before sending it to the browser
function serveStaticPage(response, path, statusCode = 200, contentType = 'text/html') {

    //read the file. To avoid errors it is best to use the global variable __dirname
    //that contains the name of the directory
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            response.writeHead(500, {'ContentType': 'text/plain'});
            response.end('Internal error');
        } else {
            response.writeHead(statusCode, {'ContentType': contentType});
            response.end(data);
        }
    });
}