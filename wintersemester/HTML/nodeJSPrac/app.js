const express = require('express');



//Routers---
const indexRouter = require('./routes/index');
const helloRouter = require('./routes/hello');
const { use } = require('./routes/index');

const app = express();

app.use('/' , indexRouter);
app.use('/hello' , helloRouter);

module.exports = app;