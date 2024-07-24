const express = require("express");
const CityController = require('../../controllers/city-controllers');
const Flightcontroller = require ('../../controllers/flight-controllers')

const router = express.Router();

 
router.post('/city',CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);


router.post('/flights',Flightcontroller.create)

module.exports = router;
