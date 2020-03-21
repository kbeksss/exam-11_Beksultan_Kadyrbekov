const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const products = require('./app/products');
const users = require('./app/users');
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    app.use('/products', products);
    app.use('/users', users);
    app.listen(port, () => {
        console.log('Server is running on port: ', port);
    })
};

run().catch(e => console.error(e));
