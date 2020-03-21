const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: async function (val) {
                if(val.length < 2){
                    throw new Error('Title must have at least two letter');
                }
            }
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: async function (val) {
                if(val.length < 2){
                    throw new Error('Description must have at least two letters');
                }
            }
        }
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: async function (val) {
                if(val <= 0){
                    throw new Error('Price must be more than 0 soms');
                }
            }
        }
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
