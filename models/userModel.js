const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,

        },
        address: {
            type: String,
        },
        contact: {
            type: Number,
        },
        password: {
            type: String,
            required: true
        },
        roles: {
            ref: "Role",
            type: [Schema.Types.ObjectId],
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);