import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
     {
        cName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 100,
        },

        address: {
        type: String,
        required: true,
        trim: true,
        },

        email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },

        phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^[6-9]\d{9}$/, "Please enter a valid phone number"],
        },

        website: {
        type: String,
        trim: true,
        },

        description: {
        type: String,
        trim: true,
        maxlength: 500,
        },

        industry: {
        type: String,
        trim: true,
        },

        recruiter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        }
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("company", companySchema)