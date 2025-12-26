import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {},
    {
        timestamps: true
    }
)




export default mongoose.model("application", applicationSchema)