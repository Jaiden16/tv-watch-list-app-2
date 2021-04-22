require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var genreRouter = require('./routes/genres');
var showsRouter = require('./routes/shows');
var commentsRouter = require(`./routes/comments`)

var app = express();
app.listen(console.log(process.env.PORT));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/genres',genreRouter);
app.use('/shows', showsRouter);
app.use(`/comments`, commentsRouter);

module.exports = app;
