import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {

    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Student', studentSchema)