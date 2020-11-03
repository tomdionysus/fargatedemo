const url = require('url')

var dbu = url.parse(process.env.DB_URL || '')
var auth = (dbu.auth || '').split(':')

module.exports = {
  HOST: dbu.host,
  USER: auth[0],
  PASSWORD: auth[1],
  DB: (dbu.path || '/').substr(1),
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
