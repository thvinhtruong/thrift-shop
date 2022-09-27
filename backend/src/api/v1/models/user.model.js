const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    userId: Number,
    fullname: String,
    email: String,
    password: String,
    address: String,
    phone: String,
    blocked: Boolean,
    cart: Array, of: {
        products: Product,
        buy_later: Object,
        price: Number,
    },
    }, {
        timestamps: true
    }
)


userSchema.pre('save', async function(next) {
    const salt = bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})
 
// hashing in bycrypt is CPU intensive
// using async mode which ultilizes thread pool, so it will not block the main event loop
userSchema.methods.isCorrectPassword = async function(password) {
    const compare = await bcrypt.compare(password, this.password)

    return compare
}

const User = mongoose.model('User', userSchema)

module.exports = User
