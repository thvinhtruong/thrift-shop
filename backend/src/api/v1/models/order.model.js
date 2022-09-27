const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderId: Number,
    userId: Number,
    products: Array,
    discountCode: {
        code: String,
        discount: Number
    },
    totalPrice: Number,
    status: {
        type: String,
        default: 'active'
    },
    address: String,
    payment: Object,
    delivery: Object,
}, {
    timestamps: true
})

orderSchema.pre('save', function (next) {
    const code = this.discountCode
    if (code) {
        code.discount = code.discount / 100
        this.totalPrice = this.totalPrice * code.discount
    }
    next()
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
