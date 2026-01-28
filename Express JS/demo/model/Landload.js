import mongoose from "mongoose";

const landloadSchema = mongoose.Schema(
    {
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required: true
        },
        address:{
            type: String,
            required: true,
            trim : true,
            minlength: 5
        },
        rent:{
            type: Number,
            required: true,
        },
        status:{
            type:String,
            enum:['APPROVED', 'PENDING', 'REJECT', 'BLOCK'],
            default: 'PENDING'
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('landload', landloadSchema)