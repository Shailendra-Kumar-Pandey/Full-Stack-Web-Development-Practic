import lawyerModel from "../models/LawyerProfile.js"


export const fetchLawyers = async(req, res)=>{

    try {
        let getAllLawyers = await lawyerModel.find()
        return res.status(200).json({
            massage : "Get All Lawyers...",
            result : getAllLawyers
        })
    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }
}