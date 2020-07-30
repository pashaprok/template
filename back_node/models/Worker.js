const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    instagram: {
        type: String
    },
    telegram: {
        type: String
    },
    mail: {
        type: String
    }
});

module.exports = mongoose.model('Workers', WorkerSchema);   