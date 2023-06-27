const connection = require('../db')

exports.getAllRegions = (callback) => {
    const query = 'SELECT * FROM regions';
  
    connection.query(query, callback);
  };
  