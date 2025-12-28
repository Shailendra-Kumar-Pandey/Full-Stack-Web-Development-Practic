import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    father_name: {
      type: String,
      required: true,
      trim: true
    },
    department: {
        type: String,
        enum: ['security', 'cleaning', 'management'],
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Staff", staffSchema);
