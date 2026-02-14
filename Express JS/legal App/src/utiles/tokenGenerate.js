import jwt from 'jsonwebtoken';

const token = (userID, name)=>{
    return jwt.sign({userID, name}, "My name is Uzaif Khan", {expiresIn: '7d'})
}

export default token;