import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        class: {
            type: String,
            required: true,
            trim: true,
        },
        father_name: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        imgURL:{
            type: String,
            required: true,
            trim: true
        },                                                    
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Student', studentSchema)