const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    extras: [
        {
            type: String,
            required: true
        }
    ],
    category: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
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


module.exports = mongoose.model('Rooms', RoomSchema); 