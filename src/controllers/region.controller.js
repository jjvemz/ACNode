const regionModel = require('../models/regionsModel');

exports.getAllRegions = (req, res) => {
    regionModel.getAllRegions((error, results) => {
      if (error) {
        console.error('Error al obtener los datos: ', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los datos' });
      } else {
        res.json(results);
      }
    });
  };