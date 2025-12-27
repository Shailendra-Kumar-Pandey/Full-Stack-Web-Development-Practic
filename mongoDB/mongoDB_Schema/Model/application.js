import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        jobName :{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'job',
            required : true
        },
        companyName:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'company',
            required : true
        },
        status: {
          type : String,
          enum : ['applied', 'shortlisted', 'rejected'],
          default : 'applied',
          required : true  
        }
    },
    {
        timestamps: true
    }
)




export default mongoose.model("application", applicationSchema)