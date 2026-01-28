import userModle from "../model/User.js";


export const ragistrationUser = async (req, res)=>{

    let { fullName, email, mobile, Password, role } = req.body;

    if(!fullName || !email || !mobile || !Password || !role){
        return res.status(404).json({massaga : "All Field Required..."})
    }

    try {

        let existUser = await userModle.findOne({email: email});

        if(existUser){
            return res.status(404).json({massage: "Email ID already Exist..."})
        }

        let payLoad = await userModle.create({
            fullName, email, Password, mobile, email, role
        })

        res.status(201).json({
            massage : "User Create Successfully....",
            result : payLoad
        })
        
    } catch (error) {
        return res.status(500).json({massage: "Something went wrong...",error: error})
    }

}