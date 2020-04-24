var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
require("dotenv").config

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/students', studentsRouter);

mongoose.connect(
    "mongodb://localhost/jobs",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      console.log(err ? err : "db connected");
    }
  );

module.exports = app;
