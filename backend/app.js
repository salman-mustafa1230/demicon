const createError = require('http-errors');
const express = require('express');
require("dotenv").config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./common/db')();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();



app.use(helmet());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// can use cloudwatch event to run the end point as cron job.
const cron = require('node-cron');
const randomUserService = require('./service/externalApi/random.user')
// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
//   // randomUserService.callApi();
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log("middleware: ", err);
  if (err.status) {
    let body = {
      message: err.message || "Unknown Error",
    };

    if (err.errorCode) {
      body.errorCode = err.errorCode;
    }
    body.error = true;


    // res.status(err.status).json(body);
  } else {
    if ( err.name == 'TokenExpiredError' ) {
      res.status(401).json({
        message: 'Token Expired',
        errorCode : 401
      });
    } 
    else {
      res.status(500).json({
        message: 'There is some error, please try again later.',
        errorCode : err.unknown
      });
    }
  }
});

module.exports = app;
