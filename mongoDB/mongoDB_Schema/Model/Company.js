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
            trim: true
        },
        website: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        industry: {
            type: String,
            trim: true,
        },
        recruter_id: {
            type : mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true 
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("company", companySchema)