const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

const PORT = process.env.SRV_PORT || 3000;
const mongoUrl = `mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017`;


//TODO: @Mohamed Bedair, add your routers here
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const volunteersRouter = require('./routes/volunteers');
const organisersRouter = require('./routes/organisers');
const tasksRouter = require('./routes/tasks');
const reportsRouter = require('./routes/reports');
const objectsRouter = require('./routes/objects');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//TODO: @Mohamed Bedair, add all routes here
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/volunteers', volunteersRouter);
app.use('/organisers', organisersRouter);
app.use('/tasks', tasksRouter);
app.use('/reports', reportsRouter);
app.use('/objects', objectsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  console.log(mongoUrl);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
