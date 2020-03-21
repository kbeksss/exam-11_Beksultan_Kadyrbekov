const mongoose = require('mongoose');
const nanoid = require('nanoid');

const config = require('./config');
const Category = require('./models/Category');
const User = require('./models/User');
const Product = require('./models/Product');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);
    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let collection of collections){
        await mongoose.connection.db.dropCollection(collection.name);
    }

    const [cars, computers, furniture, realEstate, others] = await Category.create({
        title: 'Cars'
    }, {
        title: 'Computers'
    }, {
        title: 'Furniture'
    }, {
        title: 'Real Estate'
    }, {
        title: 'Others'
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

    await Product.create({
        title: "BMW e 38",
        category: cars,
        image: 'fixtures/BMW-e-38.jpg',
        price: 300000,
        description: 'Perfect BMW e38. In good condition',
        owner: userOne
    }, {
        title: 'Big House',
        category: realEstate,
        image: 'fixtures/country-house.jpg',
        price: 4200000,
        description: 'Country house with very good renovation',
        owner: userTwo
    }, {
        title: 'Fridge',
        category: furniture,
        image: 'fixtures/lg-fridge.jpg',
        price: 15000,
        description: 'Fridge by LG',
        owner: userThree
    }, {
        title: 'Alienware m-17',
        category: computers,
        image: 'fixtures/alienware-m17.jpg',
        price: 150000,
        description: 'Amazing gaming laptop',
        owner: userOne
    }, {
        title: 'Qidelong',
        category: others,
        image: 'fixtures/qidelong.jpg',
        price: 15000,
        description: 'Awesome bags for anything',
        owner: userThree
    });


    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});
