const {flights}=require("../models/index")

class FlightRepository{
    async createflight(data){
        try {
            const Flights =await flights.create(data);
            return Flights;
        } catch (error) {
            console.error("something went wrog  at repository layer",error)
            throw{error}
            
        }
        
    }
}
module.exports= FlightRepository