const mongoose = require('mongoose')

const menusSchema = new mongoose.Schema({
    menuName: { type: String },
    category: { type: String },
    price: { type: String },
}, { collection: 'menus' })

module.exports = mongoose.model('Menus', menusSchema)
