const communesModel = require('../models/communesModel');

exports.getCommuneByRegionId = (req, res) => {
  const regionId = req.params.region_id;

  communesModel.getCommuneByRegionId(regionId, (error, result) => {
    if (error) {
      console.error('Error al obtener las comunas: ', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener las comunas' });
    } else if (result.length > 0) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'No se encontraron comunas para el id proporcionado' });
    }
  });
};
