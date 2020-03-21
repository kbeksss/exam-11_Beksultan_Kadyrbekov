const User = require('../models/User');

const auth = async (req, res, next) => {
    const authorizationHeader = req.get('Authorization');

    if(!authorizationHeader){
        return res.status(401).send({error: 'No authorization header'});
    }

    const [type, token] = authorizationHeader.split(' ');

    if (type !== 'Token' || !token) {
        return res.status(401).send({error: 'Wrong authorization'})
    }

    const user = await User.findOne({token});

    if(!user){
        return res.status(401).send({error: 'Wrong authorization'});
    }

    req.user = user;
    next();
};

module.exports = auth;
