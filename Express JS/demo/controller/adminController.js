import landloadModel from "../model/Landload.js"

export const getAllLandload = async (req, res)=>{

    try {
        
        let fetchLandload = await landloadModel.find();

        res.status(200).json({
            massage: 'Fetch All Landload...',
            result : fetchLandload
        })

    } catch (error) {
        
        return res.status(500).json({massage : "Something Went Wrong..."})
    }

}

export const landloadProfileVerification = async (req, res)=>{

    let {status, remark} = req.body;

    let landloadID = req.params.profileID;

    if(!landloadID){
        return res.status(404).json({massage: "Please Enter Landload ID..."})
    }

    try {
        
        let existLandload = await landloadModel.findById(landloadID);
    
        if(!existLandload){
            return res.status(404).json({massage : 'Please Enter Vailid ID...'})
        }
    
        existLandload.status = status;
        existLandload.remark = remark;

        status === 'APPROVED' ? existLandload.approvedAt = new Date() : null;


        await existLandload.save()
    
        return res.status(200).json({
            massage: "Admin Chack landload Profile",
            result: existLandload
        })
        
    } catch (error) {
        return res.status(500).json({massage: "Something went wrong..."})
    }

}