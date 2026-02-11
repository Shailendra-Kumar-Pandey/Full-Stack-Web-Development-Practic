import userModel from '../models/Users.js'
import bcrypt from 'bcrypt';

export const RagistrationController = async (req, res)=>{

    let { name, email, phone, password, role } = req.body;

    if(!name || !email || !phone || !password || !role){
        return res.status(400).json({massage: "All Field Required..."})
    }

    try {
        
        let existUser = await userModel.findOne({email})

        if(existUser){
            return res.status(400).json({massage: "This email Id alrady exist..."});
        }

        let newUser = await userModel.create({
            name,
            email,
            phone,
            password,
            role
        })

        res.status(201).json({
            massage: "Create new User in DataBase",
            result : newUser
        })

    } catch (error) {
        return res.status(500).json({massage : `${error} Server Error...`})
    }
}


export const logIN = async(req, res)=>{

    let {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({massage : "All Field Required..."})
    }

    try {
        
        let existUser = await userModel.findOne(email)

        if(!existUser){
            return res.status(400).json({massage : "Please Enter Vailid Email Id... This user Not exist..."})
        }

        let isMatch = await bcrypt.compare(password, existUser.password);

        


    } catch (error) {
        return res.status(500).json({massage : `${error} Server Error...`})
    }

}