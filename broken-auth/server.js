const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')

const server = express();
server.use(express.static('public'))
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');
server.listen(4444)

// server.use(body_parser.json({ type: 'application/*+json' }))
server.use(body_parser.urlencoded({ extended: true }));

server.use(session({
    secret: 'g0odS3cr3t!',
    name: 'session.sid',
    resave: false,
    saveUninitialized: true,
}))
server.use(cookieParser())


var routes = require('./app/routes/router');
routes(server);

server.get('*', function (req, result) {
    result.sendStatus(404);
    result.end()
});