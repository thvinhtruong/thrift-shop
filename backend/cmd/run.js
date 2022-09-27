const express = require('express');
const DBConn = require('../src/api/v1/helper/connection')
const {DBCfg, SSLCfg, ServerCfg, env} = require('../src/config/config')

const app = express();
    
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const Run = () => {   
    DBConn(DBCfg.dbURI, DBCfg.dbPort).then(() => {
        app.listen(ServerCfg.serverPort, ServerCfg.serverHost, () => {
            console.log(`Server is running on ${ServerCfg.serverHost}:${ServerCfg.serverPort}`)
            console.log(`Node Environment: ${env}`)
        })
    }
    ).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    Run
}