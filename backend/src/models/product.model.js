const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: Number,
    title: String,
    description: String,
    brand: String,
    quality: Number,
    price: Number,
    specs: {
        k: String,
        v: String
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product


