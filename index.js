require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/testno';
console.log('MONGO_URI', MONGO_URI)
mongoose.connect(MONGO_URI).then((res) => console.log('Connect mongodb')).catch(err => console.log('err', err));
const products = mongoose.model('products', {
    name: String
});
const app = express();

app.get('/create', async(req, res) => {

    products.create({ name: req.query.name || 'default' })
    res.send('ok')
})

app.get('/', async(req, res) => {
    const list = await products.find();

    res.send({
        data: list,
        msg: 'success'
    })
})

app.listen(8888, () => console.log('server is running at port 8888'));