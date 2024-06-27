const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assessmentSchema = mongoose.Schema(
    {
        patient: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true
        },
        completed: {
            type: String,
            required: true
        },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('assessment',assessmentSchema );