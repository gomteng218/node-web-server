var express = require('express');
var hbs = require('hbs');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    var now = new Date().toString();
    
    console.log(now + req.method + req.url);
    next();
});

hbs.registerHelper('getCurrentYear', function() {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizeAll', function(text) {
    return text.toUpperCase();
});

app.get('/', function(req, res) {
   res.render('home.hbs', {
       pageTitle: 'Home Page',
       currentYear: new Date().getFullYear()
   });
});

app.get('/about', function(req, res){
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});


app.listen(port, function() {
    console.log('Server is up running on port ' + port);
});