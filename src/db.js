const mysql = require('mysql2');

const {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
  }= require("./config.js");

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "root1234",
    database: "chileanareas",
    authPlugins: {
      mysql_clear_password: () => (data, cb) => {
        if (data.pluginName === 'mysql_clear_password') {
          cb(null, Buffer.from(`${'contraseña'}\0`));
        }
      }
    }
  });
  

connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos: ', error);
    } else {
      console.log('Conexión exitosa a la base de datos.');
    }
  });
module.exports = connection;  