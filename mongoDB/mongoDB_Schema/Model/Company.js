import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        cName: {
            type: String,
            trim: true,
            required: true,
            minlenght: 2,
        },
        address : {
            type : String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        phone: {
            type : String,
            required: true,
            trim: true,
            
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("company", companySchema)