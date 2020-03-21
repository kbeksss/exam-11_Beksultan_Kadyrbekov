const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');

const config = require('../config');

const Product = require('../models/Product');

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});
const upload = multer({storage});

router.get('/', async (req, res) => {
    const products = await Product.find().populate('category');
    res.send(products);
});

module.exports = router;
