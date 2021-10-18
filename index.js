const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test-docker').then((res) => console.log('Connect mongodb'));

const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(8888, ()=> console.log('server is running at port 8888'));