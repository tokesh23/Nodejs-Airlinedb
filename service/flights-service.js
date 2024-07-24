const { FlightRepository,  AirplaneRepository}= require("../repositroy/index")


class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository =new FlightRepository();
    }

    async createflight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            if (!airplane) {
                throw new Error(`Airplane with id ${data.airplaneId} not found`);
            }

            const Flight = await this.flightRepository.createflight({
                ...data,
                totalSeats: airplane.capacity
            });
            return Flight;
        } catch (error) {
            console.error("skjfldsl", error);
            throw { error };
            
        }
    }
     
}

module.exports=FlightService;


// flightNumber,
//  * airplaneId,
//  * departureAirportId,
//  * arrivalAirportId,
//  * arrivalTime,
//  * departureTime,
//  * price
//  *    -> airplane