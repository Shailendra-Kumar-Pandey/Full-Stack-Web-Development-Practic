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



export const lawyerStatus = async(req, res)=>{

    try {

        let {status, adminRemark} = req?.body;
        
        let profileId = req?.params?.profileID
        
        if(!profileId){
            return res.status(404).json({massage: "Please Provide lawyer Profile ID..."})
        }

        if(!status || !adminRemark){
            return res.status(404).json({massage: "All Field Required..."})
        }

        let existLawyerProfile = await lawyerModel.findById(profileId);

        if(!existLawyerProfile){
            return res.status(404).json({massage:"Please Enter Vailid Lawyer Profile ID"});
        }
    
        existLawyerProfile.status = status;

        existLawyerProfile.adminRemark = adminRemark;

        status === "APPROVED" ? existLawyerProfile.approvedAt = new Date() : null;

        await existLawyerProfile.save()         // mongoose function {save()}
        
        return res.status(201).json({
            massage: "Lawyer Status Change...",
            result : existLawyerProfile
        })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }
}