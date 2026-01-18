import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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


userSchema.pre('save', async function(next){

    if(!this.isModified === "password"){
        return next()
    }

    this.password = await  bcrypt.hash(this.password, 10)
})



export default mongoose.model('user', userSchema);