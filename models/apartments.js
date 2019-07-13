const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Apartment = new Schema ({
        name: { type: String, required: true },
        description: { type: String, required: true },
});

module.exports = mongoose.model('Apartment', Apartment)

