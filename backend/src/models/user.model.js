const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    userId: Number,
    fullname: String,
    email: String,
    password: String,
    address: String,
    cart: {
        type: Array, of: {
            productId: Number,
        },
        default: []
    },
    }, {
        timestamps: true
    }
)


userSchema.pre('save', async function(next) {
    const user = this
    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash
    next()
})

// hashing in bycrypt is CPU intensive
// using async mode which ultilizes thread pool, so it will not block the main event loop
userSchema.methods.isValidPassword = async function(password) {
    const user = this
    const compare = await bcrypt.compare(password, user.password)

    return compare
}

const User = mongoose.model('User', userSchema)

module.exports = User
