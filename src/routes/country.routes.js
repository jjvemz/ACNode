const express= require('express');
const communesController = require('../controllers/communes.controller');
const regionController = require('../controllers/region.controller');

const router = express.Router();

router.get('/communes/:region_id', communesController.getCommuneByRegionId);
router.get('/regions', regionController.getAllRegions);

module.exports = router;