import lawyerModel from "../models/LawyerProfile.js"
import mailRecever from '../utiles/mailGanerator.js'


export const fetchLawyers = async(req, res)=>{

    try {
        let getAllLawyers = await lawyerModel.find()
        return res.status(200).json({
            message : "Get All Lawyers...",
            result : getAllLawyers
        })
    } catch (error) {
        return res.status(500).json({message : `${error}, Server Error...`})
    }
}



export const lawyerStatus = async(req, res)=>{

    try {

        let {status, adminRemark} = req?.body;
        
        let profileId = req?.params?.profileID
        
        if(!profileId){
            return res.status(404).json({message: "Please Provide lawyer Profile ID..."})
        }

        if(!status || !adminRemark){
            return res.status(404).json({message: "All Field Required..."})
        }

        let existLawyerProfile = await lawyerModel.findById(profileId).populate({
            path: 'userId',
            select:'-password -__v'
        });


        // console.log(existLawyerProfile)


        // return
        if(!existLawyerProfile){
            return res.status(404).json({message:"Please Enter Vailid Lawyer Profile ID"});
        }
        
        existLawyerProfile.status = status;

        existLawyerProfile.adminRemark = adminRemark;

        status === "APPROVED" ? existLawyerProfile.approvedAt = new Date() : null;

        await existLawyerProfile.save()         // mongoose function {save()}
       // console.log(existLawyerProfile.userId.email)
        // return


          mailRecever(existLawyerProfile.userId.email, status, adminRemark)


         
        return res.status(201).json({
            message: "Lawyer Status Change...",
            result : existLawyerProfile
        })

    } catch (error) {
        return res.status(500).json({message : `${error}, Server Error...`})
    }
}