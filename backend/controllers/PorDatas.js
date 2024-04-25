import porData from '../models/PorDatas.js'


const savePOR = async (req,res)=>{
    try {
        console.log("Register page")
        const formData = req.body;
        const porExists = await porData.findOne({ porNumber: formData.porNumber });
        if(porExists){
            return res.status(200).json({"msg":"POR Already Exits"});
        }
        const userCreated = await porData.create(formData);
        if(!userCreated){
            return res.status(500).json({"msg":"Data not created"});
        }
        return res.status(200).json({"msg":"User Created!"})

    } catch (error) {
        return res.status(500).json({"msg":"Internal server side error"});
    }
}



export { savePOR};