/*This file creates a server that serves 
static resources - HTML pages found in the public folder
(Brown, p.15)
*/
const http = require('http');
const fs = require('fs');

//create a simple web server
http.createServer(function(request,response) {
    var path = request.url.toLowerCase();
    switch(path) {
        case '/':
        serveStaticPage(response, '/public/home.html');
        break;
        case '/about':
        serveStaticPage(response,'/public/about.html');
        break;
        default:
        serveStaticPage(response,'/public/404.html');
        break;
    }  
}).listen(3000);

//Node has to read the file before sending it to the browser
function serveStaticPage(response, path, statusCode = 200) {

    //read the file. To avoid errors it is best to use the global variable __dirname
    //that contains the name of the directory
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            response.writeHead(500, {'ContentType': 'text/plain'});
            response.end('Internal error');
        } else {
            response.writeHead(statusCode, {'ContentType': 'text/html'});
            response.end(data);
        }
    });
}