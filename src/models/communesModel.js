const connection = require('../db');

exports.getCommuneByRegionId = (regionId, callback) => {
  const query = 'SELECT * FROM communes WHERE region_id = ?';

  connection.query(query, [regionId], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};
