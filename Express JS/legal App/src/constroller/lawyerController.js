import userModel from '../models/Users.js';
import lawyerProfileModel from '../models/LawyerProfile.js';


export const  lawyerProfile = async(req, res)=>{

        let {userId, barCouncilId, degree, lawyerType, experienceYears, totalCases, wonCases, lostCases, winRatio, feeMin, feeMax } = req.body;

        if(!userId || !barCouncilId || !degree || !lawyerType){
            return res.status(404).json({massage : "All Field Required..."})
        }

        try {
            let existUser = await userModel?.findById(userId);
            // console.log(existUser)
            if(!existUser || existUser?.role != "LAWYER"){
                return res.status(404).json({massage : "Please Enter correct UserID..."})
            }
            // console.log("result", existUser)
            let createProfile = await lawyerProfileModel.create({
                userId,
                barCouncilId,
                degree,
                lawyerType,
                experienceYears, 
                totalCases, 
                wonCases, 
                lostCases, 
                winRatio, 
                feeMin, 
                feeMax
            })

            return res.status(201).json({
                massage : "create lawyer profile",
                result : createProfile 
            })
        } catch (error) {
            return res.status(500).json({massage : `${error}, Server Error...`})
        }
}