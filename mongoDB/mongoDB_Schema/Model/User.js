import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true,
            minLenght: 2,
            trim: true,
        },
        lName: {
            type: String,
            required: true,
            trim: true,
            minLenght: 2
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type : String,
            required: true,
            
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('user', userSchema);