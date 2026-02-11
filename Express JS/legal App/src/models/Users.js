import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 30
        },
        email: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 30,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 10
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["ADMIN", "LAWYER", "CLIENT"]
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)


UserSchema.pre('save', async function () {
    
    if(!this.isModified('password')){
        return
    }

    //  const salt = bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, 10);

})

export default mongoose.model("User", UserSchema)

