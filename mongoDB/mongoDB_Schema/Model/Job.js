import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
    {

    },
    {
        timestamps : true,
    }
)

export default mongoose.model('job', jobSchema)