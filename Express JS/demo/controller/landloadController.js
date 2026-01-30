import landloadProfile from "../model/Landload.js";

export const completeProfile = async (req, res)=>{

    let {userID, address, rent} = req.body;
    
    if(!userID || !address || !rent){
        return res.status(404).json({massage : "All Feild required..."});
    }

    try {
        
        let existUser = await landloadProfile.findOne({userID:userID});
    
        if(existUser){
            return res.status(404).json({massage : "Profile Already Exist... Please Contact to Admin..."})
        }

        let completeLandloadProfile = await landloadProfile.create({
            userID,
            address,
            rent,
        });
        return res.status(201).json({
            massage : "Landload profile is complete but profile Aproval Pending...",
            result : completeLandloadProfile
        })
        
    } catch (error) {
        return res.status(500).json({massage : `${error} Something went wrong...`})
    }
}