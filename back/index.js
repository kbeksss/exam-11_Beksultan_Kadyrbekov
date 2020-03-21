const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    app.listen(port, () => {
        console.log('Server is running on port: ', port);
    })
};

run().catch(e => console.error(e));
