import userModle from "../model/User.js";
import bcrypt from "bcrypt";
import { token } from "../utility/ganerateToken.js";

export const ragistrationUser = async (req, res)=>{

    let { fullName, email, mobile, password, role } = req.body;

    if(!fullName || !email || !mobile || !password || !role){
        return res.status(404).json({massaga : "All Field Required..."})
    }
    try {

        let existUser = await userModle.findOne({email: email});

        if(existUser){
            return res.status(404).json({massage: "Email ID already Exist..."})
        }

        let payLoad = await userModle.create({
            fullName, email, password, mobile, email, role
        })

        res.status(201).json({
            massage : "User Create Successfully....",
            result : payLoad
        })
        
    } catch (error) {
        return res.status(500).json({massage: `${error} Something went wrong...`,error: error})
    }

}

export const logIN = async (req, res)=>{

    let {email, password} = req.body;

    if(!email || !password){
        return res.status(404).json({massage: "All feild required...."});
    }

    try {
        
        let existUser = await userModle.findOne({email:email})

        if(!existUser){
            return res.status(404).json({massage: "Invailid Email ID and Password... Please Create a Account... "})
        }

        let verify = await bcrypt.compare(password, existUser.password)

        if(!verify){
            return res.status(404).json({massage: "Incorrect Password, Please Enter Vailid Password"})
        }

        return res.status(200).json({
            massage : "User is Log IN...",
            result:{
                _id:existUser._id,
                token: token(existUser.email, existUser._id),
                fullName: existUser.fullName,
                email: existUser.email,
                mobile: existUser.mobile,
                password: existUser.password,
                role: existUser.role
            }
        })

    } catch (error) {
       return res.status(500).json({
            massage: `${error} Something went wrong...`,
            error: error
        })
    }

}