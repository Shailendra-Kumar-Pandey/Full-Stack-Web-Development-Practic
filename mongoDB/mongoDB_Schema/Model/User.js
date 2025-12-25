import mongoose, { syncIndexes, Types } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required: true,
            minlength: 3,
            maxlength: 30,
            trim: true,
        },
        age :{
            type : Number,
            required: true,
            min: 18,
            max: 60,
        },
        email :{
            type : String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },
        mobile : {
            type : String,
            required: true,
            unique: true            
        },
        password : {
            type : String,
            required: true,
            minlength: 8,
            maxlength: 15,
        },
        address : { 
            type : String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('user', userSchema);