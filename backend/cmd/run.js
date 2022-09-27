const {exec} = require('child_process');
const express = require('express');
const DBConn = require('../src/api/v1/helper/connection')
const {serverPort, serverHost, dbURI, dbPort} = require('../src/config/config')

const app = express();
    
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const Run = () => {   
    let db = DBConn(dbURI, dbPort).then(() => {
        app.listen(serverPort, serverHost, () => {
            console.log(`Server is running on port ${serverPort}`)
        })
    }
    ).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    Run
}