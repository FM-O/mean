const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const index = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect('mongodb+srv://dymaUser:pSgJ%60QvW%22%2B%23b2U%3F6@cluster0-thjix.gcp.mongodb.net/angularDyma?retryWrites=true&w=majority', {
  keepAlive: true,
  useNewUrlParser: true 
}, (err) => {
 if (err) {
   console.log(err)
 } else {
   console.log('connect db ok')
 }
});

app.use(index);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
