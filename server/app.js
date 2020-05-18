var createError = require('http-errors');
var express = require('express');
var path = require ('path');
var cookieParser = require ('cookie-parser');
var logger = require ('morgan');

var app =express ();
var indexRouter = require ('./routes');


app.use(logger(dev));
app.use(express.json());
app.use(express.urlencoded({etended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('./'.indexRouter)
module.exports = app;

/* storing port in express for peaceful coextistenee of server anc client */

var port = normalizePort(porcess.enc.port || '5000');
app.set('port', port);