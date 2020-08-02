const mongoose = require('mongoose');

const DishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [
        {
            comment:  {
                type: String,
                required: true
            },
            author: {
                type: String,
                default: 'User'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});


module.exports = mongoose.model('Dishes', DishSchema); 