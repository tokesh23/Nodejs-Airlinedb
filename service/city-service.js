const {CityRepositry} =require("../repositroy/index")

class CityService{
    constructor(){
        this.cityRepositry= new CityRepositry();
    }
    async createCity (data){
         try {
            const city = await  this.cityRepositry.createCity(data);
            return city;

         } catch (error) {
            console.log("something went a wrong at service layer",error);
            throw {error} 
            
         }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRepositry.deletecity(cityId)
            return response;
        } catch (error) {
            
            console.error("soemthing went wrong atn  service layer",error);
            throw {error}
        }
    }
    async  updatecity(cityId,data){
        try {
          const city = await this.cityRepositry.updatecity(cityId,data);
           return city
        } catch (error) {
            console.error("somethng went wrong at service layer",error);
            throw {error}

            
        }
    }
    async getCity(cityId,date){
        try {
            const city =await this.cityRepositry.getCity(cityId,date)
            return city;
        } catch (error) {
        console.error("something went wrong at service layer".error);
        throw {error}

        }
    }

    async getAllCities(filter){
        try {
            const cities =await this.cityRepositry.getAllCities({name:filter.name});
            return cities
        } catch (error) {
            console.error("something went a wrong  at service layer",error)
            throw {error}
            
        }
    }
}

module.exports= CityService;