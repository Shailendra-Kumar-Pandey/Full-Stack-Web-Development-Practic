import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
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
        password:{
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


userSchema.pre('save', async function(){

    if(!this.isModified('password')){
        return;
    }

    this.password = await bcrypt.hash(this.password, 10);

})

export default mongoose.model('user', userSchema);