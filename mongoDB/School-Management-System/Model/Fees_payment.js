import mongoose from 'mongoose';

const fees_paymentSchema = new mongoose.Schema(
    {
        student_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        fees: {
            type: String,
            trim: true,
            required: true,
        },
        class_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Student'
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Fees_payment',)