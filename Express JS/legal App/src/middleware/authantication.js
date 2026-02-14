import jwt from 'jsonwebtoken'


const authantication = async (req, res, next)=>{

    let authHeaders = req?.headers?.authorization

    try {
        if(!authHeaders || !authHeaders.startsWith('Bearer')){
            return res.status(400).json({massage : "Please Enter Token..."})
        }
    
        let token = authHeaders?.split(' ')[1];
    
        let isVerify = jwt?.verify(token, 'My name is Uzaif Khan');
    
        if(!isVerify){
            return res.status(400).json({massage : "Please Enter Vailid Token..."});
        }
    
        next()
        
    } catch (error) {
        return res.status(500).json({massage : `${error}, Unautherized User....`});
    }
}


export default authantication;
