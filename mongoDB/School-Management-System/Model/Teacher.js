import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        teacher_id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Teacher', teacherSchema);