const express = require("express");
 
 const {CityController,FlightController,AirpotController}=require("../../controllers/index")

const router = express.Router();

 
router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update);




router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);


router.post("/airports",AirpotController.create);



 

module.exports = router;
