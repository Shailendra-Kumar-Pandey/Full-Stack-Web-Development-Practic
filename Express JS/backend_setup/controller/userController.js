import User from '../models/User.js';

export const Ragistration = async(req, res)=>{

    if(!req.body.fullName || !req.body.email || !req.body.password || !req.body.phone || !req.body.role){
        return res.status(400).send({massage: "All feild required..."})
    }

    if(!req.body.email.includes('@' && '.com')){
        return res.status(400).send({massage: "Please Enter Vailid Email..."})
    }

    try {
        let payload = req.body;
        let data = await User.create(payload);
        res.status(201).send({massage: data});
        
    } catch (error) {
        res.status(500).send({massage : `${error} Something went wrong...`})
    }
}