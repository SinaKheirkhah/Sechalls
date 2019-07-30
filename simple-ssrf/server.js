const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const http = require('http');
const serveIndex = require('serve-index');
const serveStatic = require('serve-static');

const server = express();
server.use(body_parser.urlencoded({
    extended: true
}));

server.listen(5050)

server.get('/', function (request, result) {
    result.send('<html><a href="/proxy/internal_website/public_notel">Internal File</a></html>')
    result.end()
})

server.get('/proxy/internal_website/:page?', function (request, result) {

    page = request.params.page

    if(page === undefined){
        page = ''
    }

    http.get('http://localhost:5051/www/public/' + page, function (res) {

        console.log('http://localhost:5051/www/' + page)

        res.setEncoding('utf8');
        if (res.statusCode == 200) {
            res.on('data', function (chunk) {
                result.send(chunk)
                result.end()
            });
        } else if (res.statusCode == 404) {
            result.send('Resource not found.')
            result.end()
        } else {
            result.end()
        }
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });

})

server.get('*', function (req, result) {
    result.sendStatus(404);
    result.end()
});


const internal_server = express();
internal_server.use(body_parser.urlencoded({
    extended: true
}));

internal_server.listen(5051, 'localhost')
internal_server.use('/www', express.static('www/'), serveIndex(__dirname + '/www', {'icons': true}));


internal_server.get('/', function (request, result) {
    result.send('index')
    result.end()
});
