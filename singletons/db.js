var mysql = require('mysql');

var instance;

class Database  {
    getInstance () {
      if (instance) {
        return instance;
      }

      instance = mysql.createPool({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
      });

      return instance;
    }
}

module.exports = new Database();
