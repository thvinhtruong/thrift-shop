process.env["NODE_CONFIG_DIR"] = __dirname;
const config = require('config')
const serverPort = config.get('server.port');
const serverHost = config.get('server.host');
const dbURI = config.get('database.mongodbURI');
const dbPort = config.get('database.port');

module.exports = {
    serverPort,
    serverHost,
    dbURI,
    dbPort
}
