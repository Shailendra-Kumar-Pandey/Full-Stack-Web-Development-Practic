import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
    {
        jobName :{
            type : String,
            required : true,
            trim : true
        },
        companyName:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'company',
            required: true
        },
        description : {
            type : String,
            required : true,
            trim : true
        },
        HR_name : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user',
            required: true
        }
    },
    {
        timestamps : true,
    }
)

export default mongoose.model('job', jobSchema)