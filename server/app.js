var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose =require('mongoose');

var groupRoutes = require('./routes/groupRoute');
var notesRoutes = require('./routes/notesRoute');

const dbUrl="mongodb+srv://sonali_admin:omd_test_sonali@cluster0.cmcydzi.mongodb.net/notes_dev?retryWrites=true&w=majority&appName=Cluster0";

var app = express();

//mogodb connection
mongoose.set("strictQuery", false);
console.log("\nConnecting to the Database...\n");
mongoose.connect(dbUrl).then(()=>{
  console.log("Connected to the Database\n");
})
.catch((e)=>{
  console.log(e);
})

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/groups', groupRoutes);
app.use('/api/notes', notesRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
