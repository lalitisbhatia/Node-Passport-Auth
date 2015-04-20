var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var session = require('express-session');
var flash = require('express-flash');
var morgan = require('morgan');


var app = express();

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//=================== CONFIGURATION ==============================================

// =======  view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ======= database
var configDB = require('./config/config.js');
mongoose.connect(configDB.db); // connect to our database

// ======= Passport Authentication
require('./config/passport')(passport,app); // pass passport for configuration

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

// ======= app middleware
app.use(morgan('dev'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //read information from htm forms
app.use(cookieParser()); //read cookies - needed for auth
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(session(
    {
        cookie: {
            maxAge: 36000000,
            httpOnly: false // <- set httpOnly to false
        },
        secret:'thisismysecretmessage',
        saveUninitialized: true,
        resave: true}))
;
app.use(bodyParser.json());
// ======= passport config
app.use(passport.initialize());
app.use(passport.session()); //persistent login sesisons
app.use(flash()); //use connect-flash for flash messages stored in session


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-  Override, Content-Type, Accept');
    next();
});

//routes
require('./app/routes.js')(app,passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// ================= ERROR HANDLERS ================

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log(err);
        res.send(err.message);
        //res.render('error', {
        //    message: err.message,
        //    error: err
        //});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.send(err);
    //res.render('error', {
    //    message: err.message,
    //    error: {}
    //});
});


module.exports = app;
