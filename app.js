var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var Card = require('./models/card-model')

mongoose.connect('mongodb://localhost/test');

var app = express();

// // var boardSchema = mongoose.Schema({
// //   company: {type: String, required: true},
// //   projectName: {type: String, required: true},
// //   description: {type: String, required: true},
// //   githubRepo: {type: String, required: true}
// // });
// var Board = mongoose.model('Board', boardSchema);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', index);
// app.use('/users', users);
router.post('/',function(req,res,next){
   var firstCard = new Card ({ name: req.body.name, description: req.body.description, assignee: req.body.assignee});
    console.log(firstCard); // 'Silence'

    firstCard.save(function (err, card) {
        if (err){
          res.send('fail request')
          return console.error(err);
        } 
        console.log('Saved');
        res.send(card)
        });

})

router.get('/', function(req, res, next) {
  Card.find()
    .then(function(result){
      console.log('chido')
      console.log(result)
      return 'ok'
    })
    .then(function(message){
      console.log(message)

    })

    .catch(function(err){
      console.log(err)

    })
  res.render('index', { title: 'Express', murlock: 'hola', pageTitle: 'Maya Scrum Assistant' });

});


app.use(router)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
