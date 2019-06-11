var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session')
var bodyParser = require('body-parser');
var index = require('./routes/index');
var products = require('./routes/products');
var blog = require('./routes/blog');
var contact = require('./routes/contact');
var about = require('./routes/about');
var users = require('./routes/users');
var setUp = require("./init")
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
setUp.init((result)=>{
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
})
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressSession({resave:false, saveUninitialized: false, secret:"secret"}))

app.use("/assets", express.static(path.join(__dirname, '/views/assets')));


app.use(function(req, res, next){ console.log(req.session); next()})


//Acceptable routes
app.use('/', index);
app.use('/products', products)
app.use('/blog',blog)
app.use('/about', about);
app.use('/contact', contact)
app.use('/users', users)
// catch 404 and forward to error handler


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
