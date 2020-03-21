const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const nanoid = require('nanoid');
const ObjectId = mongoose.Types.ObjectId;
const config = require('../config');

const auth = require('../middleware/auth');
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
    try {
        const products = await Product.find().populate('category').populate('owner',[`_id` , `username`, `name`, `phone`]);
        res.send(products);
    } catch (e) {
        return res.status(400).send(e);
    }
});
router.get('/:categoryId', async (req, res) => {
    console.log(req.params.categoryId);
    const products = await Product.find({category: ObjectId(req.params.categoryId)});
    return res.send(products);
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    const productData = req.body;

    if(req.file){
        productData.image = req.file.filename;
    }
    productData.owner = req.user._id;
    const product = new Product(productData);

    try {
        await product.save();

        return res.send({id: product._id});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
