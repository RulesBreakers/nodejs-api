var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const session = require('express-session');
const { passport } = require('./security/provider');

const appUrl = "/backend"

var indexRouter = require('./controller/index');
var healthRouter = require('./controller/healthController');
var userRouter = require('./controller/userController');
var securityRouter = require('./controller/securityController');
var dreamRouter = require('./controller/dreamController');
const { sequelize } = require('./repository/conf/SequelizeConf');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


var app = express();

app.set('routes', path.join(__dirname, 'controller'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secretpassphrase',
  store: new SequelizeStore({
    db: sequelize,
    tableName: 'Sessions'
  }),
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(`${appUrl}/`, indexRouter);
app.use(`${appUrl}/ping/`, healthRouter)
app.use(`${appUrl}/users/`, userRouter)
app.use(`${appUrl}/login/`, securityRouter);
app.use(`${appUrl}/dreams/`, dreamRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;