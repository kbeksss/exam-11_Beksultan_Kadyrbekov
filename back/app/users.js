const express = require('express');

const bcrypt = require('bcrypt');

const Users = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const user = new Users(req.body);

    try{
        user.generateToken();
        await user.save();
        return res.send(user);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.post('/sessions', async (req, res) => {
    const user = await Users.findOne({username: req.body.username});

    if(!user){
        return res.status(400).send({error: 'Username or password not correct!'})
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
        return res.status(400).send({error: 'Username or password not correct!'})
    }

    user.generateToken();
    await user.save();

    return res.send(user);
});

module.exports = router;
