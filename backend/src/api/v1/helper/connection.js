
const mongoose = require('mongoose')


const DBConn = async (MONGO_URI, PORT) => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database connected')
        console.log('Mongodb running on port', PORT)
    } catch (error) {
        console.log(error)
    }
}

module.exports = DBConn


