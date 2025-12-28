import mongoose from 'mongoose';

const salary_staffSchema = new mongoose.Schema(
    {
        employee_id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        salary: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Salary_staff', salary_staffSchema)