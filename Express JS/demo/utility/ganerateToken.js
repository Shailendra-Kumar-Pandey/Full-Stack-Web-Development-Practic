import jwt from 'jsonwebtoken';

export const token = (email, _id)=>{
    return jwt.sign({email, _id},"my name is Shailendra kumar pandey", {expiresIn: '7d'})
}
