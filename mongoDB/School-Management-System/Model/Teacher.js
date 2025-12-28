import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        teacher_id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        pincode: {
            type: Number,
            required: true,
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            enum :['math', 'science', 'socal-science', 'english', 'hindi', 'sanskrit', 'camistry', 'biology', 'physices'],
            trim: true,
        },
        imgURL:{
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Teacher', teacherSchema);