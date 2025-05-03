import UserSchema from "../../schemas/user.js";

async function create(data){
 return UserSchema.create(data);
}

async function findByEmail(email){
  const user = await UserSchema.findOne({email})

  return user
}

async function generateToken(id){
  return id;
}

export default {create, findByEmail,generateToken }