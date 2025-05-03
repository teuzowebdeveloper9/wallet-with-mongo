import UserSchema from "../../schemas/user.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

async function create(data){
 return UserSchema.create(data);
}

async function findByEmail(email){
  const user = await UserSchema.findOne({email})

  return user
}

async function generateToken(id){
  return jwt.sign({id}, 'PASSWORD', {expiresIn: 172800});
}

export default {create, findByEmail,generateToken }