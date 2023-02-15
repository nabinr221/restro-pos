const mongoose = require('mongoose')

const tablesSchema = new mongoose.Schema({
    tableName: { type: String, unique: true  },
    guestCapacity: { type: Number },
    status: { type: Boolean, default: false },
}, { collection: 'tables' })

module.exports = mongoose.model('Tables', tablesSchema)
