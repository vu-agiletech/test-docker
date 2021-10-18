require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
console.log('MONGO_URI', MONGO_URI)
mongoose.connect(MONGO_URI).then((res) => console.log('Connect mongodb')).catch(err => console.log('err', err));

const app = express();

app.get('/', (req, res) => {
    res.send('hello world 1')
})

app.listen(8888, () => console.log('server is running at port 8888'));