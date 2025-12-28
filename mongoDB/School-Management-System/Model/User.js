import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100
        },
        role : {
            type: String,
            enum : ['admin', 'student', 'teacher', 'staff'],
            default: 'student',
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true 
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6
        },
        phone: {
            type: String,
            trim: true,
            required : true, 
        }
    },
    {
        timestamps : true,
    }
)


export default mongoose.model('User', userSchema)