import userModel from '../models/Users';
import lawyerProfile from '../models/LawyerProfile.js';


export const  lawyerProfile = async(req, res)=>{

        let {userId, barCouncilId, degree, lawyerType} = req.body;

        if(!userId || !barCouncilId || !degree || !lawyerType){
            return res.status(404).json({massage : "All Field Required..."})
        }

        try {
            let existUser = await userModel.findOne(userId);
            if(!existUser || !existUser.role === "LAWYER"){
                return res.status(404).json({massage : "Please Enter correct UserID..."})
            }

            let createProfile = await lawyerProfile.create({
                userId,
                barCouncilId,
                degree,
                lawyerType
            })

            return res.status(201).json({
                massage : "create lawyer profile",
                result : createProfile 
            })
        } catch (error) {
            return res.status(500).json({massage : `${error}, Server Error...`})
        }
}