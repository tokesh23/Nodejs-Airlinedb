const CrudService =require("./crud-service")
const { AirportRespository}=require("../repositroy/index");
 ;

class AirportService extends CrudService{
    constructor (){
        const airportRepository= new AirportRespository();
        super(airportRepository);
    }
}
module.exports =AirportService;