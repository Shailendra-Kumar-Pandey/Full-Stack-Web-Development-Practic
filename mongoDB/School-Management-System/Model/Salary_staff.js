import mongoose from 'mongoose';

const salary_staffSchema = new mongoose.Schema(
    {

    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Salary_staff', salary_staffSchema)