const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
        minlength: 8,
        default: ''
    },
    message: {
        type: String,
        required: true,
        default: ''
    },
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;