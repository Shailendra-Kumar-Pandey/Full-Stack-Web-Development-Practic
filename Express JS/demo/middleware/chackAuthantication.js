import jwt from 'jsonwebtoken';
import userModel from '../model/User.js';

const vailidation = async( req, res, next )=>{

    if(!req.headers?.authorization){
        return res.status(404).json({massage: "Please Enter Token..."});
    }

    try {
        if(req.headers?.authorization && req.headers?.authorization.startsWith('Bearer')){
    
            let token = req.headers?.authorization.split(' ')[1];
        
            let verify = jwt.verify(token, 'my name is Shailendra kumar pandey');
    
            let user = await userModel.findById(verify._id)
    
            if(!user){
                return res.status(404).json({massage: 'Unauthorized User...'})
            }
    
            next()
    
        }else{
            return res.status(404).json({massage: 'Please Enter Vailid Token...'})
        }
        
    } catch (error) {
        return res.status(500).json({massage: 'Not Authorized Invailid Token...'})
    }


}

export default vailidation;