const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    phone: { type: Number },
    address: { type: String },
    usersRole: { type: String },
    gender: { type: String },

}, { collection: 'users' })
module.exports = mongoose.model('Users', usersSchema)