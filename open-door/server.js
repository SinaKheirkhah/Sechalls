var express = require('express');

var app = express();
var port = 80;

app.get('/', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html><center><h1>Welcome to Open-Door</h1><br><br>
        <script>
        if(window.location.hash) {
            var hash = window.location.hash.substring(1);
            if (hash){
                    document.location = hash;
                }
            }
            // hash found
        } else {
            // No hash found
        }
        </script>
        <a href='/level1/?url=http://open-door.local/hi/Yasho'>Level 1</a><br>
        <a href='/level2/?url=http://open-door.local/hi/Yasho'>Level 2</a><br>
        <a href='/level3/?url=http://open-door.local/hi/Yasho'>Level 3</a><br>
        <a href='/level4/?url=http://open-door.local/hi/Yasho'>Level 4</a><br>
        <a href='/level5/?url=http://open-door.local/hi/Yasho'>Level 5</a><br>
        <a href='/level6/?url=http://open-door.local/hi/Yasho'>Level 6</a><br>
        <a href='/level7/?url=http://open-door.local/hi/Yasho'>Level 7</a><br>
        <a href='/level8/?url=http://open-door.local/hi/Yasho'>Level 8</a><br>
        <a href='/level9/?url=http://open-door.local/hi/Yasho'>Level 9</a><br>
        `);

});

app.get('/hi/:name', (req, res) => {
    res.end('Hello ' + req.params.name);
})

app.get('/level1/', (req, res) => {
    url = req.query.url;

    if (url.match(/open-door.local/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level2/', (req, res) => {
    url = req.query.url;
    
    if (url.match(/^http(s)?\:\/\/(www\.)?open-door.local/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level3/', (req, res) => {
    url = req.query.url;

    if (url.indexOf('..') >= 0) {
    	res.end('Security failed');
    }

    if (url.match(/http(s)?\:\/\/(www\.)?open-door.local(\/.*)?/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});


app.get('/level4/', (req, res) => {
    url = req.query.url;

    if (url.indexOf('..') >= 0) {
    	res.end('Security failed');
    }
    
    if (url.match(/^http(s)?\:\/\/(www\.)?open-door.local\/(.*)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});


app.get('/level5/', (req, res) => {
    url = req.query.url;

    if (url.indexOf('level') >= 0) {
    	res.end('Security failed');
    }
    
    if (url.match(/^http(s)?\:\/\/(www\.)?.*open-door.local\/(.*)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level6/', (req, res) => {
    url = req.query.url;
    
    if (url.indexOf('level') >= 0) {
    	res.end('Security failed');
    }

    if (url.match(/^http(s)?\:\/\/(www\.)?(.*\.)?open-door.local\/(.*)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level7/', (req, res) => {
    url = req.query.url;
    
    if (url.match(/^http(s)?\:\/\/(www\.)?(.*\.)?open-door.local\/hi\/(.*)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level8/', (req, res) => {
    url = req.query.url;
    
    if (url.match(/^http(s)?\:\/\/(www\.)?(.*\.)?open-door.local\/hi\/([A-Za-z0-9\.\\\%\?\=\#]+)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.get('/level9/', (req, res) => {
    url = req.query.url;
    
    if (url.match(/^http(s)?\:\/\/(www\.)?(.*\.)?open-door.local\/hi\/([A-Za-z0-9\\\%\?\=\#]+)?$/i) !== null){
        res.redirect(url);
    }else{
        res.end('Security failed.');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));