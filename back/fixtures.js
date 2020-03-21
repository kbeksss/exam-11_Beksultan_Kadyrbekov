const mongoose = require('mongoose');
const config = require('./config');
const Category = require('./models/Category');
const User = require('./models/User');
const nanoid = require('nanoid');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);
    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let collection of collections){
        await mongoose.connection.db.dropCollection(collection.name);
    }

    const [cars, computers, homeAppliances, realEstate, electronics] = await Category.create({
        title: 'Cars'
    }, {
        title: 'Computers'
    }, {
        title: 'Home Appliances'
    }, {
        title: 'Real Estate'
    }, {
        title: 'Electronics'
    });

    const [userOne, userTwo, userThree] = await User.create({
        username: 'john',
        password: '123',
        name: 'John Doebek',
        phone: '0770858585',
        token: nanoid()
    }, {
        username: 'max',
        password: '123',
        name: 'Mad Max',
        phone: '0770050505',
        token: nanoid()
    }, {
        username: 'mathew',
        password: '123',
        name: 'Alan Mathew',
        phone: '0505585858',
        token: nanoid()
    }, {
        username: 'dim',
        password: '123',
        name: 'Dim Dimich',
        phone: '0770858585',
        token: nanoid()
    });


    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});
