class CrudRepository{
    constructor(model){
       
this.model=model;
        
    }
    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        }catch(error){
            console.log("something went a wrong in crud repostrory");
            throw {error}
        }
    }


async destroy(modelId){
    try {
        const reslut = await this.model.destroy({
            where: {
                id:modelId
            }
        })
        return true ;
    } catch (error) {
        console.log("Something went wrong in crud repository");
            throw {error}
        
    }

}
async getAll() {
    try {
        const result = await this.model.findAll();
        return result;
    } catch (error) {
        console.log("Something went wrong in crud repository");
        throw {error}
    }
}
async update(modelId, data) {
    try {
        const result = await this.model.update(data, {
            where: {
                id: modelId
            }
        })
        return result;
    } catch (error) {
        console.log("Something went wrong in crud repository");
        throw {error}
    }
}

}

module.exports =CrudRepository