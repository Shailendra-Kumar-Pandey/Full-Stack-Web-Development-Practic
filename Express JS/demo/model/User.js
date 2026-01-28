import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        fullName :{
            type : String,
            required: true,
            trim : true,
            minlength: 5
        },
        email:{
            type: String,
            required: true,
            trim : true,
            unique: true
        },
        mobile:{
            type: String,
            required: true,
            trim : true,
        },
        Password:{
            type: String,
            required: true,
            trim : true,
            minlength: 6
        },
        role:{
            type: String,
            enum:['USER','ADMIN','LANDLOAD'],
            default: 'USER',
            required: true
        },
        isActive:{
            type:Boolean,
            default:'true'
        }
    },
    {
        timestamps: true
    }
)



export default mongoose.model('user', userSchema);