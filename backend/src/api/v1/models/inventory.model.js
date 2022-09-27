const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    inventoryId: Number,
    retailerId: Number,
    productId: Number,
    quantity: Number,
    reservations: Array, of: {
        userId: Number,
        quantity: Number
    },
}, {
    timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory