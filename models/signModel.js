const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signSchema = mongoose.Schema(
    {
        paymentInsurance: {
            type: String,
            required: true
        },
        clientSignature: {
            type: String,
            required: true
        },
        clientDate: {
            type: String,
            required: true
        },
        guarantorSignature: {
            type: String,
            required: true
        },
        guarantorDate: {
            type: String,
            required: true
        },
        representativeSignature: {
            type: String,
            required: true
        },
        representativeDate: {
            type: String,
            required: true
        },
            
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Sign', signSchema);