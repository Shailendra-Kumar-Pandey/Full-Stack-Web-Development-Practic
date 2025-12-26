import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true,
            minLenght: 2,
            trim: true
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
            unique: true,
            lowercase: true
        },
        phone: {
            type : String,
            required: true,
            trim: true
        },
        role: {
            type: String,
            enum: ["candidate", "recruter", "admin"],
            required: true,
            default: "candidate"
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minLenght: 8
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('user', userSchema);