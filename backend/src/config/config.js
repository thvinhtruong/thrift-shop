process.env["NODE_CONFIG_DIR"] = __dirname;
process.env["NODE_CONFIG_ENV"] = "development";
const config = require('config')

const serverPort = config.get('prod.server.port');
const serverHost = config.get('prod.server.host');

const dbName = config.get('prod.database.name');
const dbURI = config.get('prod.database.mongodbURI');
const dbPort = config.get('prod.database.port');
const dbUser = config.get('prod.database.user');
const dbPassword = config.get('prod.database.password');

const sslMode = config.get('prod.server.ssl');
const sslKey = config.get('prod.server.ssl_key');
const sslCert = config.get('prod.server.ssl_cert');
const sslCA = config.get('prod.server.ssl_CA');

const env = config.util.getEnv('NODE_ENV');

const DBCfg = {
    dbName,
    dbURI, 
    dbPort,
    dbUser,
    dbPassword,
}

const SSLCfg = {
    sslMode,
    sslKey,
    sslCert,
    sslCA
}

const ServerCfg = {
    serverPort,
    serverHost
}

module.exports = {
    DBCfg,
    SSLCfg,
    ServerCfg,
    env
}
