const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Profile', profileSchema);