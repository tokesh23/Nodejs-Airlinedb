

const {FlightService}=require("../service/index")


    const flightService = new FlightService();

    const create = async (req,res)=>{
        try {
            const Flight = await flightService.createflight(req.body);
            return res.status(201).json({
                data:Flight,
                success:true, 
                err:{},
                message: "succsefuly  a created  a flight "
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:"NOt able to  crate a flight",
                err:error
            })
            
        }
    }
     module.exports={
        create

     }