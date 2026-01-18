import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type: String,
            trim:true,
            required: true,
            minlength:5,
            maxlength:50
        },
        email:{
            type: String,
            trim:true,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        phone:{
            type: String,
            required: true,
        },
        role:{
            type:String,
            enum: ['Admin','Student','Teacher'],
            default: 'Student',
            required : true
        },
        isActive:{
            type:Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)





export default mongoose.model('user', userSchema);