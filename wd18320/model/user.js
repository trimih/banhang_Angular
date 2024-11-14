const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    role: { type: String, default: 'user' }
}
);
module.exports = mongoose.model('user', user); //users