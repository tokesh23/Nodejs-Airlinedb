const {city}= require("../models/index");
// const { Op } = require("sequelize");

class CityRepositry{
    async createCity({name}){
        try {
            const City =await city.create({
                name 
            })
            return City
        } catch (error) {
            console.log("something went wrong",error);
            throw {error};
            
        }
    }
    async deletecity(cityId){
        try {
            
            await city.destroy({
                where:{
                    id: cityId

                }
            })

             return true;
        } catch (error) {
            console.log("something went wrong",error);
            throw {error}
            
        }
    }

    async updatecity(cityId, data){
        try {
            const City = await city.findByPk(cityId, data);
            City.name =data.name;
            await City.save();
            return City;
        } catch (error) {
            console.error("somethng went wrong",error);
            throw {error}
            
        }
    }

    async getCity(cityId){
        try {
            const City= await city.findByPk(cityId);
            return City;
            
        } catch (error) {
            console.error("something went wrong",error)
            throw {error};
            
        }
    }


    // async getll(cityId){
    //     try {
    //         if(filter.name){
    //             const cities =await city.findAll({
    //                 where:{
    //                     name:{
    //                         [op.startswitch]:filter.name
    //                     }
    //                 }
    //             })
    //             return cities;
    //         }
            
    //     } catch (error) {
    //         console.error("something went wrong  at repositry layer",error)
    //         throw {error}
            
    //     }
    // }
}

module.exports=CityRepositry;