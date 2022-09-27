const mongoose = require('mongoose')

const retailerSchema = new mongoose.Schema({
    retailerId: Number,
    fullname: String,
    email: String,
    password: String,
    address: String,
    blocked: Boolean,
    validateDate: Date,
    productList: Array, of: {
        productId: Number,
        quantity: Number,
    }
}, {
    timestamps: true
})