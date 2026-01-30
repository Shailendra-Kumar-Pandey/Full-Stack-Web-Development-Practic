import landloadModel from "../model/Landload.js"

export const getAllLandload = async (req, res)=>{

    try {
        
        let fetchLandload = await landloadModel.find();

        res.status(200).json({
            massage: 'Fetch All Landload...',
            result : fetchLandload
        })
        
    } catch (error) {
        
        return res.status(500).json({massage : "Something Went Wrong..."})
    }

}