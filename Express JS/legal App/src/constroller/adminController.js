import userModel from "../models/Users.js"


export const fetchLawyers = async(req, res)=>{

    try {
        let getAllLawyers = await userModel?.find({role:"LAWYER"})
        return res.status(200).json({
            massage : "Get All Lawyers...",
            result : getAllLawyers
        })
    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }
}