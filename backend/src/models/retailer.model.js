const mongoose = require('mongoose')

const retailerSchema = new mongoose.Schema({
    retailerId: Number,
    fullname: String,
    email: String,
    password: String,
    address: String,
}, {
    timestamps: true
})